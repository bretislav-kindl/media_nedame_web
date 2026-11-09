import { defineConfig } from 'astro/config';
import vlna from './integrations/vlna.mjs';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [vlna()],
});
