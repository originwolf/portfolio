<template lang='pug'>
.navbar
  el-menu.navbar__menu-row(:default-active="activeIndex", mode="horizontal", @select="handleSelect")
    el-menu-item.navbar__menu-row__menu-item(
      v-if='links',
      v-for="(link, index) in links",
      :key="link.name",
      :index='1'
      disabled
    )
      a.navbar__link(:href='link.locale') {{link.name}}
  .pull-right
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

.navbar__link{
  padding: 16px;
  font-size: 1.2rem;
  text-decoration: none;
  color: $-main-dark-light-gray;
}

.navbar__link:hover {
  color: $-main-dark-ultra-light-gray;
}

.fas {
  padding: 16px;
  font-size: 1.5rem;
  line-height: 0;
  color: $-main-dark-light-gray;
}

</style>