import { createApp } from 'vue';

import App from './App.vue';
import TopNavigation from './components/top-navigation/TopNavigation.vue';
import TheHeader from './components/header/TheHeader';
import Banner from './components/banner/Banner.vue';
import About from './components/about/About.vue';
import './styles/main.scss';

const app = createApp(App);

app.component('top-navigation', TopNavigation);
app.component('the-header', TheHeader);
app.component('banner', Banner);
app.component('about', About);

app.mount('#app');
