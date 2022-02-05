<template>
  <div v-bind:class="{ red: isOn, notRed: !isOn }">
    
  </div>
</template>

<script>
export default {
  name: 'Red',
  props: {
      isOn: Boolean
  },
}
</script>

<style scoped>
 .red {
     background-color: #fa2424;
     height: 10rem;
     width: 10rem;
     border-radius: 50%;
 }
 .notRed {
     background-color: #fa242444;
     height: 10rem;
     width: 10rem;
     border-radius: 50%;
 }
</style>