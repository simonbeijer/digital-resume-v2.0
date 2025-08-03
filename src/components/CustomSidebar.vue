<template>
  <div class="sidebar sidebar-color" :style="{ marginTop: setYPostion, marginLeft: getXPostion }" ref="sidebar">
    <ul>
      <li v-for="section in sidebarSections" :key="section" @click="selectSection(section)" class="hover">
        <a href="#" @click.prevent>{{ section }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CustomSidebar',
  props: {
    sidebarSections: {
      type: Array,
      required: true
    },
    scrollTop: {
      type: Number,
      default: 0
    },
    firstSectionHeight: {
      type: Number,
      default: 0
    },
    getXPostion:{
      type: String,
      default: "0px",
    },
  },
  computed: {
    setYPostion() {
      const halfwayPoint = this.firstSectionHeight / 1.4;
      let xPosition = this.firstSectionHeight;

      if(this.scrollTop > 0) {
        xPosition -= this.scrollTop;
      }
      if(this.scrollTop > halfwayPoint) {
        xPosition = this.firstSectionHeight - halfwayPoint
      }
      return `${xPosition}px`;
    },
  },
  methods: {
    selectSection(section) {
      this.$emit('sectionMounted', section);
      
      const sectionPath = section.toLowerCase();
      window.history.pushState(null, '', `/digital-resume-v2.0/${sectionPath}`);
    }
  }
};
</script>


<style scoped>
.sidebar {
  display: flex;
  position: fixed;
  padding: 20px;
  z-index: 1000;
  transition: top 0.3s ease;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  
}
li {
  padding: 10px;
  transition: transform 0.3s ease;
}

li:hover {
  transform: scale(1.02);
  cursor: pointer;
}

li a {
  text-decoration: none;
  display: block;
}


ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

li {
  margin-bottom: 3px;
  text-align: center;
  flex-grow: 1;
  padding: 25px 10px;
  font-size: 18px;
  background: rgba(106, 106, 106, 0.805);
}

ul li:first-child {
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

ul li:last-child {
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
}

a {
  text-decoration: none;
}
</style>
