<template>
  <div class="d-flex justify-content-center services">
    <a href="/" class="col-md2">
      <img
        src="../assets/Services/Icono-Diseño-Web.png"
        class="img-fluid animation"
        alt="Servicio de Diseño Web"
    /></a>
    <a href="/" class="col-md2">
      <img
        src="../assets/Services/Icono-Redes-Sociales.png"
        class="img-fluid animation"
        alt="Servicios de gestión de redes sociales"
    /></a>
    <a href="/trabajos" class="col-md2">
      <img
        src="../assets/Services/Icono-Diseño-grafico.png"
        class="img-fluid animation"
        alt="Servicios de Diseño Gráfico"
    /></a>
    <a class="col-md2">
      <img
        src="../assets/Services/Icono-Publicidad-Digital.png"
        class="img-fluid animation"
        alt="Servicios de Publicidad Digital"
    /></a>
    <a class="col-md2">
      <img
        src="../assets/Services/Icono-Producción-Audiovisual.png"
        class="img-fluid animation"
        alt="Servicios De Producción Audiovisual"
    /></a>
  </div>

  <!-- Section: Images -->
  <!-- Modal gallery -->
</template>
<script setup></script>
<style scoped>
.animation:hover {
  cursor: pointer;
  transform: scale(1.2);
}
.gallery {
  display: flex;
  flex-wrap: wrap;
}

.gallery img {
  max-width: 33.33%;
  min-width: 200px;
  flex-grow: 1;
}

 @media (min-width: 768px) {
  .services a img {
    min-width:150px !important;;
  }
}
@media (max-width: 767px) {
  .services {
    margin-left: 2rem;;
    flex-wrap: wrap;
  }
  .services a {
    width:30%;
  }
  .services a img {
    min-width:100px !important;;
  }
}

</style>
