import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

// Standard error response shape
export interface ApiError {
  message: string;
  code?: string;
  status?: number;
  details?: any;
}

// Create the base Axios instance
export const apiClient = axios.create({
  baseURL:
    `${process.env.NEXT_PUBLIC_HH_API_URL}/api` || "http://localhost:3000",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Important for cookies/sessions
});

// Request Interceptor: Attach tokens or modify requests globally
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Example: Attach auth token from localStorage/sessionStorage
    // const token = localStorage.getItem('accessToken')
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }

    return config;
  },
  (error) => Promise.reject(error),
);

// Response Interceptor: Handle errors & token refresh globally
apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<any>) => {
    const originalRequest = error.config;

    // Handle 401 Unauthorized - Token expired
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        // Attempt to refresh the token
        const userId = localStorage.getItem("userId"); // Or get from your state management
        if (userId) {
          const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
            { userId },
            { withCredentials: true },
          );

          // Store new token if your backend returns it
          if (data.accessToken) {
            localStorage.setItem("accessToken", data.accessToken);
          }

          // Retry the original request
          return apiClient(originalRequest);
        }
      } catch (refreshError) {
        // Refresh failed - redirect to login
        if (typeof window !== "undefined") {
          localStorage.clear();
          window.location.href = "/login";
        }
        return Promise.reject(refreshError);
      }
    }

    // Normalize error format for consistent handling
    const customError: ApiError = {
      message:
        error.response?.data?.message ||
        error.message ||
        "Network error occurred",
      status: error.response?.status,
      code: error.response?.data?.code,
      details: error.response?.data,
    };

    return Promise.reject(customError);
  },
);

// TypeScript augmentation for retry flag
declare module "axios" {
  export interface InternalAxiosRequestConfig {
    _retry?: boolean;
  }
}
