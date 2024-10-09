<template>
    <section :id="id">
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
  