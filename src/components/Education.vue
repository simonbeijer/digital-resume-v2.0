<template>
  <div id="education" class="content">
    <div :class="{ 'max-width': width >= 600 }">
      <div class="col-2-div display-flex" style="padding: 0 10% 2rem 10%;">
        <h1>EDUCATION</h1>
        <div class="bth" style="padding: 2rem 1rem; max-width: 80%;">
          <ul>
            <li style="margin: 0 0 1rem 1rem; font-weight: 600;">2018 - 2019</li>
            <li>Blekinge Institute of Technology, course package web programming and database</li>
            <li>
              <p>
                This was a course with a mixture between Front-End and Back-End programming. The first two courses were
                Front-End with CSS3, HTML5, PHP, and SQL. Subjects including design and UX.
              </p>
            </li>
            <li>
              <p>
                The other two courses were Back-End with PHP, JavaScript, Node, and SQL. Subjects including
                Object-Oriented-Programming, API's, frameworks, and databases.
              </p>
            </li>
            <li style="padding: 1rem 0 0 0.6rem;">
              <a without rel="noreferrer" target="_blank"
                href="https://dbwebb.se/utbildning/webbprogrammering-och-databaser-30hp">
                BTH.se
              </a>
            </li>
          </ul>
        </div>
        <div class="medieinstitutet" style="padding: 3rem 1rem; max-width: 80%;">
          <ul>
            <li style="margin: 0 0 1rem 1rem; font-weight: 600;">2019-2021</li>
            <li>Medieinstitutet Gothenburg, Front-End developing</li>
            <li>
              <p>
                This is a two-year program with the main focus on Front-End development. It also includes LIA where you
                get to use your skills in a real workplace.
              </p>
            </li>
            <li>
              <p>
                The first course starts with HTML5, CSS3, and JavaScript. Then on to more programming with TypeScript,
                Node.js, React. Also includes Back-End, UX, dynamic, and agile web development.
              </p>
            </li>
            <li style="padding: 1rem 0 0 0.6rem;">
              <a without rel="noreferrer" target="_blank"
                href="https://medieinstitutet.se/utbildningar/front-end-developer">
                Medieinstitutet.se
              </a>
            </li>
          </ul>
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
.content {
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 34px;
}
.content::before {
  background-color: #202020;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 55px;
  transform: skewY(3deg);
  transform-origin: top left;
  z-index: 0;
}

.content h1 {
  font-size: 2.4rem;
  text-align: center;
  color: white;
  position: relative;
}
#education {
  background-color: rgb(255, 255, 255);
}

.col-2-div {
  flex-direction: column;
  background-color: #f7f4f4;
}

.col-2-div ul {
  list-style-type: none;
}

.col-2-div a {
  font-size: 1.1rem;
  font-weight: 500;
  color: rgb(138, 184, 138);
  text-decoration: none;
}

.col-2-div .bth {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: 1px solid grey;
}

.col-2-div .medieinstitutet {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: 1px solid grey;
}

@media only screen and (max-width: 1000px) {
  .col-2-div {
    max-width: 70%;
    margin: auto;
  }
}
</style>