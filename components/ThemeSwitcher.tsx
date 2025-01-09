// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
// import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div>
			{/* Toggle between Moon and Sun icons based on current theme */}
			{theme === "light" ? <MoonIcon onClick={() => setTheme("dark")} className="cursor-pointer w-6 h-6" /> : <SunIcon onClick={() => setTheme("light")} className="cursor-pointer w-6 h-6 dark:text-white" />}
		</div>
	);
}
