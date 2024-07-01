<template>
  <div id="experience" class="experience-container">
    <div class="experience-wrapper">
      <div class="experience-header">
        <h2>Experience</h2>
      </div>
      <div class="experience-item sketchy">
        <h3>Developer, Keeros Göteborg, Gothenburg — internship 2021-2024</h3>
        <p>Full-time position in front-end development for Keeros AB (Fintech)</p>
        <p>Including full-stack development and responsibility for company support.</p>
        <p>Mainly worked with Vue on the front-end, PHP on the back-end, and MySQL database. Development was both on-site and remote.</p>
        <p>Engaged in both new development and maintenance of existing code. Primarily focused on the company's various cloud platforms for invoice management.</p>
      </div>
      <div class="experience-item sketchy">
        <h3>Developer, Hive and Five, Borås — internship 2020-2021</h3>
        <p>Internship in front-end development at my Media Institute's teachers company, mostly remote.</p>
        <p>Worked on a mobile application in React Native with Redux.</p>
        <p>Also involved in developing new functionality for Hive and Five's website <a href="https://adventurehero.se" target="_blank">adventurehero.se</a> using React and TypeScript.</p>
      </div>
      <div class="experience-item sketchy">
        <h3>Developer, Imseb, Gothenburg — summer 2020</h3>
        <p>Summer job in web development remotely. Worked on creating a website in Vue based on a finished design for an American client.</p>
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
.experience-container {
  display: flex;
  justify-content: center;
  background-color: rgb(208, 208, 208);
  padding: 4rem 0;
}

.experience-wrapper {
  width: 900px;
  padding: 2rem;
}

.experience-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.experience-item {
  margin-bottom: 1rem;
}

.experience-item h3 {
  margin-bottom: 10px;
}

.experience-item p {
  margin-bottom: 5px;
}
</style>