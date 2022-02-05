<template>
  <TrafficLight v-bind:redIsOn = on />
  <Timer @changeColor="changeChildClass" v-bind:timeLeft="10" v-bind:currentScreen = color />
</template>

<script>
import TrafficLight from '../components/TrafficLight.vue'
import Timer from '../components/Timer.vue'

export default {
  name: 'RedColoredTrafficLight',
  components: {
    TrafficLight,
    Timer
  },
  data: () => {
    return {
      on: true,
      color: "red"
    }
  },
  methods: {
    changeChildClass() {
      this.on = !this.on;
    }
  },
}
</script>