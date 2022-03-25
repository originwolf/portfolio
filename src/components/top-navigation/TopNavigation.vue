<template lang='pug'>
div(class='top-navigation')
  a.my-name(
    aria-label="Voltar para a página inicial",
    href='index.html'
  ) Pedro Martins
  div.pull-right
    a.social(
      rel='no-opener',
      href="https://www.linkedin.com/in/pedro-martins-dev",
      aria-label="Conheça meu linkedIn",
      name="meuLinkedin",
      target="_blank"
    )
      span.fab.fa-linkedin-in
    a.social(
      rel='no-opener',
      href="https://github.com/originwolf",
      aria-label="Conheça meu GitHub",
      name="meuGithub",
      target="_blank"
    )
      span.fab.fa-github
    a.social(
      rel='no-opener',
      href="https://www.instagram.com/pedro_m4rtins/",
      aria-label="Conheça meu Instagram",
      name="meuInstagram",
      target="_blank"
    )
      span.fab.fa-instagram
</template>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.top-navigation {
  background-color: $-main-dark-heavyer-gray;
  padding: 16px;
  margin: -8px;
}

.social {
  padding: 0 10px;
}

.social span,
.my-name{
  color: $-main-dark-light-gray;
}

.social span:hover,
.my-name:hover {
  color: $-main-dark-ultra-light-gray;
}
</style>