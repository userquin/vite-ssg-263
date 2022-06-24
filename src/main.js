/**
 * 🪴 Application entry point.
 **/

import { ViteSSG } from 'vite-ssg';
import App from '@/App.vue';
import Home from '@pages/Home.vue';
import About from '@pages/About.vue';
import Gallery from '@pages/Gallery.vue';
import { registerSW } from 'virtual:pwa-register';

const intervalMS = 60 * 60 * 1000;

const updateSW = registerSW({
  onRegistered(r) {
    r &&
      setInterval(() => {
        r.update();
      }, intervalMS);
  },
  onNeedRefresh() {},
  onOfflineReady() {},
});

// Static site generation
const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/gallery', name: 'gallery', component: Gallery },
];

export const createApp = ViteSSG(App, { routes });
