import { apiClient } from "../api-client";

// Response types matching your backend
export interface AuthUrlResponse {
  data: {
    authUrl: string;
  };
}

interface ApiSuccessEnvelope<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  hhUserId: string;
}

export interface AuthCallbackUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  hhUserId: string;
  accessToken?: string;
  refreshToken?: string;
  tokenExpiresAt?: number;
}

export interface RefreshTokenResponse {
  accessToken: string;
}

export const authApi = {
  /**
   * Step 1: Get the HH.ru authorization URL
   * Endpoint: GET /auth/hh
   */
  initiateAuth: async (): Promise<AuthUrlResponse> => {
    const { data } = await apiClient.get<AuthUrlResponse>("/auth/hh");
    return data;
  },

  /**
   * Step 2: Handle the callback from HH.ru
   * Endpoint: GET /auth/callback?code=xxx&state=xxx
   * Note: This is typically handled by your backend redirect,
   * but if you need to call it from frontend:
   */
  handleCallback: async (
    code: string,
    state: string,
  ): Promise<AuthCallbackUser> => {
    const { data } = await apiClient.get<ApiSuccessEnvelope<AuthCallbackUser>>(
      "/auth/callback",
      { params: { code, state } },
    );
    return data.data;
  },

  /**
   * Step 3: Refresh the access token
   * Endpoint: POST /auth/refresh
   */
  refreshToken: async (userId: string): Promise<RefreshTokenResponse> => {
    const { data } = await apiClient.post<RefreshTokenResponse>(
      "/auth/refresh",
      { userId },
    );
    return data;
  },
};
