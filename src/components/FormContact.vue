<template>
  <div class="d-flex justify-content-center">
    <h5 class="display-5 fw-bold center-justified grey">Contacto</h5>
  </div>

  <form>
    <div class="row">
      <div class="form-input col">
        <label for="nombre" class="d-none">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Nombre"
          class="border mb-2"
        />
      </div>

      <div class="form-input col">
        <label for="apellido" class="d-none">Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          placeholder="Apellido"
          class="border mb-2"
        />
      </div>
    </div>
    <div class="row">
      <div class="form-input col">
        <label for="correo" class="d-none">Correo:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="Correo"
          class="border mb-2"
        />
      </div>

      <div class="form-input col">
        <label for="celular" class="d-none">Celular:</label>
        <input
          type="tel"
          id="celular"
          name="celular"
          placeholder="Celular"
          class="border mb-2"
        />
      </div>
    </div>
    <div class="form-input col">
      <label for="mensaje" class="d-none">Mensaje:</label>
      <textarea
        id="mensaje"
        name="mensaje"
        rows="5"
        placeholder="Mensaje"
        class="border text-area"
      ></textarea>
    </div>
    <div class="d-flex justify-content-center">
      <input type="submit" value="Enviar" class="btn text-center" />
    </div>
  </form>
</template>
<script setup></script>
<style scoped>
.grey {
  color: #707070;
}

.btn {
  border-radius: 10rem;
  text-align: center;
  margin: auto;
  width: 150px;
  height: 40px;
  background-color: #149bd7 !important;
  color: white !important;
}
.border {
  padding: 10px;
  border-radius: 15px;
  height: 40px;
  width: 100%;
  background-color: #e6e6e6;
  color: black;
}
.text-area {
  height: 25%;
  width: 100%;
  resize: none;
}
@media (max-width: 767px) {
  .form-input {
    width: 100% !important;
  }
}
form {
  width: 50%;
  margin: auto;
}
@media (max-width: 812px) {
  form {
    width: 75%;
  }
  .form-input {
    width: 100%;
  }
}
@media (max-width: 600px) {
  form {
    width: 75%;
  }
  .form-input {
    width: 100%;
  }
}
@media (max-width: 500px) {
  form{
    padding:15px;
    width: 100%;
  }
  .form-input {
    width: 100%;
  }
}

</style>
