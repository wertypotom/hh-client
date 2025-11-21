import { z } from "zod";

const privateConfigSchema = z.object({
  NEXT_PUBLIC_HH_API_URL: z.string(),
});

export const privateConfig = privateConfigSchema.parse(process.env);
