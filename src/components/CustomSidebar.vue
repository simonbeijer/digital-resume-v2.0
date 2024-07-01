<template>
  <div v-if="firstSectionHeight" class="sidebar sidebar-color" :style="{ marginTop: sidebarTop }" ref="sidebar">
    <ul>
      <li v-for="section in sidebarSections" :key="section">
        <a href="#" @click="selectSection(section)">{{ section }}</a>
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
    }
  },
  computed: {
    sidebarTop() {
      const halfwayPoint = this.firstSectionHeight / 1.4;
      let topPosition = this.firstSectionHeight;

      if(this.scrollTop > 0) {
        topPosition -= this.scrollTop;
      }
      if(this.scrollTop > halfwayPoint) {
        topPosition = this.firstSectionHeight - halfwayPoint
      }
      // if (this.scrollTop > halfwayPoint) {
      //   topPosition = halfwayPoint;
      // } else if (this.scrollTop > 0) {
      //   topPosition -= this.scrollTop + 203;
      // }
      console.clear();
      console.log("halfwayPoint", halfwayPoint)
      console.log("first section", this.firstSectionHeight)
      console.log("main scroll", this.scrollTop)
      console.log("topPosition sidebar", topPosition)
      return `${topPosition}px`;
    }
  },
  watch: {
    // sidebarTop(newValue, oldValue) {
    //   console.log("Top position changed:", newValue, oldValue);
    // }
  },
  methods: {
    selectSection(section) {
      // Handle section selection
      console.log(section);
    }
  }
};
</script>


<style scoped>
.sidebar {
  display: flex;
  position: fixed;
  left: 78vw;
  padding: 20px;
  z-index: 1000;
  transition: top 0.3s ease;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  
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
  color: rgb(212, 212, 212);
}

a:hover {
  color: #b7b7b7;
}
</style>
