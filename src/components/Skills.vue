<template>
  <div id="skills" class="skills-container">
    <div :class="{ 'col-3-div': width < 600, 'max-width': width >= 600 }" class="skills-wrapper ">
      <div v-for="(content, index) in skillArr" :key="index" class="skill-item">
        <div v-if="content.title" class="title-item">
          <p>{{ content.name }}</p>
        </div>
        <div v-else class="ability-item">
          <div class="ability-name">
            <p>{{ content.name }}</p>
          </div>
          <div class="ability-bar theme-bg-color" :style="{ width: content.size }">
            <span class="ability-label">{{ content.size }}</span>
          </div>
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
        { name: "WEB TECHNOLOGIES", size: "100%", title: true },
        { name: "HTML5", size: "95%" },
        { name: "CSS3", size: "80%" },
        { name: "JavaScript", size: "75%" },
        { name: "PHP", size: "75%" },
        { name: "SQL", size: "70%" },
        { name: "ReactNative", size: "60%" },
        { name: "MongoDB", size: "60%" },
        { name: "TypeScript", size: "60%" },
        { name: "Jest", size: "55%" },
        { name: "Redux", size: "50%" },
        { name: "FRAMEWORKS", size: "100%", title: true },
        { name: "React", size: "80%" },
        { name: "Vue", size: "80%" },
        { name: "Yii", size: "70%" },
        { name: "Lavavel", size: "60%" },
        { name: "Next.js", size: "50%" },
        { name: "TOOLS", size: "100%", title: true },
        { name: "Mac", size: "95%" },
        { name: "Windows", size: "90%" },
        { name: "Github", size: "90%" },
        { name: "VScode", size: "80%" },
        { name: "Docker", size: "75%" },
        { name: "Figma", size: "65%" },
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
.skills-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  margin-left: 20px;
}

.skills-heading {
  text-align: center;
  margin-bottom: 2rem;
}

.skills-wrapper {
  width: 850px;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px #e6e4e4;
}

.skill-item {
  margin-bottom: 1rem;
}

.title-item {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.ability-item {
  margin-bottom: 1rem;
}

.ability-name {
  margin-bottom: 0.5rem;
}

.ability-bar {
  height: 12px;
  border-radius: 6px;
  position: relative;
}

.ability-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
}
</style>
