<template>
  <div id="experience" class="experience-container">
    <div class="experience-wrapper">
      <div class="experience-item">
        <div class="experience-timeline">
          <div class="circle"></div>
          <h3>
            2021-2024 - Full-time employee
          </h3>
        </div>
        <div class="experience-text sketchy" style="padding: 1rem 2rem !important;">
          <h3>Front-End Developer, Keeros AB, Gothenburg</h3>
          <p>Full-time position as Front-End Developer within fintech, with elements of full-stack development and support responsibilities.</p>
          <p>Developed and maintained headless cloud platforms for invoice management using Vue.js, jQuery, PHP, and MySQL. Experience in both new development and maintenance of legacy codebases.</p>
          <p>Worked both on-site and remotely using agile methodologies. Technologies used: Vue.js, jQuery, PHP, MySQL, Docker, Jest, Cypress, Figma.</p>
          <p>Responsible for creating user-friendly interfaces and ensuring seamless integration between front-end and back-end systems.</p>
        </div>
      </div>
      <div class="experience-item">
        <div class="experience-timeline">
          <div class="circle"></div>
          <h3>
            2020-2021 - Internship
          </h3>
        </div>
        <div class="experience-text sketchy" style="padding: 1rem 2rem !important;">
          <h3>Front-End Developer Intern, Hive and Five, Borås</h3>
          <p>Internship in front-end development, primarily remote work through Media Institute partnership.</p>
          <p>Developed mobile application features using React Native with Redux for state management.</p>
          <p>Created new functionality for <a class="theme-color"
              href="https://adventurehero.se" target="_blank">adventurehero.se</a> using React and TypeScript, focusing on user experience and responsive design.</p>
        </div>
      </div>
      <div class="experience-item">
        <div class="experience-timeline">
          <div class="circle"></div>
          <h3>2020 - Summer employee</h3>
        </div>
        <div class="experience-text sketchy" style="padding: 1rem 2rem !important;">
          <h3>Web Developer, Imseb, Gothenburg</h3>
          <p>Summer position in web development, working remotely to deliver client solutions.</p>
          <p>Developed responsive website using Vue.js based on provided designs for American client, ensuring pixel-perfect implementation and cross-browser compatibility.</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Experience',
  mounted() {
    this.$emit('sectionMounted', 'Experience');
  }
};
</script>

<style scoped>

.experience-timeline {
  width: 50%;
  border-right: #828181 solid 3px;
  position: relative;
  padding-right: 2rem;
}

.experience-timeline h3 {
  color: #000000;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.experience-item {
  display: flex;
}

.experience-container {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  flex-direction: column;
  align-items: center;
}

.experience-wrapper {
  width: 900px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.experience-header {
  text-align: center;
}

.experience-text {
  margin-bottom: 1rem;
  width: 90%;
  margin-left: 50px;
}

.experience-text h3 {
  margin-bottom: 10px;
}

.experience-text p {
  margin-bottom: 5px;
}

.experience-text a {
  text-decoration: none;
  font-weight: 500;
  position: relative;
  z-index: 10;
}


</style>
