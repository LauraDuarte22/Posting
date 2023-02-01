<template>
  <div id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
      <a href="#"><li>Trabajos</li></a>
      <a href="#"><li>Servicios</li></a>
      <a href="#"><li>Noticias</li></a>
      <a href="#"><li>Contacto</li></a>
    </ul>
  </div>
</template>

<style scoped>
#menuToggle {
  display: block;
  position: fixed;
  right: 20px;
  margin: 2rem;
  top: 50px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  -webkit-touch-callout: none;
}
#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #707070;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #707070;
}

#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2) {
  opacity: 1;
  transform: rotate(-45deg) translate(0, -1px);
}

#menu {
  position: absolute;
  width: 300px;
  margin: -100px 0 0 0;
  padding: 50px;
  padding-top: 25;
  right: -100px;
  box-shadow: 0 10px 20px rgb(0 0 0 / 0.2);
  background: white;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  transform-origin: 0% 0%;
  transform: translate(100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}
a {
  text-decoration: none !important;
}
#menu li:hover {
  color: #149bd7;
}
#menu li {
  color: #707070;
  padding: 10px 0;
  font-size: 22px;
}
#menuToggle input:checked ~ ul {
  transform: none;
  opacity: 1;
}
/**Responsive */

@media (max-width: 1024px) {
  #menuToggle {
    top: 40px;
    right: 40px;
  }
}
@media (max-width: 1280px) {
  #menuToggle {
    top: 40px;
    right: 50px;
  }
}
</style>
