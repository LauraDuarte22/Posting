<template>
  <div class="d-flex justify-content-center mt-5">
    <h2 class="display-2 center-justified">
      Tu estrategia<br />
      <span class="blue">Digital</span>
      <span class="bold"
        > en <br />
        Un solo lugar</span
      >
    </h2>
  </div>
  <div class="d-flex justify-content-center  ms-5 me-5">
    <p class="mt-4 text-justify">
      Desarrollamos un conjunto de acciones en el universo digital y no
      digital<br />
      eligiendo los canales más efectivos con el objetivo de elevar tu empresa
      y<br />
      productos a otro nivel
    </p>
  </div>
  <div class="d-flex justify-content-center">
    <h5 class="display-5 bold center-justified">Servicios</h5>
  </div>
  <Services></Services>
</template>
<script setup>
import Services from './Services.vue'
</script>
<style scoped>
.display-2,.display-5 {
  color: #707070;
}
.blue {
  color: #149bd7;
  font-weight: bold !important;
}
.bold {
  font-weight: bold !important;
}
.center-justified {
  text-align: justify;
}
</style>
