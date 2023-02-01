<template>
  <Header></Header>
  <div class="container margin-top">
    <div class="row align-items-start">
      <div class="col">
        <img src="../assets/works/logo-finca-helena.png" class="img-fluid" />
      </div>
      <div class="col">
        <h1 class="display-1">
          Café<br />
          <span class="fw-bold">
            Finca<br />
            Helena
          </span>
        </h1>
        <div class="row">
          <p class="lead">
            Una nueva marca de café en la que tuvimos<br />
            la oportunidad de desarrollar el<span class="color fw-bold">
              diseño de marca.</span
            >
          </p>
        </div>
        <a class="btn">Contáctanos</a>
        <img
          src="../assets/Services/Icono-Diseño-grafico.png"
          alt="Logo diseño gráfico"
          class="img-fluid"
          width="90px"
        />
      </div>
    </div>
  </div>
  <div class="margin-top">
    <img
      src="../assets/works/cafe.png"
      alt="Café Finca Helena"
      class="img-fluid w-100"
    />
  </div>
  <div>
    <img
      src="../assets/works/finca-Helena-2.png"
      alt="Logo café Finca Helena"
      class="img-fluid w-100"
    />
  </div>
  <GalleryWorks></GalleryWorks>
  <Footer></Footer>
</template>
<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import GalleryWorks from "./GalleryWorks.vue";
</script>
<style scoped>
h1 {
  color: #707070;
}
p {
  color: #6321ac;
}
.btn {
  text-align: center;
  color: white;
  width: 150px;
  height: 40px;
  background-color: #6321ac;
  border-color: #6321ac;
  border-radius: 10rem;
}
.btn:hover {
  color: #6321ac;
  background-color: white;
  border-color: #6321ac;
}
.margin-top{
  margin-top: 9rem;
}


</style>
