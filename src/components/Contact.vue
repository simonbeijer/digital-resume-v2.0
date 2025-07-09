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
          <!-- LinkedIn -->
          <svg class="icon custom-box-shadow" viewBox="0 0 32 32" fill="none">
            <rect width="100%" height="100%" rx="6" fill="#000" />
            <path d="M9.5 12.5h3v10h-3v-10zm1.5-1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 1.5h2.9v1.4h.04c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.6v5.6h-3v-5c0-1.2 0-2.7-1.7-2.7-1.7 0-2 1.3-2 2.6v5.1h-3v-10z" fill="#fff"/>
          </svg>
          <p>Add me on LinkedIn</p>
        </a>
        <a
          class="display-flex footer-divs"
          href="mailto:beijer.simon@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <!-- Gmail -->
          <svg class="icon custom-box-shadow" viewBox="0 0 32 32" fill="none">
            <rect width="100%" height="100%" rx="6" fill="#000" />
            <path d="M6 10v12h20V10H6zm10 7.5L8 12.5V12h16v.5l-8 5z" fill="#fff"/>
          </svg>
          <p>Send me an email</p>
        </a>
        <a
          href="https://github.com/simonbeijer"
          rel="noreferrer"
          target="_blank"
          class="display-flex footer-divs"
        >
          <!-- GitHub -->
          <svg class="icon custom-box-shadow" viewBox="0 0 32 32" fill="none">
            <rect width="100%" height="100%" rx="6" fill="#000" />
            <path d="M16 7c-5 0-9 4-9 9 0 4 2.6 7.3 6.2 8.5.5.1.7-.2.7-.5v-1.7c-2.5.5-3-1.1-3-1.1-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .5-1.2-2-.2-4-1-4-4.3 0-.9.3-1.6.8-2.2-.1-.2-.3-1 .1-2.1 0 0 .7-.2 2.2.8.7-.2 1.5-.3 2.3-.3s1.6.1 2.3.3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.3-2 4.1-4 4.3.3.3.6.8.6 1.7v2.5c0 .3.2.6.7.5C22.4 23.3 25 20 25 16c0-5-4-9-9-9z" fill="#fff"/>
          </svg>
          <p>Visit my Github</p>
        </a>
      </div>
      <div class="display-flex center-text bottom-div">
        &copy; Simon Beijer 2025
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
.col-5-div {
  flex-direction: column;
  align-items: center;
}

h2 {
  margin:0;
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
  background-image: url("../assets/email2.png");
  background-size: 6rem; /* Reduced size */
}

.github {
  background-image: url("../assets/github-square2.png");
  background-size: 5rem; /* Reduced size */
}

.linkedin {
  background-image: url("../assets/linkedin2.png");
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

.icon {
  width: 96px;
  height: 96px;
  display: block;
  margin: 0 auto 0.5rem auto;
  border-radius: 8px;
}

.custom-box-shadow {
  /* Clean, even blue glow */
  filter: drop-shadow(0 0 8px #64868a) drop-shadow(0 0 8px #64868a);
}
</style>
