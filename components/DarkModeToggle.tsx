"use client";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : theme === "light" ? "system" : "dark")}
      className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
      title={`Current: ${theme}. Click to cycle light → dark → system`}
    >
      {theme === "dark" ? <Moon size={18} /> : theme === "light" ? <Sun size={18} /> : <Monitor size={18} />}
    </button>
  );
}
