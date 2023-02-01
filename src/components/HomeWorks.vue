<template>
  <div class="row align-items-start margin-top">
    <div class="col text-center"></div>
    <div class="col">
      <h2 class="display-2">Nos enfocamos <span>En la Acción</span></h2>
      <ul>
        <li>
          ¿Cuáles son las acciones especíﬁcas que impulsan el crecimiento de su
          empresa?
        </li>
        <li>¿Necesita más consumidores para comprar su producto?</li>
        <li>
          ¿Quiere que más personas se suscriban a su lista, descarguen su
          aplicación u obtengan información sobre su marca?
        </li>
        <li>
          ¿O quizás su objetivo es simplemente generar más clientes potenciales
          para sus productos y servicios?.
        </li>
      </ul>
      <div>
        <a class="btn mt-5 mb-5" href="/proceso-de-trabajo">Ver más</a>
      </div>
    </div>
    <div class="col"></div>
  </div>

  <Gallery> </Gallery>
  <div class="text-center">
    <a class="btn" href="/trabajos">Más trabajos</a>
  </div>
</template>
<script setup>
import Gallery from "./Gallery.vue";
</script>
<style scoped>
.display-2 {
  color: #707070;
}
.display-2 span {
  color: #149bd7;
  font-weight: bold !important;
}
.btn {
  text-align: center;
  color: #149bd7;
  width: 150px;
  height: 40px;
  background-color: white;
  border-color: #149bd7;
  border-radius: 10rem;
}
.btn:hover {
  color: white;
  background-color: #149bd7;
  border-color: #149bd7;
}
ul {
  margin: 0.75em 0;
  padding: 0 1em;
  list-style: none;
  line-height: 1.2;
}
li::before {
  content: "";
  border-color: transparent #149bd7;
  border-style: solid;
  border-width: 0.35em 0 0.35em 0.45em;
  display: block;
  height: 0;
  width: 0;
  left: -1em;
  top: 0.9em;
  position: relative;
}
.margin-top{
  margin-top: 9rem;
}

</style>
