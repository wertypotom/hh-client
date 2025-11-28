"use client";

import { Button } from "@/shared/ui";
import { useHHAuth } from "@/shared/hooks/auth/use-hh-auth";
import { Loader2 } from "lucide-react";

type Props = {
  children?: React.ReactNode;
};

export function HHLoginButton({ children }: Props) {
  const { login, isLoggingIn, error } = useHHAuth();

  return (
    <Button
      onClick={() => login()}
      disabled={isLoggingIn}
      className="bg-[#D6001C] hover:bg-[#b00017] text-white font-medium"
    >
      {isLoggingIn ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Connecting...
        </>
      ) : (
        children
      )}
    </Button>
  );
}
