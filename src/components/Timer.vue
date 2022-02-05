<template>
  <div class='absolute'>
    {{time}}
  </div>
</template>

<script>
import router from '../router/index.js'

export default {
  name: 'TrafficLight',
  components: {
  },
  props: {
      timeLeft: Number,
      currentScreen: String,
      previousScreen: String
  },
  data: function() {
      return {
          time: (localStorage.getItem("timeLeft") != null && localStorage.getItem("timeLeft") > 0 && this.currentScreen == localStorage.getItem("currentScreen")) ? localStorage.getItem("timeLeft") : this.timeLeft ,
          blinking: false,
          intervalForBlinks: String,
          globalInterval: String
      }
  },
  methods: {
      changeTime() {
          this.time--;
          localStorage.setItem("timeLeft", this.time);
          if (this.timeLeft > 3 && this.time === 3) {
              this.intervalForBlinks = setInterval(this.changeClass, 500);
          }
          if (this.time === 0) {
              clearInterval(this.int);
              clearInterval(this.globalInterval);
              switch(this.currentScreen) {
                case "red":
                    localStorage.setItem('previousScreen', 'red');
                      router.push('/yellow');
                      break;
                case "yellow":
                      if (this.previousScreen !== null) {
                          if (this.previousScreen === "red") {
                              router.push('/green');
                          } else {
                              router.push('/red');
                          }
                      } else {
                          router.push('/green');
                      } 
                      break;
                case "green":
                    localStorage.setItem('previousScreen', 'green');
                      router.push('/yellow');
                      break;
              }
          }
      },
      changeClass() {
          this.$emit('changeColor', false);
      }
  },
    mounted: function() {
    this.globalInterval = setInterval(this.changeTime, 1000);
    localStorage.setItem("currentScreen", this.currentScreen);
  },
    unmounted: function() {
        localStorage.removeItem("timeLeft");
    },
    renderTriggered: function() {
        localStorage.removeItem("timeLeft");
    }


}
</script>

<style scoped>
.absolute {
    position: absolute;
    top: 5%;
    right: 5%;
    font-size: 3rem;
}
</style>