<template>
    <section :id="id">
      <h2 class="section-header">{{id}}</h2>
      <slot></slot>
    </section>
  </template>
  
  <script>
  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  section {
    padding: 2rem;
  }
  </style>
  