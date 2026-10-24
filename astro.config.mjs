import { defineConfig } from 'astro/config';

// Otomatis menyesuaikan base path:
// - Di GitHub Pages: menggunakan '/porto-ppl'
// - Di Vercel / Local: menggunakan '/' (root) agar aset CSS/JS tidak 404
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  base: isGitHubPages ? '/porto-ppl' : '/',
  site: isGitHubPages ? 'https://ryhnpngst.github.io' : undefined,
});
