<template>
  <div id="education" class="education-container">
    <div class="education-wrapper">
      <div class="education-header">
        <h2>EDUCATION</h2>
      </div>
      <div class="education-item sketchy">
        <h3>Blekinge Institute of Technology, 2018 - 2019</h3>
        <p>Course package: Web programming and database</p>
        <p>This was a course with a mixture between Front-End and Back-End programming. The first two courses were Front-End with CSS3, HTML5, PHP, and SQL. Subjects including design and UX.</p>
        <p>The other two courses were Back-End with PHP, JavaScript, Node, and SQL. Subjects including Object-Oriented-Programming, API's, frameworks, and databases.</p>
        <p><a href="https://dbwebb.se/utbildning/webbprogrammering-och-databaser-30hp" target="_blank" rel="noreferrer">BTH.se</a></p>
      </div>
      <div class="education-item sketchy">
        <h3>Medieinstitutet Gothenburg, 2019-2021</h3>
        <p>Program: Front-End development</p>
        <p>This is a two-year program with the main focus on Front-End development. It also includes LIA where you get to use your skills in a real workplace.</p>
        <p>The first course starts with HTML5, CSS3, and JavaScript. Then on to more programming with TypeScript, Node.js, React. Also includes Back-End, UX, dynamic, and agile web development.</p>
        <p><a href="https://medieinstitutet.se/utbildningar/front-end-developer" target="_blank" rel="noreferrer">Medieinstitutet.se</a></p>
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

.education-container {
  display: flex;
  justify-content: center;
  background-color: rgb(208, 208, 208);
  padding: 4rem 0;
}

.education-wrapper {
  width: 900px;
  padding: 2rem;
}

.education-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.education-item {
  margin-bottom: 1rem;
}

.education-item h3 {
  margin-bottom: 10px;
}

.education-item p {
  margin-bottom: 5px;
}

.education-item a {
  color: rgb(138, 184, 138);
  text-decoration: none;
  font-weight: 500;
}

.education-item a:hover {
  text-decoration: underline;
}
</style>
