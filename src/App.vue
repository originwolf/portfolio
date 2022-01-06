<template>
  <div>
    <top-navigation></top-navigation>
    <the-header
      :links="links"
      :link-dropdown="linkDropdown"
    ></the-header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "Sobre mim eu",
          locale: "http://facebook.com.br",
        },
      ],
      linkDropdown: [
        {
          name: "Projetos 1",
          locale: "http://facebook.com.br",
        },
        {
          name: "Projetos 2",
          locale: "http://facebook.com.br",
        },
      ],
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