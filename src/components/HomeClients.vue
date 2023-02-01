<template>
  <div class="clientes m-5">
    <img src="../assets/Clientes/Movistar.png" class="img-fluid "/>
    <img src="../assets/Clientes/PerfumeGold.png" class="img-fluid " />
    <img src="../assets/Clientes/Agrorasam.png" class="img-fluid "/>
    <img src="../assets/Clientes/TuTiendita.png" class="img-fluid " />
    <img src="../assets/Clientes/TeRegalo.png" class="img-fluid " />
    <img src="../assets/Clientes/FincaHelena.png" class="img-fluid " />
    <img src="../assets/Clientes/OrientTrucks.png" class="img-fluid "/>
    <img src="../assets/Clientes/ProcesoyProcesos.png" class="img-fluid " />
    <img src="../assets/Clientes/Dibanka.png" class="img-fluid " />
    <img src="../assets/Clientes/Unisanitas.png" class="img-fluid " />
    <img src="../assets/Clientes/Claro.png" class="img-fluid" />
 
  </div>
</template>
<script setup></script>
<style scoped>
.clientes {
  display: flex;
  flex-wrap: wrap;

}
img {
  width:33.33333%;
  height: auto;
  padding: 1%;
}
@media (max-width: 768px) {
  img {
    width: 50%;
  }
}

@media (max-width: 576px) {
  img {
    width: 100%;
  }
}

</style>
