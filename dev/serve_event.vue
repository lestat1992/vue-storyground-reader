<!--event-->
<template>
  <div v-if="counter" class="counter">
    afterNavigation called {{ counter }} times
  </div>
  <div id="app">
    <game @afterNavigation="this.counter++" />
  </div>
</template>
<style>
.counter {
  font-size: 14px;
  font-family: monospace;
  padding: 14px;
  color: red;
  text-align: center;
}
</style>
<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
};
</script>
