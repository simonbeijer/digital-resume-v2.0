<template>
  <div id="profile" class="content">
    <div :class="[width < 600 ? 'col-1-div display-flex' : 'col-1-div display-flex max-width']">
      <div style="padding-top: 2rem">
        <h1>ABOUT</h1>
      </div>
      <div class="about-div display-flex" style="padding: 2rem">
        <div style="text-align: center">
          <p>Hi! My name is Simon and I'm a Front-End Web Developer 👨🏼‍💻</p>
          <p>Right now i'm looking for a new jobb in Front-End development.</p>
          <p>I have 3 years of experiance from my previus work at <a href="www.keeros.se">Keeeros AB</a>, and im now
            looking for a new .</p>
          <p>
            In my spare time, I like to work out, sit at my computer, and create music.
          </p>
          <p>
            I enjoy creating alluring websites, and I'm always looking to improve.
          </p>
        </div>
      </div>
      <div class="details">
        <div style="padding-left: 3rem">
          <h3 style="margin-left: -10px">Details</h3>
          <h4>Name:</h4>
          <p>Simon Beijer</p>
          <h4>Age:</h4>
          <p>33</p>
          <h4>Location:</h4>
          <p>
            Gothenburg,<br> Sweden
            </p>
            </div>
            <div class="img-div">
              <img alt="simon" src="../assets/sb2.png">
            </div>
      </div>
    
    </div>
  </div>
</template>

<script>


export default {
  name: 'Profile',
  data() {
    return {
      width: window.innerWidth
    };
  },
  mounted() {
    window.addEventListener('resize', this.updateWidth);
    this.$emit('sectionMounted', 'Profile');
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWidth);
  },
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    }
  }
};
</script>

<style scoped>
.details {
  display: flex;

}
.content h1 {
  font-size: 2.4rem;
}
#profile {
  position: relative;
  background-color: #ffffff;
  }
  
  #profile::before {
  background-color: #ffffff;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 115px;
  background-color: inherit;
  transform: skewY(-3deg);
  transform-origin: top left;
  z-index: 0;
}

.col-1-div {
  flex-direction: column;
  /* background-color: #00000012; */
}

.col-1-div h4 {
  margin: 0.6rem 0rem;
}
.img-div {
  display: flex;
  justify-content: end;
}
.col-1-div {
  grid-area: img;
  display: flex;
  align-items: center;
  justify-content: center;
}

.col-1-div img {
  height: auto;
  width: 60%;
}
</style>
