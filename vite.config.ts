/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
