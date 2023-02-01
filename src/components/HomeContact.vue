<template>
  <div class="map-container">
    <iframe class="map-iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1446.9636967436586!2d-74.04443581088812!3d4.748816121871576!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xebbfa355feafc4d!2sPosting!5e0!3m2!1ses!2sco!4v1675099610068!5m2!1ses!2sco" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <div class="info mt-3">
    <div>
      <img
        src="../assets/location.png"
        align="left "
        class="me-3 img-fluid  sm-img"
      />
      <p class="d-inline lead">Carrera 21#164-39 Barrio Toberín</p>
      <p class="align lead">Usaquén Bogotá,Colombia</p>
    </div>
    <div>
      <img
        align="left"
        src="../assets/email.png"
        class="me-3 img-fluid sm-img"
        alt="icono de correo"
      />
      <p class="lead">Comercial.Posting@ccgltda.com</p>
    </div>
    <div>
      <img
        align="left"
        src="../assets/phone.png"
        class="me-3 img-fluid  sm-img"
        alt="Icono de teléfno"
      />
      <p class="lead">(+57) 301 6128838 <span class="fw-bold"> PBX:</span> (+57) 7323084</p>
    </div>
   
  </div>
  <FormContact></FormContact>
</template>
<script setup>
import FormContact from "../components/FormContact.vue";
</script>
<style scoped>
.map-container {
  margin: auto;
  position: relative;
  height: 500px;
  width: 50%;
}
.map-iframe {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.info {
  margin: auto;
  width: 50%;
}
.align{
  margin-left:3rem;
}

@media (max-width: 992px) {
  .map-container {
    width: 50%;
    height: 300px;
  }
  .lead {
    font-size: 1rem!important;
  }
}


@media (max-width: 576px) {
  .map-container {
    width: 100%;
    height: 200px;
  }
  
}
@media (max-width: 663px) {
  .map-container {
    width: 100%;
    height: 400px;
  }
  .info {
    width: 90%;
  }
}
@media (max-width:330px) {
 
  .info {
    width: 100%;
  }
}
</style>
