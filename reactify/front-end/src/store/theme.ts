import { create } from "zustand";
import { persist } from "zustand/middleware";
type Theme = "light" | "dark";
interface ThemeState {
  theme: Theme;
}

interface ThemeActions {
  setTheme: (theme: Theme) => void;
}

const useThemeStore = create(
  persist<ThemeState & ThemeActions>(
    (set: (partial: Partial<ThemeState>) => void) => ({
      theme:
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      setTheme: (newTheme: Theme) => set({ theme: newTheme }),
    }),
    {
      name: "storage",
    }
  )
);

export default useThemeStore;
