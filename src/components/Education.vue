<template>
  <div id="education" class="education-container">
    <div class="education-header">
      <h2 class="section-header">Education</h2>
    </div>
    <div class="education-wrapper">
      <div class="education-item">
        <div class="education-timeline">
          <div class="circle"></div>
          <h3>2019-2021 - Front-End</h3>
        </div>
        <div class="education-text sketchy">
          <h3>Medieinstitutet Gothenburg</h3>
          <p>This is a two-year program with the main focus on Front-End development. It also includes LIA where you get to use your skills in a real workplace.</p>
          <p>The first course starts with HTML5, CSS3, and JavaScript. Then on to more programming with TypeScript, Node.js, React. Also includes Back-End, UX, dynamic, and agile web development.</p>
          <p><a class="theme-color" href="https://medieinstitutet.se/utbildningar/front-end-developer" target="_blank" rel="noreferrer">Medieinstitutet.se</a></p>
        </div>
      </div>
      <div class="education-item">
        <div class="education-timeline">
          <div class="circle"></div>
          <h3>2018-2019 - Full-Stack</h3>
        </div>
        <div class="education-text sketchy">
          <h3>Blekinge Institute of Technology</h3>
          <p>This was a course with a mixture between Front-End and Back-End programming. The first two courses were Front-End with CSS3, HTML5, PHP, and SQL. Subjects including design and UX.</p>
          <p>The other two courses were Back-End with PHP, JavaScript, Node, and SQL. Subjects including Object-Oriented-Programming, API's, frameworks, and databases.</p>
          <p><a class="theme-color" href="https://dbwebb.se/utbildning/webbprogrammering-och-databaser-30hp" target="_blank" rel="noreferrer">BTH.se</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Education',
  mounted() {
    this.$emit('sectionMounted', 'Education');
  }
};
</script>

<style scoped>
.circle {
  height: 10px;
  width: 10px;
  background: rgb(208, 208, 208);
  position: absolute;
  right: -10px;
  top: 26px;
  border: solid grey 4px;
  border-radius: 9999px;
}

.education-timeline {
  width: 50%;
  border-right: grey solid 4px;
  position: relative;
}

.education-item {
  display: flex;
}

.education-container {
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  flex-direction: column;
  align-items: center;
}

.education-wrapper {
  width: 900px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.education-header {
  text-align: center;
}

.education-text {
  margin-bottom: 1rem;
  width: 90%;
  margin-left: 50px;
}

.education-text h3 {
  margin-bottom: 10px;
}

.education-text p {
  margin-bottom: 5px;
}

.education-item a {
  text-decoration: none;
  font-weight: 500;
  position: relative;
  z-index: 10;
}

.education-item a:hover {
  text-decoration: underline;
}
</style>
