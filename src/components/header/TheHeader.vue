<template lang='pug'>
.navbar
  el-header
    el-menu.navbar-nav(
      :default-active="activeIndex",
      mode="horizontal",
      :ellipsis="false"
    )
      el-menu-item(
        v-if='links',
        v-for="(link, index) in links",
        :key="index"
      )
        a(:href='link.locale', target="_blank") {{link.name}}
      .flex-grow
      .buttons
        el-button(@click='contact')
          span.fas.fa-envelope
        el-button(@click='contact')
          span.fas.fa-lightbulb
</template>
<script>
export default {
  props: ['links'],
  methods: {
    contact() {
      alert('Eu ainda estou em construção!');
    }
  }
};
</script>
<style scoped lang="scss">
@import '@/styles/variables.scss';

.navbar {
  margin: 8px -8px -8px -8px;
  padding: 25px;
  background-color: $-main-dark-heavyer-blue;
}

.el-menu {
  background-color: $-main-dark-heavyer-blue;
  border-bottom: none;
}

.navbar-nav a {
  text-decoration: none;
  font-size: 1.2rem;
  color: $-main-dark-light-gray;
  &:hover {
    color: $-main-dark-ultra-light-gray;
  }
}

.el-menu-item:hover {
  border-radius: 5px;
  background-color: $-main-dark-medium-light-blue!important;
}

.el-button {
  background-color: $-main-dark-medium-light-blue;
  border: none;
}

.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.fas {
  padding: 16px;
  font-size: 1.5rem;
  line-height: 0;
  color: $-main-dark-light-gray;
  &:hover {
    color: $-main-dark-ultra-light-gray;
  }
}

.flex-grow {
  flex-grow: 1;
}
</style>