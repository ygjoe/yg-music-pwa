import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "yg music pwa",
        short_name: "YGMusic",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/icons/music.png",
            sizes: "256x256",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
