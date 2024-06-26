<template>
  <div class="hero-image">
    <div class="contact">
      <a class="gmail" href=""></a>
      <a class="github" href=""></a>
      <a class="linkedin" href=""></a>
    </div>
    <div class="hero-text">
      <div class="line"></div>
      <h1>SIMON BEIJER</h1>
      <div class="label">
        <p>Web Developer</p>
      </div>
    </div>
    <div class="button-div">
      <div class="arrow bounce" alt="scroll-down"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroImg',
  mounted() {
    this.$emit('sectionMounted', 'HeroImage');
  }
};
</script>

<style scoped>
@import url('https://fonts.bunny.net/css?family=abeezee:400|archivo-black:400');

.contact {
  height: 100px;
  width: 160px;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
}

.contact a {
  display: block;
  height: 30px;
  width: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.gmail {
  background-image: url("../assets/email.png");
}

.github {
  background-image: url("../assets/github-square.png");
}

.linkedin {
  background-image: url("../assets/linkedin.png");
}

.arrow {
  width: 40px;
  height: 40px;
  background-image: url("../assets/down-arrow.png");
  background-size: contain;

}

.bounce {
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@-webkit-keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateY(0);
  }

  40% {
    -webkit-transform: translateY(-20px);
  }

  60% {
    -webkit-transform: translateY(-10px);
  }
}

@-moz-keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    -moz-transform: translateY(0);
  }

  40% {
    -moz-transform: translateY(-20px);
  }

  60% {
    -moz-transform: translateY(-10px);
  }
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-20px);
  }

  60% {
    transform: translateY(-10px);
  }
}


.button-div {
  position: absolute;
  left: 78vw;
  bottom: 95px;
  width: 150px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 10px 0px;
  height: 60px;
}


.button-div::after {
  content: "";
  position: absolute;
  bottom: -9px;
  left: 0;
  right: 0px;
  height: 15px;
  background-color: black;
  -webkit-transform: skewY(-3deg);
  transform: skewY(-3deg);
  -webkit-transform-origin: top left;
  transform-origin: top left;
  z-index: 0;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

.label {
  background: black;
  color: white;
  font-family: courier;
  padding: 0px 15px !important;
  display: inline-block;
  margin-left: 32px;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.3);
  border-top-right-radius: 2px;
}

body {
  padding: 1vw;
  background: #fefefe;
  text-align: center;
}

main {
  font-size: 1em;
}

h1 {
  font-size: 60px;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Archivo Black", sans-serif;
}

h2 {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 56px;
  font-family: "Archivo Black", sans-serif;
  background-size: cover;
  -webkit-background-clip: text;
  background-clip: text;
  -moz-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
}

.font-background {
  background-size: contain;
  background-image: url("../assets/fb3.jpg");
}

.hero-image {
  height: 110vh !important;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url("../assets/img.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-text {
  text-align: center;
  position: absolute;
  bottom: 16%;
  left: 22%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: left;
}

.line {
  background: white;
  height: 8px;
  width: 28vw;
  left: 20%;
  margin-bottom: 30px;
  border-radius: 3px;
}

h1 {
  font-size: 48px;
  padding-left: 20px !important;
  font-weight: 400;
}

.sidebar {
  position: absolute;
  top: 0;
  right: 0;
  height: 240px;
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
