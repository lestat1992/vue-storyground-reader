<!--METHODS-->
<template>
  <div id="app">
    <game ref="gameRef" />
  </div>
  <div class="btns-box">
    <button @click="setNewData()" id="btn-set-info">Set new data!</button>
    <button @click="retriveData()" id="btn-info">Give me player data!</button>
  </div>
</template>
<style>
.btns-box {
  position: fixed;
  right: 15px;
  bottom: 15px;
}

button {
  font-size: 18px;
  font-family: monospace;
  margin-right: 10px;
}
</style>

<script>
export default {
  data() {},
  methods: {
    setNewData() {
      this.$refs.gameRef.setPlayerValues([
        { randomUslessValue: Math.floor(Math.random() * 100) },
      ]);
    },
    retriveData() {
      alert(JSON.stringify(this.$refs.gameRef.getPlayerValues()));
    },
  },
};
</script>
