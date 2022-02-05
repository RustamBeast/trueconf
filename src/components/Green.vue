<template>
  <div v-bind:class="{ green: isOn, notGreen: !isOn }">
    
  </div>
</template>

<script>
export default {
  name: 'Green',
  props: {
      isOn: Boolean
  }
}
</script>

<style scoped>
 .green {
     background-color: #2bfa24;
     height: 10rem;
     width: 10rem;
     border-radius: 50%;
 }
 .notGreen {
     background-color: #2bfa2454;
     height: 10rem;
     width: 10rem;
     border-radius: 50%;
 }
</style>