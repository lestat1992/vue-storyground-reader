# [vue storyground reader](https://storygroundeditor.com) &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

**vue storyground reader** is a package that includes vue components created in order to read the stories created with [storygroundeditor.com](https://storygroundeditor.com/).
If you’re interested in a solution that works **without Vue**, we recommend [Js storyground reader package](https://www.npmjs.com/package/vue-storyground-reader).
To see the docs [click here](https://storygroundeditor.com/devs/).

Here's your first example to get you started:

```vue
<template>
  <div id="app">
    <game :gameData="jsonStory" />
  </div>
</template>
<script>
import { game } from "vue-storyground-reader";
import jsonStory from "./jsonStory.json";

export default {
  components: {
    game,
  },
  data() {
    return {
      jsonStory: jsonStory,
    };
  },
};
</script>
```

### License

js storyground reader is [MIT licensed](./LICENSE).
