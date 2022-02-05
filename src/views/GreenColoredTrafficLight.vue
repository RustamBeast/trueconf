<template>
  <TrafficLight v-bind:greenIsOn = on />
  <Timer @changeColor="changeChildClass" v-bind:timeLeft="15" v-bind:currentScreen=color />
</template>

<script>
import TrafficLight from '../components/TrafficLight.vue'
import Timer from '../components/Timer.vue'

export default {
  name: 'GreenColoredTrafficLight',
  components: {
    TrafficLight,
    Timer
  },
  data: () => {
    return {
      on: true,
      color: "green"
    }
  },
  methods: {
    changeChildClass() {
      this.on = !this.on;
    }
  },
}
</script>