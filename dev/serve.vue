<!--TEST BASE-->
<template>
  <div id="app">
    <game :gameData="jsonStory" />
  </div>
</template>
<script>
import jsonStory from "./jsonStory.json";

export default {
  data() {
    return {
      jsonStory: jsonStory,
    };
  },
};
</script>
