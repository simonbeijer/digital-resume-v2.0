<template>
  <div id="contact" class="grid-col-5">
    <div class="col-5-div display-flex">
      <div>
        <h2>CONTACT</h2>
      </div>
      <div class="footer-div" :class="width > 800 ? 'center-icons' : ''">
        <a
          href="https://www.linkedin.com/in/simon-beijer-a27b37181?trk=people-guest_profile-result-card_result-card_full-click&originalSubdomain=se"
          rel="noreferrer"
          target="_blank"
          class="display-flex footer-divs linkedin"
        >
          <p>Add me on LinkedIn</p>
        </a>
        <a
          class="display-flex footer-divs gmail"
          href="mailto:beijer.simon@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <p>Send me an email</p>
        </a>
        <a
          href="https://github.com/simonbeijer"
          rel="noreferrer"
          target="_blank"
          class="display-flex footer-divs github"
        >
          <p>Visit my Github</p>
        </a>
      </div>
      <div class="display-flex center-text bottom-div">
        &copy; Simon Beijer 2024
        <img alt="hooli" class="hooli" src="../assets/hooli.png" />
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
#contact {
  background-color: #ffffff;
  width: 100%;
  padding: 2rem  0rem 1rem 0rem;
}

.col-5-div {
  flex-direction: column;
  align-items: center;
}

h2 {
  margin-top: 4rem;
  text-align: center;
}

.gmail, .github, .linkedin {
  display: block;
  background-position: center bottom;
  background-repeat: no-repeat;
  border-radius: 6px;
  text-align: center;
}

.gmail {
  background-image: url("../assets/email.png");
  background-size: 6rem; /* Reduced size */
}

.github {
  background-image: url("../assets/github-square.png");
  background-size: 5rem; /* Reduced size */
}

.linkedin {
  background-image: url("../assets/linkedin.png");
  background-size: 6rem; /* Reduced size */
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
</style>
