import { sentryVitePlugin } from '@sentry/vite-plugin';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import analyzer from 'vite-bundle-analyzer';
const isGithubPages = process.env.DEPLOY_ENV === 'github';
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: 'polotno',
      project: 'polotno-studio',
    }),
    analyzer(),
  ],
  base: isGithubPages ? '/polotno-studio/' : '/',
  build: {
    sourcemap: true,
  },
});
