<template>
    <div class="projects">
      <!-- Your projects content goes here -->
      <h2>Projects</h2>
      <p>This is the projects section</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Projects',
    mounted() {
  this.$emit('sectionMounted', 'Projects');
}

  };
  </script>
  
  <style scoped>
  /* Add styles for projects section */
  .projects {
    /* Add your projects section styles here */
  }
  </style>
  