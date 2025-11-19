<template>
  <div id="experience" class="experience-container">
    <div class="experience-wrapper">
      <div class="experience-item">
        <div class="timeline">
          <div class="circle"></div>
          <h3>
            2021-2024 - Full-time employee
          </h3>
        </div>
        <div class="experience-text sketchy" style="padding: 1rem 2rem !important;">
          <h3>Developer, Keeros AB, Gothenburg</h3>
          <p>Full-time developer role at a fintech company building cloud-based platforms for factoring, business loans,
            and leasing. Worked across the full stack with primary focus on front-end development.</p>
          <p>Developed and maintained headless cloud platforms using Vue.js, PHP, and MySQL. Built UI components,
            integrated REST APIs (CRUD operations), and worked on security implementations including SQL injection
            prevention and improved password handling.</p>
          <p>Key projects included building a chat solution for bank-customer communication and continuously refactoring
            legacy jQuery/PHP code into reusable Vue components. Collaborated closely with external security consultants
            and internal teams.</p>
          <p>Worked both on-site and remotely using agile methodologies. Technologies: Vue.js, jQuery, PHP, MySQL,
            Docker, Jest, Cypress, Figma, Git, i18n.</p>
        </div>
      </div>
      <div class="experience-item">
        <div class="timeline">
          <div class="circle"></div>
          <h3>
            2020-2021 - Internship
          </h3>
        </div>
        <div class="experience-text sketchy" style="padding: 1rem 2rem !important;">
          <h3>Developer Intern, Hive and Five, Borås</h3>
          <p>Internship in web and mobile development, primarily remote work through Media Institute
            partnership.</p>
          <p>Developed mobile application features using React Native with Redux for state management. Built new
            functionality for <a class="theme-color" href="https://adventurehero.se"
              target="_blank">adventurehero.se</a> using React, TypeScript, and Redux.</p>
          <p>Worked with MongoDB and Docker. Focused on creating responsive, user-friendly interfaces and implementing
            modern front-end practices.</p>
        </div>
      </div>
      <div class="experience-item">
        <div class="timeline">
          <div class="circle"></div>
          <h3>2020 - Summer employee</h3>
        </div>
        <div class="experience-text sketchy" style="padding: 1rem 2rem !important;">
          <h3>Web Developer, Imseb, Gothenburg</h3>
          <p>Summer position in web development, working remotely to deliver client solutions.</p>
          <p>Developed responsive website using Vue.js based on provided designs for American client, ensuring
            pixel-perfect implementation and cross-browser compatibility.</p>
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
