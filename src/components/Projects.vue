<template>
  <div id="projects" class="projects-container">
    <div class="projects-wrapper sketchy">
      <div class="projects-content" :class="projectContainerClass">
        <div class="project projektDiv" v-for="project in projects" :key="project.alt" style="position: relative;">
          <a :href="project.link" target="_blank" class="project-image">
            <img :src="project.imgSrc" :alt="project.alt" class="main-img" />
            <div class="icon-div">
              <img src="./../assets/tap.svg" alt="click" height="40px" width="40px" fill="red">
            </div>
          </a>
          <p>{{ project.description }}</p>
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
  padding: 3rem 0;
  margin-right: 20px;
}

.projects-header {
  text-align: center;
  margin-bottom: 1rem;
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

.main-img {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

}

.flex-row {
  flex-direction: row;
  justify-content: space-around;
}

.flex-column {
  flex-direction: column;
}

.icon-div {
  position: absolute;
  right: 44px;
  top: -20px;
  padding: 5px;
  border-radius: 50%;
  background: rgba(85, 85, 85, 0.119);
  box-shadow: 0 0 3px 6px rgba(85, 85, 85, 0.119);
  overflow: hidden;
}

.icon-div img {
  border: none;
  border-radius: 50%;
  display: block;
}
</style>
