<template>
  <div v-bind:class="{ yellow: isOn, notYellow: !isOn }">
    
  </div>
</template>

<script>
export default {
  name: 'Yellow',
  props: {
      isOn: Boolean
  }
}
</script>

<style scoped>
 .yellow {
     background-color: #d7e41f;
     height: 10rem;
     width: 10rem;
     border-radius: 50%;
 }
 .notYellow {
     background-color: #d7e41f56;
     height: 10rem;
     width: 10rem;
     border-radius: 50%;
 }
</style>