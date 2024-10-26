import React from "react";
import { Switch } from "../ui/switch";
import { useTheme } from "next-themes";

export const SwitchButton = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = React.useState(theme === "dark");

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    setTheme(newTheme);
  };

  return (
    <div className="flex items-center space-x-2" onClick={toggleTheme}>
      <label htmlFor="airplane-mode">Темная тема</label>
      <Switch
        id="airplane-mode"
        className="data-[state=checked]:bg-white data-[state=unchecked]:bg-black"
        checked={isDark}
      />
    </div>
  );
};
