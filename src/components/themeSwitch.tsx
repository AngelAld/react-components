import Button from "@/components/ui/button/button";
import useThemeStore from "@/store/theme";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeSwitch() {
  const { theme, setTheme } = useThemeStore();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <Button
      onClick={toggleTheme}
      isIcon
      // variant="light"
      startContent={
        theme === "dark" ? <SunIcon size={16} /> : <MoonIcon size={16} />
      }
      className="rounded-full"
    ></Button>
  );
}
