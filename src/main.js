import { createApp } from 'vue';

import App from './App.vue';
import TopNavigation from './components/top-navigation/TopNavigation.vue';

const app = createApp(App);

app.component('top-navigation', TopNavigation);

app.mount('#app');
