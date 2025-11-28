import { useMutation, useQuery } from "@tanstack/react-query";
import { authApi } from "@/shared/api/auth/auth.api";

export const useHHAuth = () => {
  // Mutation to initiate the HH.ru login flow
  const initiateLoginMutation = useMutation({
    mutationFn: authApi.initiateAuth,
    onSuccess: ({ data }) => {
      window.location.href = data.authUrl;
    },
    onError: (error: any) => {
      console.error("Failed to initiate HH login:", error.message);
      // You can add toast notification here
    },
  });

  return {
    login: initiateLoginMutation.mutate,
    isLoggingIn: initiateLoginMutation.isPending,
    error: initiateLoginMutation.error,
  };
};

/**
 * Hook to handle the OAuth callback
 * Use this on your callback page (e.g., /auth/callback)
 */
export const useHHCallback = (code: string | null, state: string | null) => {
  return useQuery({
    queryKey: ["hh-callback", code, state],
    queryFn: () => authApi.handleCallback(code!, state!),
    enabled: !!code && !!state, // Only run if both exist
    retry: false,
    staleTime: Infinity, // Code is single-use
    gcTime: 0, // Don't cache this query
  });
};

/**
 * Hook to manually refresh token
 */
export const useRefreshToken = () => {
  return useMutation({
    mutationFn: (userId: string) => authApi.refreshToken(userId),
    onSuccess: (data) => {
      // Store new token
      localStorage.setItem("accessToken", data.accessToken);
    },
    onError: (error: any) => {
      console.error("Token refresh failed:", error.message);
      // Redirect to login
      window.location.href = "/login";
    },
  });
};
