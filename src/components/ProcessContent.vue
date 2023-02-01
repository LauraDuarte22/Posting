<template>
  <div class="container">
    <div>
      <div class="container d-flex align-items-center justify-content-center">
        <img
          src="../assets/work-process/1Conocimientodelcliente.png"
          class="img-fluid img "
          alt="Paso 1 del proceso de trabajos -Conocimiento del cliente"
        />
        <h2 class="display-2 text-rigth">
          Conocimiento<br /><span class="blue fw-bold"> del Cliente</span>
        </h2>
      </div>
      <div class="container d-flex align-items-center justify-content-center">
        <p class="lead">
          Entender las necesidades del cliente y de su negocio hace que podamos
          crear una mejor estrategia.
        </p>
      </div>
      <img src="../assets/process.png" class="img-fluid mx-auto d-block mt-5 flow" />
    </div>
    <div>
      <div class="container d-flex align-items-center justify-content-center">
        <img
          src="../assets/work-process/2Recopilacióndelanformación.png"
          class="img-fluid img"
          alt="Paso 2 del proceso de trabajos -Recopilación de la información"
        />
        <h2 class="display-2 text-rigth">
          Recopilación<br /><span class="blue fw-bold"> de la información</span>
        </h2>
      </div>
      <div class="container d-flex align-items-center justify-content-center">
        <p class="lead">
          Cada detalle, objetivo, pregunta, duda, concepto que tiene nuestro
          cliente es clave para la elaboración de la estrategia.
        </p>
      </div>
      <img src="../assets/process.png" class="img-fluid mx-auto d-block mt-5 flow" />
    </div>
    <div>
      <div class="container d-flex align-items-center justify-content-center margin-top">
        <img
          src="../assets/work-process/3PlaneaciónyEstructuración.png"
          class="img-fluid img"
          alt="Paso 3 del proceso de trabajos -Planeación y estructuración"
        />
        <h2 class="display-2 text-rigth">
          Planeación y<br /><span class="blue fw-bold"> estructuración</span>
        </h2>
      </div>
      <div class="container d-flex align-items-center justify-content-center">
        <p class="lead">
          De acuerdo a los objetivos establecidos dentro del análisis y estudio,
          estructuramos la estrategia que debe ser implementada con su marca y
          negocio.
        </p>
      </div>
      <img src="../assets/process.png" class="img-fluid mx-auto d-block mt-5 flow" />
    </div>
    <div>
     
      <div class="container d-flex align-items-center justify-content-center">
        <img
          src="../assets/work-process/4Ejecución.png"
          class="img-fluid img"
          alt="Paso 4 del proceso de trabajos -Ejecución"
        />
        <h2 class="display-2 text-rigth">
          <span class="blue fw-bold">Ejecución</span>
        </h2>
      </div>
      <div class="container d-flex align-items-center justify-content-center">
        <p class="lead">
          Lanzamientos de las campañas propuestas y aprobadas por el cliente en
          el medio correspondiente, incluimos mantenimiento y revisiones para
          cumplir los objetivos propuestos.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  imageUrl: String,
  title: String,
  text: String,
});
</script>
<style scoped>
@media (max-width: 767px) {
  .flow {
    width: 10%;
  }
  .img{
    display: block;
    width: 20%;
  }
  

}
.margin-top{
  margin-top: 10rem;
}
.blue{
  color:#149bd7;
}
@media (max-width: 450px) {
  .lead{
    text-align: center !important;;
  }
 
}
</style>
