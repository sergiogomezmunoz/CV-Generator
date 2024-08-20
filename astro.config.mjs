// Configuration file for Astro

// Description ---------------------------------------------------------------------------------------
// This file contains the configuration for Astro. It is used to define the configuration
// for the Astro plugin. This file is used to extend the default configuration of Astro.
// ---------------------------------------------------------------------------------------------------

// Astro Configuration ------------------------------------------------------------------------
import { defineConfig } from "astro/config"; // Import the defineConfig function
import tailwind from "@astrojs/tailwind"; // Import the Tailwind CSS plugin

// https://astro.build/config
export default defineConfig({
  // Define the configuration
  integrations: [tailwind()], // Add the Tailwind CSS plugin
});
// ---------------------------------------------------------------------------------------------------
