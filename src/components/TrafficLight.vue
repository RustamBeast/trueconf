<template>
  <div class='column'>
    <Red v-bind:isOn = redIsOn />
    <Yellow v-bind:isOn = yellowIsOn />
    <Green v-bind:isOn = greenIsOn />
  </div>
</template>

<script>
import Red from './Red.vue'
import Yellow from './Yellow.vue'
import Green from './Green.vue'

export default {
  name: 'TrafficLight',
  components: {
    Red,
    Yellow,
    Green
  },
  props: {
    redIsOn: Boolean,
    yellowIsOn: Boolean,
    greenIsOn: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .column {
    width: 10rem;
    display: flex;
    flex-direction: column;  
    border: 5px solid #0a0a0a;
    border-radius: 3rem;
    gap: 3rem;
    padding: 1rem 1rem;
  }
</style>
