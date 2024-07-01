<template>
  <div id="profile" class="content">
    <div class="col-1-div">
      <div class="about-div">
        <h1>ABOUT</h1>
        <div class="sketchy">
          <p>Hi! My name is Simon and I'm a Front-End Web Developer 👨🏼‍💻</p>
          <p>Right now I'm looking for a new job in Front-End development.</p>
          <p>I have 3 years of experience from my previous work at <a href="https://www.keeros.se">Keeeros AB</a>, and I'm now looking for a new opportunity.</p>
          <p>In my spare time, I like to work out, sit at my computer, and create music.</p>
          <p>I enjoy creating alluring websites, and I'm always looking to improve.</p>
        </div>
      </div>
      <div class="details">
        <div class="sketchy">
          <h3>Details</h3>
          <p><span class="sketchy-label">Name:</span> Simon Beijer</p>
          <p><span class="sketchy-label">Age:</span> 33</p>
          <p><span class="sketchy-label">Location:</span> Gothenburg,<br>Sweden</p>
        </div>
        <div class="img-div">
          <div class="img-wrap">
            <img alt="simon" src="../assets/sb2.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  mounted() {
    window.addEventListener('resize', this.updateDimensions);
    this.updateDimensions(); // Initialize dimensions
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateDimensions);
  },
  methods: {
    updateDimensions() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    }
  }
};
</script>

<style scoped>
.content {
  position: relative;
  background-color: #ffffff;
}
/* 
.content::before {
  background-color: #ffffff;
  content: "";
  position: absolute;
  top: -125px;
  left: 0;
  right: 0;
  height: 126px;
  clip-path: polygon(100% 0%, 0 100%, 100% 100%);
  z-index: 0;
} */

.col-1-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1000px; 
  margin: 0 auto;
}

.about-div {
  padding: 2rem;
  text-align: center;
}
/* 
.sketchy {
  padding: 1rem 2rem;
  display: inline-block;
  border: 3px solid #333333;
  font-size: 1rem;
  border-radius: 8px; 
  letter-spacing: 0.2ch;
  background: #ffffff;
  position: relative;
  margin-bottom: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.sketchy::before {
  content: '';
  border: 2px solid #353535;
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(0.5deg);
  border-radius: 8px;
} */

.details {
  display: flex;
  padding: 3rem 0rem;
}

.details > .sketchy {
  flex: 1; /* Expand sketchy section to take available space */
  padding: 2rem;
}

.img-div {
  display: flex;
  justify-content: flex-end;
}

.img-wrap {
  position: relative;
  width: 60%; 
}

.img-wrap img {
  border-radius: 50%;
  display: block;
  width: 100%; 
  height: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.27);
}

.content h1 {
  font-size: 2.4rem;
  padding-bottom: 2rem;
}

.sketchy-label {
  font-weight: bold;
}
</style>
