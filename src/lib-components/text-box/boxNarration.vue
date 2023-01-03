<template>
  <div class="sg1-box-narration">
    <div class="sg1-tab-results" :style="stylesObj.tabResultsMaxHeight">
      <div
        v-for="(tab, index) in currentTabsReordered"
        :key="tab.id"
        :class="
          currentTabs.length == 1
            ? 'sg1-label-description'
            : 'sg1-label-multiple-chose'
        "
      >
        <div
          v-if="currentTabs.length == 1"
          :style="{
            ...stylesObj.commonFontFamily,
            ...stylesObj.fontWeightListSelected,
            ...stylesObj.fontColor,
            ...stylesObj.fontSize1,
            ...stylesObj.paddingBottomNextTab,
          }"
          v-html="fixText(tab.text[lang])"
        ></div>
        <div
          v-else
          :style="{
            ...stylesObj.commonFontFamily,
            ...stylesObj.fontWeightListSelected,
            ...stylesObj.fontColor,
            ...stylesObj.fontSize1,
          }"
        >
          <ChooseTab
            :index="index"
            :text="fixText(tab.text[lang])"
            :stylesObj="stylesObj"
            @click="emitReedBeams3(tab.id)"
          />
        </div>
      </div>

      <div
        v-for="(tab, index) in nextTabsChoseReordered"
        :key="tab.id"
        :class="
          nextTabsChose.length == 1
            ? 'sg1-label-description'
            : 'sg1-label-multiple-chose'
        "
      >
        <div v-if="tab.id">
          <ChooseTab
            :index="index"
            :text="fixText(tab.text[lang])"
            :stylesObj="stylesObj"
            @click="emitReedBeams3(tab.id)"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="currentTabs.length == 1 && nextTabsChose.length == 0"
    class="sg1-single-beem-foward-box"
    :style="stylesObj.paddingTopNextTab"
  >
    <NextTab
      v-if="stylesObj"
      :stylesObj="stylesObj"
      @click="emitReedBeams3(currentTabs[0].id)"
    />
    <div
      v-else
      @click="emitReedBeams3(currentTabs[0].id)"
      class="sg1-single-beem-icon"
    ></div>
  </div>
</template>

<script>
import NextTab from "../navigation-elements/NextTab";
import ChooseTab from "../navigation-elements/ChooseTab";

import deepCopy from "../functions/deepCopy.js";
import fixText from "../functions/fixText.js";

function sortChose(currentTabs) {
  if (currentTabs.length == 1) {
    return currentTabs;
  } else {
    let newOrder = [];
    let orderList = [];

    currentTabs.forEach((el) => {
      orderList.push(el.x);
    });

    orderList.sort(function (a, b) {
      return a - b;
    });

    orderList.forEach((el1) => {
      currentTabs.forEach((el2) => {
        if (el1 == el2.x) {
          newOrder.push(el2);
        }
      });
    });

    return newOrder;
  }
}

let boxNarration = {
  name: "boxNarration",
  components: {
    NextTab: NextTab,
    ChooseTab: ChooseTab,
  },
  props: {
    currentTabs: {},
    nextTabsChose: {},
    lang: {},
    stylesObj: {},
  },
  emits: ["emitReedBeams2"],
  computed: {
    currentTabsReordered: function () {
      return sortChose(this.currentTabs);
    },
    nextTabsChoseReordered: function () {
      return sortChose(this.nextTabsChose);
    },
  },
  methods: {
    emitReedBeams3(id) {
      this.$emit("emitReedBeams2", id);
    },
    fixText(text) {
      return fixText(text);
    },
  },
};

export default boxNarration;
</script>
<style scoped>
.sg1-tab-results {
  flex-grow: 1;
  overflow: auto;
}
.sg1-single-beem-foward-box {
  display: flex;
  justify-content: center;
}
.sg1-box-narration {
  position: relative;
  z-index: 10;
  max-height: inherit;
  min-height: inherit;
  overflow-y: auto;
  flex-grow: 1;
}
</style>
