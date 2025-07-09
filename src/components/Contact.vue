<template>
  <div class="grid-col-5">
    <div class="col-5-div display-flex">
      <div class="footer-div" :class="width > 800 ? 'center-icons' : ''">
        <a
          href="https://www.linkedin.com/in/simon-beijer-a27b37181?trk=people-guest_profile-result-card_result-card_full-click&originalSubdomain=se"
          rel="noreferrer"
          target="_blank"
          class="display-flex footer-divs"
        >
          <img src="../assets/linkedin2.png" alt="LinkedIn" class="icon custom-box-shadow" />
          <p>Add me on LinkedIn</p>
        </a>
        <a
          class="display-flex footer-divs"
          href="mailto:beijer.simon@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <img src="../assets/email2.png" alt="Gmail" class="icon custom-box-shadow" />
          <p>Send me an email</p>
        </a>
        <a
          href="https://github.com/simonbeijer"
          rel="noreferrer"
          target="_blank"
          class="display-flex footer-divs"
        >
          <img src="../assets/github-square2.png" alt="Github" class="icon custom-box-shadow" />
          <p>Visit my Github</p>
        </a>
      </div>
      <div class="display-flex center-text bottom-div">
        &copy; Simon Beijer 2025
        <img alt="hooli" class="icon custom-box-shadow" src="../assets/hooli.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  mounted() {
    this.$emit('sectionMounted', 'Contact');
  },
  data() {
    return {
      width: window.innerWidth,
    };
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWidth);
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
};
</script>

<style scoped>
.col-5-div {
  flex-direction: column;
  align-items: center;
}

h2 {
  margin:0;
  text-align: center;
}

.icon {
  height: 2.5rem;
  margin-bottom: 0.5rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.custom-box-shadow {
  box-shadow: 0 4px 16px #64868a;
  border-radius: 8px;
}

.footer-div {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-top: 3rem;
  border-radius: 10px;
  flex-wrap: wrap;
}

.center-icons {
  justify-content: center;
}

.footer-divs {
  flex-grow: 1;
  height: 8rem;
  max-width: 15rem;
  margin: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.col-5-div a {
  text-decoration: none;
  color: black;
}

.col-5-div a:hover {
  opacity: 0.8;
}

.footer-divs p {
  text-align: center;
  margin: auto;
}

.center-text {
  text-align: center;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.hooli {
  height: 2rem;
  padding-left: 12px;
}
.bottom-div {
  display: flex;
  align-items: center;  
  padding-top: 36px;
}

.gmail, .github, .linkedin {
  /* Remove background-image and background-size rules */
}
</style>
