import ThemeSwitch from "@/components/themeSwitch";
import useThemeStore from "@/store/theme";
import clsx from "clsx";

export default function App() {
  const { theme } = useThemeStore();

  return (
    <div
      data-theme={theme}
      className={clsx(
        "bg-background",
        "text-foreground",
        "h-screen w-screen",
        "transition-colors duration-300 ease-in-out"
      )}
    >
      <div className="absolute top-0 right-0">
        <ThemeSwitch />
      </div>
    </div>
  );
}
