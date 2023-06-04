<template>
  <div id="app">
    <game
      :editorUsage="true"
      :useTheme="false"
      :canEmit="true"
      :showToast="true"
      @emitByNodes="emitByNodes"
      @onInit="EmitOnInit"
      @beforeNavigation="EmitBeforeNavigation"
      @afterNavigation="EmitAfterNavigation"
      ref="gameRef"
    />
    <div class="box"><a @click="getPlayerData()">Get data user </a><br /></div>
    <div class="box"><a @click="getTabData()">Get data tab</a><br /></div>
    <div class="box"><a @click="setStart()">set start</a><br /></div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

import testMarta from "./cose/test.json";
import defaultIndexMedia from "./cose/media/indexMedia.json";

export default ({
  name: "ServeDev",
  // components: {
  //  TestStLibrarySample,
  // }
  data() {
    return {
    };
  },
  methods: {
    emitByNodes(params) {
      console.log("CIAOOOOONE!");
      console.log(params);
    },
    EmitOnInit() {
      console.log("INIT CIAOOONE!");
    },
    EmitBeforeNavigation() {
      console.log("NAVIGATION1");
    },
    EmitAfterNavigation() {
      console.log("NAVIGATION2");
    },
    getPlayerData() {
      let values = this.$refs.gameRef.getPlayerValues();
      console.log(values);
    },
    getTabData() {
      let values = this.$refs.gameRef.getCurrentNodesValues();
      console.log(values);
    },
    setStart() {
      this.$refs.gameRef.setStartNode(1);
    },
  },
});
</script>
