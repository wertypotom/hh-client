// shared/hooks/use-integration.ts
"use client";

import { useCallback } from "react";
import { getIntegrationConfig, IntegrationType } from "../config/integrations";

interface UseIntegrationOptions {
  onBeforeConnect?: (type: IntegrationType) => void;
}

/**
 * Hook for managing integration connections
 * Handles OAuth redirects and can be extended for analytics, error tracking, etc.
 */
export const useIntegration = (options?: UseIntegrationOptions) => {
  const connect = useCallback(
    (type: IntegrationType) => {
      try {
        const config = getIntegrationConfig(type);

        if (!config) {
          throw new Error(`Integration ${type} not found`);
        }

        // Call optional before-connect callback (useful for analytics)
        options?.onBeforeConnect?.(type);

        // Perform the OAuth redirect
        window.location.href = config.authUrl;
      } catch (error) {
        console.error(`Failed to connect to ${type}:`, error);
      }
    },
    [options],
  );

  return { connect };
};
