import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
  publicPath: process.env.NODE_ENV === "production" ? "/Posting/" : "/",
  configureWebpack: {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
    },
  },
});
