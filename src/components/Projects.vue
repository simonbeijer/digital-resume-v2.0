<template>
  <div id="projects" class="projects-container">
    <div class="projects-wrapper ">
      <div class="projects-content" :class="projectContainerClass">
        <div class="project projektDiv" v-for="project in projects" :key="project.alt" style="position: relative;">
          <a :href="project.link" target="_blank" class="project-image">
            <img :src="project.imgSrc" :alt="project.alt" class="main-img" />
            <div class="icon-div">
              <img src="./../assets/tap2.svg" alt="click" height="40px" width="40px" fill="red">
            </div>
          </a>
          <p class="info-text">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mli from '@/assets/mli.png';
import harmoni from '@/assets/harmoni.png';
import matmind from '@/assets/matmind.png';
import letter from '@/assets/personal-letter-LLM.png';

export default {
  name: 'Projects',
  data() {
    return {
      width: window.innerWidth,
      projects: [
        { imgSrc: letter, alt: 'Personal Letter LLM', description: 'Use this Large Laguage Model (AI) to create the perfect personal letter, combine the jobb ad and CV to create your personal letter.', link: 'https://personal-letter.vercel.app/', linkText: 'Live link' },
        { imgSrc: matmind, alt: 'Mat Mind', description: 'Online Jiu Jitsu coach. Mat Mind is a LLM (AI) driven expert that help you game on the mat i seconds.', link: 'https://mat-mind.vercel.app/', linkText: 'Live link' },
        { imgSrc: mli, alt: 'MLI Lures', description: 'Responsive fishing lure e-commerce website built with modern web technologies. Features product showcase, responsive design, and optimized user experience.', link: 'https://simonbeijer.github.io/mli-build/', linkText: 'Github pages link' },
        { imgSrc: harmoni, alt: 'Själsharmoni', description: 'Professional wellness business website with modern design, service booking functionality, and responsive layout for healing practice.', link: 'https://simonbeijer.github.io/Healing', linkText: 'GIthub pages link' },
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

.info-text {
  font-size: 13px;
  text-align: center;
}
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
  background-color: #ececec;
  padding: 2rem;
  border-radius: 8px;
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
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

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
