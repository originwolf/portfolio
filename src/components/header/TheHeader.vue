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
<style scoped>
.navbar {
  background-color: rgba(39, 64, 139, 0.8);
}

.nav-link {
  color: #fff;
  font-size: 1.3rem;
}

.nav-link:hover {
  color: #aaa;
}

.btnMenu {
  background-color: transparent;
  color: white;
  font-size: 1.3rem;
}

.btnMenu:hover {
  color: #aaa;
}

.dropdown-menu {
  background-color: #25221a;
}

.dropdown-item {
  color: white;
}

.dropdown-item:hover {
  color: #25221a;
}

.dropdown-item:focus {
  color: #25221a;
}

.btn-fas:focus {
  box-shadow: none;
}

.fa-envelope,
.fa-lightbulb,
.fa-bars {
  font-size: 2rem;
  color: #cecece;
  transition: 0.5s;
}

.fa-envelope:hover,
.fa-lightbulb:hover,
.fa-bars:hover {
  color: #aaa;
  transition: 0.5s;
}
</style>