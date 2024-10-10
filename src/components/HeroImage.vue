<template>
  <div class="hero-image">
    <div class="contact">
      <a class="gmail" href=""></a>
      <a class="github" href=""></a>
      <a class="linkedin" href=""></a>
    </div>
    <div class="hero-text">
      <h1 style="font-size: 56px;">SIMON BEIJER</h1>
      <div class="line"></div>
      <div class="label">
        <p>Web Developer</p>
      </div>
    </div>
    <div :style="{
        marginLeft: showButton ? buttonPostion : 'none',
        right: showButton ? 'auto' : '43%',
      }" class="button-div sidebar-color" @click="scrollToAbout">
      <div class="arrow bounce" alt="scroll-down"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroImage',
  props: {
    buttonPostion: {
      type: String,
      default: "0px"
    },
    showButton: {
      type: String,
      default: "0px"
    },
  },
  mounted() {
    this.$emit('sectionMounted', 'HeroImage');
  },
  methods: {
    scrollToAbout() {
      this.$emit('displayProfile', 'About');
    },
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.hero-image {
  background-image: url("../assets/bg11.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  position: relative;
}

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

.hero-text {
  text-align: center;
  position: absolute;
  bottom: 16%;
  left: 10%;
  color: white;
  text-align: left;
  padding: 20px;

}

.line {
  background: rgb(234, 233, 233);
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

.arrow {
  width: 40px;
  height: 40px;
  background-image: url("../assets/down-arrow.png");
  background-size: contain;
  margin-top: 18px;
}

.bounce {
  -webkit-animation: bounce 2.5s infinite;
  animation: bounce 2.5s infinite;
}

@-webkit-keyframes bounce {
  0%, 20%, 50%, 80%, 100% { -webkit-transform: translateY(0); }
  40% { -webkit-transform: translateY(-20px); }
  60% { -webkit-transform: translateY(-5px); }
}

@-moz-keyframes bounce {
  0%, 15%, 50%, 80%, 100% { -moz-transform: translateY(0); }
  40% { -moz-transform: translateY(-20px); }
  60% { -moz-transform: translateY(-5px); }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-20px); }
  60% { transform: translateY(-5px); }
}

.button-div {
  position: absolute;
  bottom: 0;
  width: 156px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 10px 0;
  height: 60px;
  background: rgb(0 0 0 / 20%);
}
</style>
