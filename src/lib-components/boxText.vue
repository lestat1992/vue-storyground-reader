<template>
  <div
    class="sg1-wrapper-box-text"
    :style="{ ...stylesObj.boxText, ...stylesObj.boxTextPadding }"
  >
    <BgBoxText v-if="stylesObj" :stylesObj="stylesObj" />
    <boxnarration
      v-if="
        narrationBox == 'default' ||
        narrationBox == 'descriptions' ||
        narrationBox == 'chose'
      "
      :lang="lang"
      :current-tabs="currentTabs"
      :nextTabsChose="nextTabsChose"
      :stylesObj="stylesObj"
      @emitReedBeams2="emitReedBeams1"
    />
    <gameEnd
      v-if="narrationBox == 'end'"
      :lang="lang"
      :current-tabs="currentTabs"
      :stylesObj="stylesObj"
      @emitReedBeams2="emitReedBeams1"
    />
    <gameOver
      v-if="narrationBox == 'game over'"
      :lang="lang"
      :current-tabs="currentTabs"
      :stylesObj="stylesObj"
      @emitReedBeams2="emitReedBeams1"
      @gameIntentLoad3="gameIntentLoad2"
    />
  </div>
</template>
<script>
import boxNarration from "./text-box/boxNarration.vue";
import boxNarrationGameEnd from "./text-box/boxNarrationGameEnd.vue";
import boxNarrationGameOver from "./text-box/boxNarrationGameOver.vue";
import BgBoxText from "./utility/BgBoxText.vue";

let boxText = {
  name: "boxText",
  components: {
    boxnarration: boxNarration,
    gameEnd: boxNarrationGameEnd,
    gameOver: boxNarrationGameOver,
    BgBoxText: BgBoxText,
  },
  props: {
    narrationBox: {},
    lang: {},
    currentTabs: {},
    nextTabsChose: {},
    reedBeams: {},
    stylesObj: {},
    gameIntentLoad: {},
  },
  methods: {
    emitReedBeams1(id) {
      this.$emit("reedBeams", id);
    },
    gameIntentLoad2() {
      this.$emit("gameIntentLoad");
    },
  },
};

export default boxText;
</script>
<style scoped>
.sg1-wrapper-box-text {
  display: flex;
  flex-direction: column;
  position: relative;
  flex-grow: 1;
  height: auto;
}
</style>
