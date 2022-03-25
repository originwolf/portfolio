<template>
<div class="banner">
  <img
    :src='bannerUrl'
    alt='Banner da home'
    title='Banner da home'
    class='banner-img'
  >
</div>
</template>
<script>
  export default {
    data() {
      return {
        bannerUrl: require('@/assets/banner.png')
      };
    },
  }
</script>
<style scoped>
.banner {
  margin: 8px -8px 0 -8px;
}

.banner-img {
  width: 100%;
}
</style>