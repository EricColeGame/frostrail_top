export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Frostrail Wiki",
  shortName: "Frostrail",
  logoText: "F",
  tagline: "Frozen World Survival Guides, Train Upgrades & Crafting",
  description: "Explore Frostrail with survival guides, train upgrades, crafting tips, weapons, enemy strategies, co-op advice, demo information, and release updates.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://frostrail.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://frostrail.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/3517740/Frostrail/",
  heroVideoId: "puxIrsBxYV0", // Frostrail official gameplay trailer (Shiro Games)
  social: {
    youtube: "https://www.youtube.com/@Shiro_Games",
    twitter: "https://x.com/FrostRail_game",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
