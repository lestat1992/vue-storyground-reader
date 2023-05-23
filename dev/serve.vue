<!--METHODS-->
<template>
  <div id="app">
    <game ref="gameRef" />
  </div>
  <div class="btns-box">
    <button @click="setNewData()" id="btn-set-info">💀 Set HP to 1 !</button>
    <button @click="retriveData()" id="btn-info">
      📝 Give me player data!
    </button>
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
      let playerValues = this.$refs.gameRef.getPlayerValues();

      let hp = playerValues.find((el) => el.slug == "HP");
      hp.level = 1;

      this.$refs.gameRef.setPlayerValues(playerValues);
    },
    retriveData() {
      alert(JSON.stringify(this.$refs.gameRef.getPlayerValues()));
    },
  },
};
</script>
