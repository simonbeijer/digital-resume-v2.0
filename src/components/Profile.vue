<template>
  <div class="content">
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
          <p><span class="sketchy-label">Name:</span> <span class="underlined">Simon Beijer</span></p>
          <p><span class="sketchy-label">Age:</span> <span class="underlined">33</span></p>
          <p><span class="sketchy-label">Location:</span> <span class="underlined">Gothenburg,<br>Sweden</span></p>
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
.underlined {
  text-decoration:underline;
  text-decoration-color: grey;
  text-underline-offset: 8px;
}
.content {
  position: relative;
}

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

.details {
  display: flex;
  padding: 3rem 0rem;
}

.details > .sketchy {
  flex: 1;
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
