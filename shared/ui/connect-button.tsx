// shared/ui/connect-button.tsx
"use client";

import * as React from "react";
import { Button } from "./button";
import { useIntegration } from "../hooks/use-integration";
import { IntegrationType } from "../config/integrations";
import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button";

interface ConnectButtonProps
  extends Omit<React.ComponentProps<"button">, "onClick">,
    VariantProps<typeof buttonVariants> {
  integration: IntegrationType;
  onBeforeConnect?: (type: IntegrationType) => void;
}

/**
 * Specialized button for connecting to external integrations
 * Handles OAuth flow initiation with proper error handling
 */
export const ConnectButton = React.forwardRef<
  HTMLButtonElement,
  ConnectButtonProps
>(
  (
    {
      integration,
      children,
      onBeforeConnect,
      onError,
      variant,
      size,
      className,
      ...props
    },
    ref,
  ) => {
    const { connect } = useIntegration({ onBeforeConnect });

    const handleConnect = () => {
      connect(integration);
    };

    return (
      <Button
        ref={ref}
        onClick={handleConnect}
        variant={variant}
        size={size}
        className={className}
        {...props}
      >
        {children}
      </Button>
    );
  },
);

ConnectButton.displayName = "ConnectButton";
