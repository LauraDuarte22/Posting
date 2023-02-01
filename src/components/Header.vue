<template>
  <div class="container">
    <Menu ></Menu>
  </div>
  <div class="container m-5 fixed-top">
  <a class="tip" href="/">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="53.228"
      height="53.228"
      class="animation m-2"
      @mouseleave="home = false"
      @mouseenter="home = true"
      viewBox="0 0 53.228 53.228"
    >
      <defs>
        <clipPath id="a">
          <rect
            width="53.228"
            height="53.228"
            transform="translate(0 0)"
            fill="none"
          />
        </clipPath>
      </defs>
      <g transform="translate(0 0)">
        <g clip-path="url(#a)">
          <path
            d="M53.228,26.614A26.614,26.614,0,1,1,26.614,0,26.614,26.614,0,0,1,53.228,26.614"
            fill="#149bd7"
          />
          <path
            d="M21.9,45.081h0a6.9,6.9,0,0,1-6.9-6.9V10.259H30.83a12.939,12.939,0,0,1,9.119,3.212,11.282,11.282,0,0,1,3.4,8.552A11.287,11.287,0,0,1,39.9,30.67a12.927,12.927,0,0,1-9.072,3.166H21.9Zm8.694-17.86a6.378,6.378,0,0,0,4.489-1.37A4.918,4.918,0,0,0,36.5,22.07a4.916,4.916,0,0,0-1.417-3.779,6.374,6.374,0,0,0-4.489-1.371H21.9v10.3Z"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
    <span class="tip-box">Home</span>
  </a>

  <a  class="tip" href="https://wa.me/573016128838" target="_blank">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="53.228"
      height="53.228"
      class="animation"
      @mouseleave="hover = false"
      @mouseenter="hover = true"
      viewBox="0 0 53.228 53.228"
    >
      <defs>
        <clipPath id="a">
          <rect
            width="53.228"
            height="53.228"
            transform="translate(0 0)"
            fill="none"
          />
        </clipPath>
      </defs>
      <g transform="translate(0 0)" clip-path="url(#a)">
        <path
          d="M53.228,26.614A26.614,26.614,0,1,1,26.614,0,26.614,26.614,0,0,1,53.228,26.614"
          fill="#009bdf"
        />
        <path
          d="M12.75,40.476c.138-.52.258-.976.381-1.431.454-1.682.905-3.366,1.37-5.046a1.539,1.539,0,0,0-.134-1.167,13.4,13.4,0,0,1-1.544-6.722A13.861,13.861,0,0,1,26.785,12.617a13.09,13.09,0,0,1,9.837,4.27,13.445,13.445,0,0,1,3.185,13.72,12.866,12.866,0,0,1-5.323,7.256,13.59,13.59,0,0,1-13.357,1.283c-.2-.081-.392-.17-.582-.265a1.527,1.527,0,0,0-1.1-.116q-3.167.827-6.337,1.639c-.09.023-.182.037-.353.072m3.136-3.131c.167-.023.238-.026.3-.043,1.114-.288,2.234-.553,3.337-.877a1.81,1.81,0,0,1,1.488.173,11.078,11.078,0,0,0,10.2.509,11.2,11.2,0,0,0,6.933-9.176,10.946,10.946,0,0,0-1.522-7.382,11.292,11.292,0,0,0-8.8-5.635,11.58,11.58,0,0,0-11.765,6.78,11.262,11.262,0,0,0,.439,10.369,2.768,2.768,0,0,1,.2,2.354c-.318.938-.543,1.907-.826,2.928"
          fill="#fff"
        />
        <path
          d="M30.454,33.086a9.173,9.173,0,0,1-3.982-1.162A15.6,15.6,0,0,1,20.161,25.4a3.994,3.994,0,0,1,.727-4.9,1.8,1.8,0,0,1,1.863-.28.755.755,0,0,1,.29.345c.392.915.777,1.833,1.145,2.758.151.38-.077.69-.281.981-.177.251-.385.481-.58.719a.662.662,0,0,0-.069.822,9.391,9.391,0,0,0,4.657,4.06c.489.2.676.137,1.017-.276.309-.375.612-.755.921-1.13a.592.592,0,0,1,.816-.162c.835.422,1.68.826,2.526,1.229a.662.662,0,0,1,.4.706,2.885,2.885,0,0,1-2.565,2.749c-.221.039-.447.054-.579.07"
          fill="#fff"
        />
      </g>
    </svg>
    <span class="tip-box">Contactanos</span>
  </a>
</div>

</template>
<script setup>
import Menu from "../components/Menu.vue";
import { ref } from "vue";
let hover = ref(false);
let home = ref(false);
</script>
<style scoped>

.animation:hover {
  cursor: pointer;
  transform: scale(1.2);
}

.tip{
  font-weight: normal;
  color: #707070;
  text-decoration: none;
  position: relative;
}
.tip-box{
  display: none;
  line-height: 20px;
  z-index: 500;
  text-align: center;
  font-size: 14px;
  padding: 5px 10px;
  position: absolute;
  left: 0px;
  top:40px;
}
.tip:hover .tip-box{
  display: inline-block;
}
</style>
