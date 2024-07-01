<template>
  <div class="hero-image">
    <div class="contact">
      <a class="gmail" href=""></a>
      <a class="github" href=""></a>
      <a class="linkedin" href=""></a>
    </div>
    <div class="hero-text">
      <h1>SIMON BEIJER</h1>
      <div class="line"></div>
      <div class="label">
        <p>Web Developer</p>
      </div>
    </div>
    <div class="button-div sidebar-color">
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
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

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
  -webkit-animation: bounce 2.5s infinite;
  animation: bounce 2.5s infinite;
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
    -webkit-transform: translateY(-15px);
  }

  60% {
    -webkit-transform: translateY(-5px);
  }
}

@-moz-keyframes bounce {

  0%,
  15%,
  50%,
  80%,
  100% {
    -moz-transform: translateY(0);
  }

  40% {
    -moz-transform: translateY(-15px);
  }

  60% {
    -moz-transform: translateY(-5px);
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
    transform: translateY(-5px);
  }
}


.button-div {
  position: absolute;
  left: 78vw;
  bottom: 0px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 10px 0px;
  height: 60px;
}


.label {
  background: black;
  color: white;
  font-family: courier;
  padding: 0px 24px !important;
  display: inline-block;
  text-align: center;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.3);
  border-top-right-radius: 2px;
  letter-spacing: 0.6ch;
  width: auto;
  margin-left: 20px !important;
  margin-top: 1rem !important;
}

h1 {
  font-size: 80px !important;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.2ch;
  margin-bottom: 1rem !important;
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
  height: 100vh !important;
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
  left: 10%;
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
