<template>
  <div class="sidebar sidebar-color" :style="{ marginTop: setYPostion, marginLeft: getXPostion }" ref="sidebar">
    <ul>
      <li v-for="section in sidebarSections" :key="section" @click="selectSection(section)" class="hover">
        <a href="#">{{ section }}</a>
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
/* .sidebar::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 1px;
  height: 15px; 
  background-color: black; 
  transform: skewY(-3deg); 
  transform-origin: top left;
  z-index: 0; 
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
} */


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
  /* color: rgb(212, 212, 212); */
}

/* a:hover {
  color: #b7b7b7;
} */
</style>
