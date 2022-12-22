<script>
import { defineComponent } from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
// import { TestStLibrarySample } from '@/entry.esm';

import testMarta from "./cose/TestMarta.json";
import defaultIndexMedia from "./cose/media/indexMedia.json";

export default defineComponent({
  name: "ServeDev",
  // components: {
  //  TestStLibrarySample,
  // }
  data() {
    return {
      testMarta: testMarta,
      defaultIndexMedia: defaultIndexMedia,
    };
  },
  methods: {
    params(params) {
      console.log("CIAOOOOONE!");
      //console.log(params);
    },
  },
});
</script>

<template>
  <div id="app">
    <game
      :gameData="testMarta"
      :pathMediaDir="'http://192.168.1.9:8000/media'"
      :indexMedia="defaultIndexMedia"
      :editorUsage="true"
      :useTheme="false"
      :canEmit="true"
      :showToast="true"
      @functionToEmit="params"
    />
  </div>
</template>
