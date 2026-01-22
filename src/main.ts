import './assets/main.scss';

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');

// TODO: Add vue meta for SEO
// https://stackoverflow.com/questions/66228340/how-to-use-vue-3-meta-with-vue-js-3

// TODO: SETUP FIREBASE FOR DEPLOYMENT AND HOSTING
// TODO: SETUP FIREBASE FOR ANALYTICS AND TRACKING
