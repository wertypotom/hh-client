// shared/hooks/auth/use-auth-callback.ts
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { authApi } from "@/shared/api/auth/auth.api";

export function useAuthCallback() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const errorParam = searchParams.get("error");

  const query = useQuery({
    queryKey: ["hh-auth-callback", code, state],
    queryFn: () => authApi.handleCallback(code!, state!),
    enabled: !!code && !!state && !errorParam,
    retry: false,
  });

  useEffect(() => {
    if (query.data) {
      // Store minimal user info (only what you need on client)
      localStorage.setItem("userId", query.data.id);

      // Clean URL from code/state & navigate to jobs
      router.replace("/jobs");
    }
  }, [query.data, router]);

  return query;
}
