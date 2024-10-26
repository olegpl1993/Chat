import react from "@vitejs/plugin-react-swc";
import path from "path";
import { AliasOptions, defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const baseURL =
    mode === "local-dev" ? "http://localhost:4000" : "https://teamchallenge-chat-jmsz.onrender.com";

  const root = path.resolve(__dirname, "src");

  return {
    plugins: [react()],
    define: {
      __BASE_URL__: JSON.stringify(baseURL),
    },
    resolve: {
      alias: {
        "@": root,
      } as AliasOptions,
    },
  };
});
