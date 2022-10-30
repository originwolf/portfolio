<template lang="pug">
section.about
  el-row(justify="center")
    h1 Se você está aqui significa que quer me conhecer melhor, então vamos lá!
  el-row(justify="space-evenly")
    el-col(:xs="23" :sm="16" :md="8")
      p 
        | &nbsp;&nbsp;Atualmente atuando como desenvolvedor fullstack, desenvolvo aplicações web
        | utilizando Java Springboot e VueJS. Embora eu esteja de fato no mercado
        | de trabalho há muitos anos, trabalho com esta stack especificamente 
        | por aproximadamente um ano, e experiências anteriores incluem ReactJS e PHP.
    el-col(:xs="23" :sm="16" :md="8")
      p 
        | &nbsp;&nbsp;Continue explorando este portfólio. Aqui eu vou apresentar pra você alguns
        | dos meus novos projetos, mas também vou apresentar alguns projetos anteriores.
        | Você vai poder ver minha trajetória nos últimos anos, acompanhar minha evolução,
        | interagir com as aplicações e entender o que são as barras de HP acima.
</template>
<style scoped lang='scss'>
@import "@/styles/variables.scss";

.about {
  margin: -26px -8px 0 -8px;
  background-color: $-main-dark-ultra-light-gray;
}

h1 {
  color: $-main-dark-heavy-blue;
  padding: 2rem 4rem 0 0;
  font-size: 2.4rem;
  font-weight: 900;
  text-align: center;
}

p {
  color: $-main-dark-heavy-blue;
  font-size: 1.4rem;
  font-weight: lighter;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background-color: $-main-dark-heavyer-gray;
}
</style>