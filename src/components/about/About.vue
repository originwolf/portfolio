<template lang="pug">
section.about
  el-row(justify="center")
    h1 Sobre mim
  el-row(justify="center")
    h2 Se você está aqui significa que quer me conhecer melhor, então vamos lá!
  p 
    | Estudante de Sistemas de Informação no IFSULDEMINAS - Campus
    | Machado. Trabalhando e aprimorando as soft e hard skills
    | diariamente, atualmente atuo como desenvolvedor full stack,
    | utilizando principalmente Java + Spring Boot nas tarefas
    | relacionadas ao backend, enquanto foco o desenvolvimento de um
    | bom front-end com o uso de VueJS
</template>
<style scoped lang='scss'>
@import "@/styles/variables.scss";

.about {
  margin: -26px -8px 0 -8px;
  background-color: $-main-dark-ultra-light-gray;
}

h1 {
  font-size: 1.8rem;
  font-weight: 900;
}

h2 {
  color: $-main-dark-heavy-blue;
  font-size: 2.4rem;
  font-weight: 600;
}

p {
  color: $-main-dark-heavy-blue;
  font-size: 1.4rem;
  font-weight: lighter;
  margin-top: 4rem;
}
</style>