export type AIProvider = "openai" | "lovable";

// Default provider - Lovable AI (no external API key required)
export const AI_PROVIDER: AIProvider = "lovable";

// Model configuration per provider
export const AI_MODELS = {
  openai: "gpt-4o-mini",
  lovable: "google/gemini-2.5-flash",
} as const;

// Environment variable names for external APIs (used in edge functions)
export const AI_KEY_ENV_VARS = {
  openai: "OPENAI_API_KEY",
  lovable: "LOVABLE_API_KEY", // Auto-provisioned
} as const;
