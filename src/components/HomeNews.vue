<template>
  <div class="mt-5 news">
    <img src="../assets/news.png" class="img-fluid" />
    <div class="centrado">
      <a class="btn">Noticias</a>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
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
.news {
  position: relative;
}
img {
  width: 100%;
  height: auto;
}
.centrado {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, 50%);
}
@media only screen and (max-width: 800px) {
  .centrado {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -20%);
  }
}
@media only screen and (max-width: 450px) {
  .centrado {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -40%);
  }
  .btn {
    width: 100px;
    height: 30px;
    padding: 4%;
  }
}
</style>
