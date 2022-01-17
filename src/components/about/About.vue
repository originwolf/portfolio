<template>
  <section>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12 text-center margin-top">
          <h1>Sobre mim</h1>
        </div>
        <div class="col-12 col-md-7 mb-4 text-center">
          <h2>
            Se você está aqui é porque quer me conhecer melhor, então vamos lá!
          </h2>
          <div class="row justify-content-center">
            <div class="col-10 col-md-8 col-lg-3">
              <img
                class="img-fluid my-picture"
                src="@/assets/PedroMartins.jpg"
              />
            </div>
            <div class="col-12 col-lg-9 ">
              <p>
                Estudante de Sistemas de Informação no IFSULDEMINAS - Campus
                Machado. Trabalhando e aprimorando as soft e hard skills
                diariamente, atualmente atuo como desenvolvedor full stack,
                utilizando principalmente Java + Spring Boot nas tarefas
                relacionadas ao backend, enquanto foco o desenvolvimento de um
                bom front-end com o uso de VueJS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang='scss'>
@import "@/styles/variables.scss";

.container-fluid {
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

.margin-top {
  margin-top: 7rem;
}

.my-picture {
  border-radius: 20%;
  margin-top: 5rem;
}

p {
  color: $-main-dark-heavy-blue;
  font-size: 1.4rem;
  font-weight: lighter;
  margin-top: 4rem;
}
</style>