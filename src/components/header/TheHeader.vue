<template>
  <nav id="barraMenu" class="navbar navbar-expand-md">
    <div class="navbar-brand">
      <button
        class="navbar-toggler"
        aria-label="expandirMenu"
        name="expandirMenu"
        data-toggle="collapse"
        data-target="#menubar"
      >
        <span class="fas fa-bars"></span>
      </button>
    </div>

    <ul id="menubar" class="navbar-nav nav collapse navbar-collapse">
      <li v-for="link in links" :key="link.name">
        <button type="button" class="btn btnMenu">
          <a class="nav-link" :href="link.locale">{{ link.name }}</a>
        </button>
      </li>

      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          >Projetos de extensão</a
        >
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a 
            v-for="drop in linkDropdown"
            :key="drop.name"
            class="dropdown-item"
            :href="drop.locale"
            >{{ drop.name }}</a>
        </div>
      </li>
    </ul>

    <div class="py-2 mr-lg-4">
      <button class="px-3 btn btn-fas"><i class="fas fa-envelope"></i></button>
    </div>

    <div class="py-2">
      <button class="px-3 btn btn-fas"><i class="fas fa-lightbulb"></i></button>
    </div>
  </nav>
</template>
<script>
export default {
  props: ['links', 'link-dropdown'],
};
</script>
<style scoped lang="scss">
@import '@/styles/variables.scss';

.navbar {
  background-color: $-main-dark-heavyer-blue;
}

.nav-link {
  color: $-true-white;
  font-size: 1.3rem;
}

.nav-link:hover {
  color: $-main-dark-light-gray;
}

.btnMenu {
  background-color: transparent;
  color: $-true-white;
  font-size: 1.3rem;
}

.btnMenu:hover {
  color: $-main-dark-light-gray;
}

.dropdown-menu {
  background-color: $-main-dark-heavyer-gray;
}

.dropdown-item {
  color: $-true-white;
}

.dropdown-item:hover {
  color: $-main-dark-heavyer-gray;
}

.dropdown-item:focus {
  color: $-main-dark-heavyer-gray;
}

.btn-fas:focus {
  box-shadow: none;
}

.fa-envelope,
.fa-lightbulb,
.fa-bars {
  font-size: 2rem;
  color: $-true-white;
  transition: 0.3s;
}

.fa-envelope:hover,
.fa-lightbulb:hover,
.fa-bars:hover {
  color: $-main-dark-medium-gray;
  transition: 0.3s;
}
</style>