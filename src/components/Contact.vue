<template>
  <div id="contact" class="grid-col-5">
    <div :class="width < 900 ? 'col-5-div display-flex' : 'col-5-div display-flex max-width'">
      <div>
        <h2>Contact</h2>
      </div>
      <div
        class="footer-div"
        :style="width > 900 ? footerStyleDesktop : footerStyleMobile"
      >
        <a
          href="https://www.linkedin.com/in/simon-beijer-a27b37181?trk=people-guest_profile-result-card_result-card_full-click&originalSubdomain=se"
          rel="noreferrer"
          target="_blank"
          class="display-flex footer-divs linkedin"
          :style="width > 900 ? linkedinStyleDesktop : linkedinStyleMobile"
        >
          <p style="text-align: center">Add me on LinkedIn</p>
        </a>
        <a
          class="display-flex footer-divs gmail"
          href="mailto:beijer.simon@gmail.com"
          rel="noreferrer"
          target="_blank"
          :style="width > 900 ? gmailStyleDesktop : gmailStyleMobile"
        >
          <p style="text-align: center">Send me an email</p>
        </a>
        <a
          href="https://github.com/simonbeijer"
          rel="noreferrer"
          target="_blank"
          class="display-flex footer-divs github"
          :style="width > 900 ? githubStyleDesktop : githubStyleMobile"
        >
          <p style="text-align: center">Visit my Github</p>
        </a>
      </div>
      <p class="display-flex" :style="footerPStyle">
        &copy; Simon Beijer 2024
        <img
          alt="hooli"
          :style="{ height: '2rem' }"
          src="../assets/hooli.png"
        />
      </p>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Contact',
  mounted() {
    this.$emit('sectionMounted', 'Contact');
  }

};
</script>

<style scoped>
#contact {
  background-color: #e1e6e6;
}

.col-5-div {
  flex-direction: column;

  }
    h2 {
      margin-top: 4rem;
    }

.gmail {
  display: block;
  background-image: url("../assets/email.png");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 8rem;
  border-radius: 6px;
}

.github {
  display: block;
  background-image: url("../assets/github-square.png");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 6.4rem;
  border-radius: 6px;
}

.linkedin {
  display: block;
  background-image: url("../assets/linkedin.png");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 7.4rem;
  border-radius: 6px;
}

.footer-div {
  display: flex;
  width: 80%;
  padding-top: 3rem;
  border-radius: 10px;
}

.footer-divs {
  flex-grow: 1;
  height: 10rem;
  background-color: #00000017;
}

.col-5-div a {
  text-decoration: none;
  color: black;
}

.col-5-div a:hover {
  opacity: 0.8;
}
</style>
