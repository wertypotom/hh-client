import type React from "react";
import { AppSidebar } from "./modules/sidebar/app-sidebar";
import { AiCopilotPanel } from "./modules/ai-copilot/ai-copilot-panel";

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-background">
      <AppSidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
      <AiCopilotPanel />
    </div>
  );
}
