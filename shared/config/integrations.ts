// shared/config/integrations.ts

/**
 * Integration configuration
 * Add new integrations here to make them available throughout the app
 */
export const INTEGRATION_CONFIG = {
  hh: {
    id: "hh",
    name: "HeadHunter",
    displayName: "hh.ru",
    authUrl: process.env.NEXT_PUBLIC_API_URL
      ? `${process.env.NEXT_PUBLIC_API_URL}/auth/hh`
      : "http://localhost:3000/auth/hh",
  },
  // Future integrations:
  // linkedin: {
  //   id: 'linkedin',
  //   name: 'LinkedIn',
  //   displayName: 'LinkedIn',
  //   authUrl: 'http://localhost:3000/auth/linkedin',
  // },
} as const;

export type IntegrationType = keyof typeof INTEGRATION_CONFIG;

/**
 * Get integration configuration by type
 * @param type - Integration type identifier
 * @returns Integration configuration object
 */
export const getIntegrationConfig = (type: IntegrationType) => {
  return INTEGRATION_CONFIG[type];
};

/**
 * Get all available integrations
 * @returns Array of all integration configurations
 */
export const getAllIntegrations = () => {
  return Object.values(INTEGRATION_CONFIG);
};
