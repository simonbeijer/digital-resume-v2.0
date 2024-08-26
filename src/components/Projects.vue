<template>
  <div id="projects" class="projects-container">
    <div class="projects-header">
      <h2>PROJECTS</h2>
    </div>
    <div class="projects-wrapper sketchy">
      <div class="projects-content" :class="projectContainerClass">
        <div class="project projektDiv" v-for="project in projects" :key="project.alt">
          <img :src="project.imgSrc" :alt="project.alt" class="project-image" />
          <p>{{ project.description }}</p>
          <a class="project-link" :href="project.link" target="_blank" rel="noreferrer">
            {{ project.linkText }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mli from '@/assets/mli.png';
import harmoni from '@/assets/harmoni.png';
import app from '@/assets/scorify.png';
import work from '@/assets/FizzBuzz.png';

export default {
  name: 'Projects',
  data() {
    return {
      width: window.innerWidth,
      projects: [
        { imgSrc: mli, alt: 'Mlilures', description: 'MLI lures project made for a friend.', link: 'https://simonbeijer.github.io/mli-build/', linkText: 'Live link' },
        { imgSrc: harmoni, alt: 'Själsharmoni', description: 'Själsharmoni project for a healing business', link: 'https://simonbeijer.github.io/Healing', linkText: 'Live link' },
        { imgSrc: app, alt: 'Scorify', description: 'Scorify is a final project with ReactNative', link: 'https://github.com/FThelin/mitt-lag---frontend', linkText: 'GitHub link' },
        { imgSrc: work, alt: 'Fizzbuzz', description: 'Fizzbuzz work test made in about 5 hours', link: 'https://simonbeijer.github.io/fizzbuzz/', linkText: 'Live link' }
      ]
    };
  },
  computed: {
    projectContainerClass() {
      return this.width < 600 ? 'flex-column' : 'flex-row wrap';
    }
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.$emit('sectionMounted', 'Projects');
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>

<style scoped>
.projects-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
}

.projects-header {
  text-align: center;
  margin-bottom: 2rem;
}

.projects-wrapper {
  width: 900px;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.projects-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(50% - 1rem);
  margin-bottom: 2rem;
}

.project img {
  width: 100%;
  max-width: 380px;
  height: auto;
  display: block;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Increased shadow effect */
}

.project-link {
  text-decoration: none;
  color: rgb(137, 184, 138);
}

.flex-row {
  flex-direction: row;
  justify-content: space-around;
}

.flex-column {
  flex-direction: column;
}
</style>
