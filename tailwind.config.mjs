// Configuration file for Tailwind CSS

// Description ---------------------------------------------------------------------------------------
// This file contains the configuration for Tailwind CSS. It is used to define the configuration
// for the Tailwind CSS plugin. This file is used to extend the default configuration of Tailwind
// CSS.
// ---------------------------------------------------------------------------------------------------

// Tailwind CSS Configuration ------------------------------------------------------------------------
/** @type {import('tailwindcss').Config} */
export default {
  // Configuration for Tailwind CSS
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"], // Files to scan for classes
  darkMode: "class", // Dark mode configuration
  theme: {
    // Theme configuration
    extend: {}, // Extend the default theme
  },
  plugins: [], // Plugins to use
};
// ---------------------------------------------------------------------------------------------------
