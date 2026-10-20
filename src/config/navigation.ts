import {
  BookOpen,
  CalendarDays,
  MessageCircle,
  Monitor,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "release", path: "/release", icon: CalendarDays, isContentType: true },
  { key: "platforms", path: "/platforms", icon: Monitor, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Wrench, isContentType: true },
  { key: "modes", path: "/modes", icon: Users, isContentType: true },
  { key: "community", path: "/community", icon: MessageCircle, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
