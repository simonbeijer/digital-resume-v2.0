<template>
  <div id="app" ref="appContainer">
    <CustomSidebar v-if="displaySidebar" :sidebarSections="sidebarSections" :scrollTop="scrollTop"
      :firstSectionHeight="firstSectionHeight" @sectionMounted="scrollToSection" :getXPostion="sidebarXPosition" />
    <div class="main-content">
      <HeroImage @displayProfile="scrollToSection" ref="heroImage" :buttonPostion="sidebarXPosition"
        :showButton="displaySidebar" />
      <Section id="Profile">
        <Profile />
      </Section>
      <Section id="Skills">
        <Skills />
      </Section>
      <Section id="Experience">
        <Experience />
      </Section>
      <Section id="Education">
        <Education />
      </Section>
      <Section id="Projects">
        <Projects />
      </Section>
      <Section id="Contact">
        <Contact />
      </Section>
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
import Section from './components/Sections.vue';

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
    Section
  },
  data() {
    return {
      sidebarSections: ['Profile', 'Skills', 'Experience', 'Education', 'Projects', 'Contact'],
      scrollTop: 0,
      firstSectionHeight: 0,
      sidebarXPosition: "0px",
      displaySidebar: true,
    };
  },
  mounted() {
    this.updateFirstSectionHeight();
    this.setXPostionSidebar();
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
      this.setXPostionSidebar();
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    setXPostionSidebar() {
      const screenWidth = window.innerWidth;
      const sidebarWidth = 156;
      let dynamicRatio;

      if (screenWidth <= 1400) {
        this.displaySidebar = false;
        return
      } else {
        this.displaySidebar = true;
      }

      if (screenWidth >= 2000) {
        dynamicRatio = 0.80;
      } else if (screenWidth >= 1700) {
        dynamicRatio = 0.90;
      } else if (screenWidth >= 1600) {
        dynamicRatio = 0.95;
      } else if (screenWidth >= 1400) {
        dynamicRatio = 0.97;
      }

      let xPosition = (screenWidth - sidebarWidth) * dynamicRatio;

      this.sidebarXPosition = `${Math.max(0, xPosition)}px`;
    }
  },

};

</script>


<style>

/* TIMELNE */

.timeline {
  width: 50%;
  border-right: #828181 solid 3px;
  position: relative;
  padding-right: 2rem;
}

.timeline h3 {
  color: #000000;
  font-weight: 600;
  margin-bottom: 0.5rem;
  padding-top: 32px;
}

.circle {
  width: 18px;
  height: 18px;
  background: linear-gradient(135deg, #72a0a6 60%, #64868a 100%);
  border: 3px solid #fff;
  border-radius: 50%;
  position: absolute;
  right: -14px;
  top: 50px;
  box-shadow: 0 0 0 2px #828181;
}

.sketchy {
  padding: 1rem;
  display: inline-block;
  font-size: 1rem;
  border-radius: 8px;
  letter-spacing: 0.2ch;
  background: #ffffff;
  position: relative;
  margin-bottom: 2rem;
  box-shadow: 0 0 5px rgba(232, 231, 231, 0.651);
  box-shadow: 0 5px 10px #e6e4e4;
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
  pointer-events: none;
}

/* THEME COLORS */

.theme-bg-color {
  background: #64868a;
}

.theme-color {
  color:#72a0a6;
  font-size: 18px;
}

.section-header {
  font-size: 48px;
  text-align: center;
  text-transform: uppercase;
  font-family: "Condiment", handwriting;
  transform: skewX(24deg);
}


.sketchy {
  border: 3px solid #ececec;
}
.sketchy::before {
  border: 2px solid rgb(239, 247, 244);
}
/* HERO IMAGE BUTTON */

/* SIDEBAR COLORS */
.sidebar-color {
  background-image: url('assets/bg13.jpg');
  -webkit-filter: grayscale(50%);
  background-size: cover;
  background-position: center;
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

#Experience {
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
@import url('https://fonts.googleapis.com/css2?family=Condiment');

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
  flex-direction: column;
  overflow-y: auto;
}

.main-content {
  width: 100%;
  position: relative;

}
</style>
