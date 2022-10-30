<template>
  <div>
    <top-navigation></top-navigation>
    <the-header
      :links="links"
      :link-dropdown="linkDropdown"
    ></the-header>
    <banner></banner>
    <!-- <about></about> -->
  </div>
</template>

<script>
export default {
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