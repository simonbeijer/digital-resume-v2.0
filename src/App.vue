<template>
  <div id="app" ref="appContainer">
    <CustomSidebar :sidebarSections="sidebarSections" :scrollTop="scrollTop" :firstSectionHeight="firstSectionHeight" />
    <div class="main-content">
      <HeroImage ref="heroImage"/>
      <Profile />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  </div>
</template>

<script>
import CustomSidebar from './components/CustomSidebar.vue';
import HeroImage from './components/HeroImage.vue';
import Profile from './components/Profile.vue';
import Education from './components/Education.vue';
import Experience from './components/Experience.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';

export default {
  name: 'App',
  components: {
    CustomSidebar,
    HeroImage,
    Profile,
    Education,
    Experience,
    Skills,
    Projects,
    Contact,
  },
  data() {
    return {
      sidebarSections: ['About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact'],
      scrollTop: 0,
      firstSectionHeight: 0,
    };
  },
  mounted() {
    this.updateFirstSectionHeight();
    this.$refs.appContainer.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    this.$refs.appContainer.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleScroll() {
      const mainContent = this.$refs.appContainer;
      this.scrollTop = mainContent.scrollTop;
      this.updateFirstSectionHeight();
    },
    updateFirstSectionHeight() {
      this.firstSectionHeight = this.$refs.heroImage.$el.offsetHeight;
    },
    handleResize() {
      // Handle resize events here
      this.updateFirstSectionHeight();
      // Optionally update scrollTop or other properties related to resize
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

html,
body {
  font-family: 'Ubuntu', sans-serif;
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;
  overflow-y: auto;
}

.main-content {
  width: 100%;
}

.sketchy {
  padding: 1rem 2rem;
  display: inline-block;
  border: 3px solid #4f4f4f;
  font-size: 1rem;
  border-radius: 8px; 
  letter-spacing: 0.2ch;
  background: #ffffff;
  position: relative;
  margin-bottom: 2rem; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.sketchy::before {
  content: '';
  border: 2px solid #353535;
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(0.5deg);
  border-radius: 8px;
}
.sidebar-color {
  background: rgb(44, 44, 44);
}
</style>
