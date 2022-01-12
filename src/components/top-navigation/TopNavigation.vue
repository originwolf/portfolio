<template>
  <header>
    <section id="home" class="container-fluid top-navigation no-margin">
      <div class="row">
        <div class="col-4 d-inline pl-sm-5">
          <a
            aria-label="Voltar para a página inicial"
            id="meuNome"
            href="index.html"
            >Pedro <span class="d-none d-sm-inline">Martins</span></a
          >
        </div>

        <div class="col-4 d-inline text-center">
          <i class="fas fa-code"></i>
        </div>

        <div class="col-4 text-right d-inline pr-sm-5">
          <a
            class="pr-3"
            rel="noopener"
            href="https://www.linkedin.com/in/pedro-martins-dev"
            aria-label="Conheça meu linkedIn"
            name="meuLinkedin"
            target="_blank"
            ><span id="redesSociais1" class="fab fa-linkedin-in mr-2"></span
          ></a>
          <a
            rel="noopener"
            href="https://github.com/originwolf"
            aria-label="Conheça meu GitHub"
            name="meuGithub"
            target="_blank"
            ><span id="redesSociais2" class="fab fa-github mr-2"></span
          ></a>
          <a
            class="pl-3"
            rel="noopener"
            href="https://www.instagram.com/pedro_m4rtins/"
            aria-label="Conheça meu Instagram"
            name="meuInstagram"
            target="_blank"
            ><span id="redesSociais3" class="fab fa-instagram mr-2"></span
          ></a>
        </div>
      </div>
    </section>
  </header>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.top-navigation {
  background-color: $-main-dark-heavy-gray;
  color: $-main-dark-light-gray;
  line-height: 200%;
  height: 35px;
}

.top-navigation a,
.textBranco {
  color: $-main-dark-light-gray;
}

.link {
  text-decoration: underline;
  color: $-main-dark-light-gray;
}

.linkNoUnderline {
  text-decoration: none;
  color: $-main-dark-light-gray;
}

.link:hover,
.linkNoUnderline:hover {
  text-decoration: none;
  color: $-main-dark-light-gray;
  font-size: 1.1rem;
}

.top-navigation a:hover {
  color: $-true-white;
}
</style>