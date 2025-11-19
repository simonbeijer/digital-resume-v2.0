<template>
  <div class="content">
    <div class="col-1-div">
      <div class="about-div">
        <div class="sketchy">
          <p>Full-stack web developer with 4 years of experience and a strong focus on front-end development and user
            experience. I specialize in building modern, intuitive interfaces while being comfortable working across the
            entire stack.</p>

          <p>I spent 3+ years at <a class="theme-color" href="https://www.keeros.se" target="_blank">Keeros AB</a>,
            developing cloud-based fintech platforms with Vue.js, PHP, and MySQL. My work included everything from UI
            components and REST API integration to security implementations and database design. I thrive in agile
            teams, both on-site and remote.</p>

          <p>I stay current through personal projects, recently building Next.js applications with AI integration using
            LLM APIs. Currently expanding my skills with Python and machine learning to broaden my technical toolkit.
          </p>

          <p>Outside of coding, I enjoy jiu jitsu, music production, and gaming.</p>
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
