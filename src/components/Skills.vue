<template>
  <div id="skills" class="skills-container">
    <h2 class="skills-heading">SKILLS</h2>
    <div :class="{'col-3-div': width < 600, 'max-width': width >= 600}" class="skills-wrapper sketchy">
      <div v-for="(content, index) in skillArr" :key="index" class="skill-item">
        <div v-if="content.title" class="title-item">
          <p>{{ content.name }}</p>
        </div>
        <div v-else class="ability-item">
          <div class="ability-name">
            <p>{{ content.name }}</p>
          </div>
          <div class="ability-bar" :style="{ width: content.size }">
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
        { name: "Docker", size: "65%" },
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
  background-color: rgb(208, 208, 208);
  padding: 4rem 0;
}

.skills-heading {
  text-align: center;
  margin-bottom: 2rem;
}

.skills-wrapper {
  width: 900px;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  background-color: #a7c4b5;
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
