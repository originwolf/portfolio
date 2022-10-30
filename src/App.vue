<template lang="pug">
#app
  TopNavigation
  TheHeader(:links="links", :link-dropdown="linkDropdown")
  Banner
  About
</template>

<script>
import TopNavigation from './components/top-navigation/TopNavigation.vue';
import TheHeader from './components/header/TheHeader';
import Banner from './components/banner/Banner.vue';
import About from './components/about/About.vue';

export default {
  name: 'app',
  components: {
    TopNavigation,
    TheHeader,
    Banner,
    About
  },
  data() {
    return {
      links: [
        {
          name: "Portfólio",
          locale: "https://pedromartins.dev/",
        },
        {
          name: "GitHub",
          locale: "https://github.com/originwolf",
        }
      ]
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Ubuntu&display=swap");

body {
  font-family: Ubuntu, arial, sans-serif;
}

h2 {
  font-size: 2rem;
}
</style>