import { createApp } from 'vue';

import App from './App.vue';
import TopNavigation from './components/top-navigation/TopNavigation.vue';
import TheHeader from './components/header/TheHeader';

const app = createApp(App);

app.component('top-navigation', TopNavigation);
app.component('the-header', TheHeader);

app.mount('#app');
