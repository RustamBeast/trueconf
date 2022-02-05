<template>
  <TrafficLight v-bind:yellowIsOn = on />
  <Timer @changeColor="changeChildClass" v-bind:timeLeft="3" v-bind:currentScreen=color v-bind:previousScreen=prev />
</template>

<script>
import TrafficLight from '../components/TrafficLight.vue'
import Timer from '../components/Timer.vue'

export default {
  name: 'YellowColoredTrafficLight',
  components: {
    TrafficLight,
    Timer
  },
  data: () => {
    return {
      on: true,
      color: "yellow",
      prev: localStorage.getItem("previousScreen")
    }
  },
  methods: {
    changeChildClass() {
      this.on = !this.on;
    }
  },
}
</script>