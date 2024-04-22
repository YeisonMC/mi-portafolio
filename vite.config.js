import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // "@assets": "/src/assets",
      // "@images": "/src/assets/images",
      "@frontend": "/src/assets/images/frontend",
      // "@components": "/src/components",
    },
  },
});
