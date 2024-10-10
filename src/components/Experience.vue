<template>
  <div id="experience" class="experience-container">
    <div class="experience-header">
      <h2 class="section-header">Experience</h2>
    </div>
    <div class="experience-wrapper">
      <div class="experience-item">
        <div class="experience-timeline">
          <div class="circle"></div>
          <h3>
            2021-2024 - Full-time employee
          </h3>
        </div>
        <div class="experience-text sketchy" >
          <h3>Developer, Keeros Göteborg, Gothenburg</h3>
          <p>Full-time position in front-end development for Keeros AB (Fintech)</p>
          <p>Including full-stack development and responsibility for company support.</p>
          <p>Mainly worked with Vue on the front-end, PHP on the back-end, and MySQL database. Development was both
            on-site and remote.</p>
          <p>Engaged in both new development and maintenance of existing code. Primarily focused on the company's
            various cloud platforms for invoice management.</p>
        </div>
      </div>
      <div class="experience-item">
        <div class="experience-timeline">
          <div class="circle"></div>
          <h3>
            2020-2021 - Internship
          </h3>
        </div>
        <div class="experience-text sketchy">
          <h3>Developer, Hive and Five, Borås, Distance</h3>
          <p>Internship in front-end development at my Media Institute's teachers company, mostly remote.</p>
          <p>Worked on a mobile application in React Native with Redux.</p>
          <p>Also involved in developing new functionality for Hive and Five's website <a class="theme-color"
              href="https://adventurehero.se" target="_blank">adventurehero.se</a> using React and TypeScript.</p>
        </div>
      </div>
      <div class="experience-item">
        <div class="experience-timeline">
          <div class="circle"></div>
          <h3>2020 - Summer employee</h3>
        </div>
        <div class="experience-text sketchy">
          <h3>Developer, Imseb, Gothenburg</h3>
          <p>Summer job in web development remotely. Worked on creating a website in Vue based on a finished design for
            an American client.</p>
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
.circle {
  height: 10px;
  width: 10px;
  background: rgb(208, 208, 208);;
  position: absolute;
  right: -10px;
  top: 26px;
  border: solid grey 4px;
  border-radius: 9999px;
}
.experience-timeline {
  width: 50%;
  border-right: grey solid 4px;
  position: relative;

}

.experience-item {
  display: flex;
}

.experience-container {
  display: flex;
  justify-content: center;
  padding: 3rem 0;
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
