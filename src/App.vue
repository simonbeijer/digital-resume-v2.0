<template>
  <div id="app" ref="appContainer">
    <CustomSidebar :sidebarSections="sidebarSections" :scrollTop="scrollTop" :firstSectionHeight="firstSectionHeight"  @sectionMounted="scrollToSection"/>
    <div class="main-content">
      <HeroImage @displayProfile="scrollToSection" ref="heroImage" />
      <Profile  id="Profile" />
      <Skills  id="Skills" />
      <Experience id="Experience" />
      <Education id="Education" />
      <Projects id="Projects" />
      <Contact  id="Contact" />
    </div>
  </div>
</template>

<script>
import CustomSidebar from './components/CustomSidebar.vue';
import HeroImage from './components/HeroImage.vue';
import Profile from './components/Profile.vue';
import Experience from './components/Experience.vue';
import Skills from './components/Skills.vue';
import Education from './components/Education.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';

export default {
  name: 'App',
  components: {
    CustomSidebar,
    HeroImage,
    Profile,
    Experience,
    Skills,
    Education,
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
      this.updateFirstSectionHeight();
    },
    scrollToSection(sectionId) {

      console.log(sectionId)
      if(sectionId == 'About') {
        sectionId = 'Profile'
      }
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
};
</script>


<style>
.sketchy {
  padding: 1rem 2rem;
  display: inline-block;
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
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(0.5deg);
  border-radius: 8px;
}

/* THEME COLORS */


.sketchy {
  border: 3px solid #4f4f4f;
}
.sketchy::before {
  border: 2px solid #353535;
}
/* HERO IMAGE BUTTON */
.button-div {
  /* background: rgb(0 0 0 / 20%); */
}

/* SIDEBAR COLORS */
.sidebar-color {
  background: rgb(192, 198, 195);
}
.sidebar li {
  background: rgb(239, 247, 244);
}
.sidebar li a {
  color: rgb(39, 40, 39);
  font-weight: 600;
}
/* BACKGROUND SECTIONS */
#Profile {
  background-color: rgb(255, 255, 255) !important;
}
#Skills {
  background-color: #ececec !important;
}
#Experience{
  background-color: #ececec !important;
}
#Education {
  background-color: #ececec !important;
}
#Projects {
  background-color: #ececec !important;
}
#Contact {
  background-color: rgb(255, 255, 255) !important;
}


@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

html, body {
  font-family: 'Ubuntu', sans-serif;
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.main-content {
  width: 100%;
  position: relative;

}


</style>
