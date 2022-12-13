<template>
  <div v-if="stylesObj" style="dispaly: contents">
    <div
      v-if="stylesObj.iconMultipleArrow['type']"
      :class="{ 'use-active-item': svgDataActive }"
      class="sg1-chose-item"
      :style="{
        ...stylesObj.commonFontFamily,
        ...stylesObj.fontWeightListSelected,
        ...stylesObj.fontColor,
        ...stylesObj.fontSize1,
      }"
    >
      <div
        v-if="svgData"
        :class="'type-' + stylesObj.iconMultipleArrow['type']"
        class="sg1-icon-wrapper"
        :style="{
          ...stylesObj.commonFontFamily,
          ...stylesObj.fontWeightListSelected,
          ...stylesObj.fontColor,
          ...stylesObj.fontSize1,
        }"
      >
        <div
          class="sg1-svg-wraper"
          :style="{ minWidth: stylesObj.iconMultipleArrow['size'] }"
          v-html="svgData"
        ></div>
        <div
          v-if="svgDataActive"
          class="sg1-svg-hover-wraper"
          :style="{ minWidth: stylesObj.iconMultipleArrow['size'] }"
          v-html="svgDataActive"
        ></div>
      </div>
      <div
        v-else
        :class="'sg1-type-' + stylesObj.iconMultipleArrow['type']"
        :style="{
          ...stylesObj.commonFontFamily,
          ...stylesObj.fontWeightListSelected,
          ...stylesObj.fontColor,
          ...stylesObj.fontSize1,
        }"
      >
        {{ indexListText }}
      </div>
      <span v-html="text"></span>
    </div>
    <div
      v-else
      class="sg1-chose-item"
      :style="{
        ...stylesObj.commonFontFamily,
        ...stylesObj.fontWeightListSelected,
        ...stylesObj.fontColor,
        ...stylesObj.fontSize1,
      }"
    >
      <span v-html="text"></span>
    </div>
  </div>
  <div v-else class="sg1-chose-item">
    <div class="list-item"></div>
    <span v-html="text"></span>
  </div>
</template>

<script>
import choseTabHexagon from "../svg/choseTabHexagon.js";
import choseTabHexagonActive from "../svg/choseTabHexagonActive.js";

import choseTabSketch1 from "../svg/choseTabSketch1.js";
import choseTabSketch2 from "../svg/choseTabSketch1.js";
import choseTabSketch3 from "../svg/choseTabSketch1.js";
import choseTabSketch4 from "../svg/choseTabSketch1.js";
import choseTabSketch5 from "../svg/choseTabSketch1.js";
import choseTabSketchActive from "../svg/choseTabSketchActive.js";

import choseTabMinimal from "../svg/choseTabMinimal.js";

import svgColorChange from "../functions/svgColorChange.js";

let NextTab = {
  name: "boxNarration",
  components: {},
  props: {
    stylesObj: {},
    index: {},
    text: {},
  },
  data: function () {
    return {
      svgData: false,
      svgDataActive: false,
      indexListText: false,
    };
  },
  watch: {
    stylesObj: {
      handler() {
        this.init();
      },
      deep: true,
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (this.stylesObj) {
        if (this.stylesObj.iconMultipleArrow["type"]) {
          let stringName = this.stylesObj.iconMultipleArrow["type"];

          if (stringName == "letter" || stringName == "number") {
            this.svgData = false;
            this.svgDataActive = false;
            if (stringName == "letter") {
              let alphabet = [
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "j",
                "k",
                "l",
                "m",
                "n",
                "o",
                "p",
                "q",
                "r",
                "s",
                "t",
                "u",
                "v",
                "w",
                "x",
                "y",
                "z",
              ];
              this.indexListText = alphabet[this.index];
            } else {
              this.indexListText = this.index + 1 + ".";
            }
          } else {
            this.indexListText = false;
            this.initSvg();
          }
        }
      }
    },
    initSvg() {
      this.svgDataActive = false;

      let stringName = this.stylesObj.iconMultipleArrow["type"];
      let svgString;
      let listElement;

      switch (stringName) {
        case "sketch":
          listElement = [
            choseTabSketch1,
            choseTabSketch2,
            choseTabSketch3,
            choseTabSketch4,
            choseTabSketch5,
          ];
          this.initSvgActive(choseTabSketchActive);
          break;
        case "hexagon":
          listElement = [choseTabHexagon];
          this.initSvgActive(choseTabHexagonActive);
          break;
        case "minimal1":
          listElement = [choseTabMinimal];
          this.initSvgActive(false);
        default:
          break;
      }

      svgString = listElement[Math.floor(Math.random() * listElement.length)];

      this.svgData = svgColorChange(
        svgString,
        this.stylesObj.iconMultipleArrow["color"]
      );
    },

    initSvgActive(activeSvgString) {
      if (activeSvgString) {
        this.svgDataActive = svgColorChange(
          activeSvgString,
          this.stylesObj.iconMultipleArrow["color"]
        );
      } else {
        this.svgDataActive = false;
      }
    },
  },
};
export default NextTab;
</script>
<style scoped>
.sg1-chose-item {
  display: inline-flex;
  margin-bottom: 1em;
  max-width: 100%;
  width: auto;
  cursor: pointer;
}
.sg1-icon-wrapper {
  margin-right: 0.5em;
  position: relative;
}
.sg1-svg-hover-wraper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.sg1-chose-item {
  font-size: inherit;
  font-family: inherit;
}

.sg1-chose-item,
.sg1-svg-wraper,
.sg1-svg-hover-wraper {
  transition: opacity 0.35s;
  transition-timing-function: ease-out;
}

.sg1-chose-item:hover {
  opacity: 0.75;
}

.sg1-chose-item:hover .sg1-svg-hover-wraper {
  opacity: 1;
}

.sg1-chose-item.use-active-item:hover .sg1-svg-wraper {
  opacity: 0;
}

.sg1-type-number,
.sg1-type-letter {
  margin-right: 0.5em;
}
</style>
