<!-- Skills.vue -->
<template>
  <div id="skills" style="width: 100%; background-color: grey;">
    <div :class="width < 600 ? 'col-3-div' : 'col-3-div max-width'" style="padding: 4rem 20%;">
      <h2 style="text-align: center;">Skills</h2>
      <div v-for="(content, index) in skillArr" :key="index" class="abilityDiv">
        <div v-if="!content.title" :style="{ width: content.size, backgroundColor: 'whitesmoke', display: 'flex', alignItems: 'center' }" class="skill-all">
          <p>{{ content.name }}</p>
        </div>
        <div v-else class="display-flex stripes" style="flex: 1; background-color: whitesmoke;">
          <p style="font-size: 1.2rem; margin: 0.6rem 0; font-weight: 600; color: #babbba;">{{ content.name }}</p>
        </div>
        <div v-if="!content.title" :style="{ paddingRight: '1rem', backgroundColor: content.size === '100%' ? 'whitesmoke' : 'none', flex: content.size === '100%' ? 1 : 'auto' }">
          <p style="padding: 0.1rem 0;">{{ content.size }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skillArr: [
        { name: "SKILLS", size: "100%", title: true },
        { name: "HTML5", size: "95%" },
        { name: "CSS3", size: "80%" },
        { name: "Vue", size: "80%" },
        { name: "JavaScript", size: "75%" },
        { name: "React", size: "75%" },
        { name: "PHP", size: "75%" },
        { name: "SQL", size: "70%" },
        { name: "TypeScript", size: "65%" },
        { name: "ReactNative", size: "60%" },
        { name: "MongoDB", size: "60%" },
        { name: "Redux", size: "50%" },
        { name: "Angular", size: "40%" },
        { name: "TOOLS", size: "100%", title: true },
        { name: "Mac", size: "95%" },
        { name: "Windows", size: "90%" },
        { name: "Github", size: "80%" },
        { name: "VScode", size: "80%" },
        { name: "LANGUAGES & METHODS", size: "100%", title: true },
        { name: "Swedish", size: "100%" },
        { name: "English", size: "90%" },
        { name: "Scrum", size: "80%" },
      ],
      width: window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
    },
  },
};
</script>

<style scoped>
.col-3-div {
  background-color: #a7c4b5;
}
.display-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.stripes {
  background: repeating-linear-gradient(
    -55deg,
    rgba(34, 34, 34, 0.8),
    rgba(34, 34, 34, 0.8) 10px,
    rgba(51, 51, 51, 0.8) 10px,
    rgba(51, 51, 51, 0.8) 20px
  );
}
.skill-all {
  display: flex;
  align-items: center;
}
.abilityDiv {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
}
</style>
