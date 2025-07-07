<template>
  <div class="content">
    <div class="col-1-div">
      <div class="about-div">
        <div class="sketchy">
          <p>Passionate web developer with expertise in modern front-end technologies and user experience design, seeking new challenges in Gothenburg. I thrive in creating intuitive, user-friendly interfaces and writing thoughtful code.</p>
          <p>I have 3+ years of professional experience from <a class="theme-color" href="https://www.keeros.se"
              target="_blank">Keeros AB</a>, where I developed cloud-based fintech platforms using Vue.js, PHP, and MySQL. I excel in both on-site and remote work environments with agile methodologies.</p>
          <p>Currently exploring cutting-edge technologies including Next.js and AI integrations with LLM-based services through personal projects. I'm passionate about creating solutions that make a positive impact.</p>
          <p>Outside of coding, I enjoy fitness, music production, and gaming.</p>
        </div>
      </div>
      <div class="details">
        <div class="detailsInfo sketchy">
          <h3>Details</h3>
          <p><span class="sketchy-label">Name:</span> <span class="underlined">Simon Beijer</span></p>
          <p><span class="sketchy-label">Location:</span> <span class="underlined">Gothenburg,<br>Sweden</span></p>
        </div>
        <div class="sketchy img-div">
          <img class="sketchy" alt="simon" src="../assets/me.png">
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
    this.updateDimensions();
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
  text-decoration: underline;
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
  justify-content: space-evenly;
  align-items: center;
  padding: 3rem 0rem;
  flex-direction: row;
}
@media (max-width: 920px) {
  .details {
    flex-direction: column;
  }
  .detailsInfo {
    margin-bottom: 2rem;
  }
}

.details>.sketchy {
  flex: 1;
  margin: 0 5rem;
}

.img-div {
  flex: 1;
  margin: 0 5rem;
}


.img-div img {
  width: 270px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.27);
  padding: 2px !important;
}

.content h2 {
  padding-bottom: 2rem;
}

.sketchy-label {
  font-weight: bold;
}

.about-div a {
  text-decoration: none;
  font-weight: 500;
  position: relative;
  z-index: 10;
}
</style>
