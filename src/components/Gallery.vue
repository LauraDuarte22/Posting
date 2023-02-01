<template>
  <!-- Gallery -->
  <div class="container-fluid m-5">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 m-auto">
        <div class="img-wrap">
          <div class="overlay-design"></div>
          <img
            src="../assets/diseño.png"
            class="shadow-1-strong rounded img-fluid"
            alt="Sección diseño gráfico"
          />
          <div class="content-details-large fadeIn-bottom">
            <h3 class="content-title fw-bold">Diseño Gráfico</h3>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-4 m-auto">
        <div class="img-wrap">
          <div class="overlay-web"></div>
          <img
            src="../assets/desarrollo.png"
            class="shadow-1-strong rounded img-fluid"
            alt="Sección Desarrollo web "
          />
          <div class="content-details fadeIn-bottom">
            <h3 class="content-title fw-bold">Desarrollo Web</h3>
          </div>
        </div>

        <div class="img-wrap">
          <div class="overlay-publicidad"></div>
          <img
            src="../assets/publicidad.png"
            class="shadow-1-strong rounded img-fluid"
            alt="Sección Publicidad Digital "
          />
          <div class="content-details-md fadeIn-bottom">
            <h3 class="content-title fw-bold">Publicidad Digital</h3>
          </div>
        </div>

        <div class="img-wrap">
          <div class="overlay-audiovisual"></div>
          <img
            src="../assets/produccion.png"
            class="shadow-1-strong rounded img-fluid"
            alt="Sección Producción Audiovisual"
          />
          <div class="content-details-md fadeIn-bottom">
            <h3 class="content-title fw-bold">Producción Audiovisual</h3>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-4 m-auto">
        <div class="img-wrap">
          <div class="overlay-social"></div>
          <img
            src="../assets/redes.png"
            class="shadow-1-strong rounded img-fluid"
            alt="Sección Gestión Redes Sociales"
          />
          <div class="content-details-large fadeIn-bottom">
            <h3 class="content-title fw-bold">Gestión Redes Sociales</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.content-details,
.content-details-md,
.content-details-large {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}
.content-details h3 {
  color: #fff;
  margin-bottom: 0.5em;
}

/* Hover para imágenes de la mitad*/
.img-wrap {
  width: 350px;
  height: auto;
  position: relative;

}
.img-wrap > img {
  width: 100%;
  height: auto;
}
/*Overlay para Diseño Web */
.overlay-web {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(20, 155, 215, 0.5);
  display: none;
}
.img-wrap:hover > .overlay-web {
  display: inline-block;
}
.img-wrap:hover .content-details {
  top: 90%;
  left: 50%;
  opacity: 1;
}
.img-wrap h3 {
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  max-font-size: 2vw;
}
/*Overlay para publicidad digital */
.overlay-publicidad {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 202, 0, 0.5);
  display: none;
}
.img-wrap:hover > .overlay-publicidad {
  display: inline-block;
}

/*Overlay para producción audiovisual */
.overlay-audiovisual {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(104, 175, 36, 0.5);
  display: none;
}
.img-wrap:hover > .overlay-audiovisual {
  display: inline-block;
}
.img-wrap:hover .content-details-md {
  top: 80%;
  left: 50%;
  opacity: 1;
}
/*Overlay para redes sociales */
.overlay-social {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 203, 151, 0.5);
  display: none;
}
.img-wrap:hover > .overlay-social {
  display: inline-block;
}
.img-wrap:hover .content-details-large {
  top: 93%;
  left: 50%;
  opacity: 1;
}
/*Overlay para Diseño gráfico overlay-design */
.overlay-design {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(99, 33, 172, 0.5);
  background-size: 100%;

  display: none;
}
.img-wrap:hover > .overlay-design {
  display: inline-block;
}
/*Animación */
.fadeIn-bottom {
  top: 80%;
}

/*Responsive */
@media only screen and (max-width: 1049px) {
  .img-wrap {
    width: 270px;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .content-details h3,
  .content-details-md h3,
  .content-details-large h3 {
    font-size: 1.5vw;
  }
}

@media only screen and (max-width: 815px) {
  .img-wrap {
    width: 250px;
  }
  .m-5{
    margin:0 !important;
  }

  .content-details h3,
  .content-details-md h3,
  .content-details-large h3 {
    font-size: 1.2vw;
  }
}


@media only screen and (max-width: 576px) {
  .img-wrap {
    width: 220px;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .m-5{
    margin:5rem !important;
  }
  .content-details h3,
  .content-details-produccion h3,
  .content-details-large h3 {
    font-size: 1.5vw;
  }
}
</style>
