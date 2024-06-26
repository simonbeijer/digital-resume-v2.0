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
  /* Add any additional styling as needed */
}
</style>
