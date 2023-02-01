<template>
  <div class="container margin-top">
    <div class="row">
      <img src="" />
    </div>
    <div class="container d-flex align-items-center justify-content-center">
      <h2 class="display-2">
        Procesos de<br /><span class="blue fw-bold">Trabajo</span>
      </h2>
    </div>
    <div class="container d-flex align-items-center justify-content-center">
      <p class="lead">
        Nuestro objetivo es agregar valor a su marca sin necesidad de realizar
        procesos innecesarios. No queremos que sea un trabajo extenuante para ti
        ni para tu equipo, es por esto que nuestro método de trabajo está
        dirigido a ser lo más eficiente, simple, constante y divertido
      </p>
    </div>
  </div>

  <img src="../assets/process.png" class="img-fluid mx-auto d-block mt-3" />
  <ProcessContent></ProcessContent>
</template>
<script setup>
import ProcessContent from "./ProcessContent.vue";
</script>
<style scoped>
.margin-top {
  margin-top: 9rem;
}
h2 {
  color: #707070;
}
h2 span {
  color: #149bd7;
}
@media (max-width: 767px) {
  img {
    width: 10%;
    display: block;
  }

}
@media (max-width: 450px) {
  .lead{
    text-align: center !important;;
  }
 
}
</style>
