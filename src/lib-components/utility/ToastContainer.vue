<template>
  <div v-if="toasts.length" class="sg1-toast-container">
    <div
      v-for="toast in toasts"
      :key="toast.id"
      :class="{ 'sg1-active': toast.expanded }"
      class="sg1-toast"
    >
      <div class="sg1-head">
        <span class="sg1-title" v-html="toast.title"></span>
        <div @click="expandToast(toast.id)" class="sg1-expand"></div>
        <div @click="removeToast(toast.id)" class="sg1-close-btn"></div>
      </div>
      <div class="sg1-content">
        <div class="sg1-wrapper-pre">
          <pre>{{ toast.content }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let ToastContainer = {
  name: "ToastContainer",
  data() {
    return {
      idToSet: 0,
      toasts: [],
      maxToastsToSee: 5,
      tostToFade: 3,
    };
  },
  methods: {
    addToast(params) {
      console.log("add TOAST");

      this.idToSet = this.idToSet + 1;

      let newToast = {
        id: this.idToSet,
        type: params.type,
        title: params.title,
        expanded: false,
        content: params.content,
        isUnmounteding: false,
      };

      this.toasts.push(newToast);
      this.sortReverse();
    },

    removeToast(id) {
      this.toasts.filter((el) => el.id !== id);
      this.sortReverse();
    },

    expandToast(id) {
      console.log("i'm expanding");

      this.toasts.forEach((el) => {
        if (el.id == id) {
          el.expanded = !el.expanded;
        }
      });
    },

    sortReverse() {
      //DA FINIRE
      /**
       * FAI IL REVERSE PER MOTIVI DI STILE
       *
       *
       */
      /*
  const friends = ["Abir", "Ashik", "Alif", "Alfi", "Shafi", "Kafi"];
const friendsSort = friends.sort();
const friendsReverse = friendsSort.reverse();
console.log(friendsReverse);
//Output: [ 'Shafi', 'Kafi', 'Ashik', 'Alif', 'Alfi', 'Abir' ]
*/
    },

    /*
    emitReedBeams1(id) {
      this.$emit("reedBeams", id);
    },
    gameIntentLoad2() {
      this.$emit("gameIntentLoad");
    },
    */
  },
};

export default ToastContainer;
</script>
<style>
.sg1-toast-container {
  --sg1ToastColor1: rgb(49, 49, 49);
  --sg1ToastColor2: rgb(82, 82, 82);
  --sg1ToastColor3: rgb(231, 231, 231);
  --sg1ToastColor4: rgb(0, 0, 0);

  --sg1ToastBg: 10px;
  --sg1ToastColorText: var(--sg1ToastColor3);
  --sg1ToastPaddingVertical: 10px;
  --sg1ToastPaddingHorizontal: 10px;
  --sg1ToastMargin: 10px;
  --sg1ToastSizeIconLine: 2px;

  --sg1toastWidth: 300px;
  --maxToastHeight: 600px;

  --sg1toastFontFamily: monospace;

  position: absolute;
  bottom: 0;
  right: 0;
  height: 100%;
  transform: translate(-100%);
}
.sg1-toast-container * {
  box-sizing: border-box;
}

.sg1-toast {
  min-width: var(--sg1toastWidth);
  max-width: var(--sg1toastWidth);
  margin-bottom: var(--sg1ToastMargin);
  transform: translateX(-100%);
  border-radius: 4px;
  background-color: var(--sg1ToastColor1);
}

.sg1-toast .sg1-head {
  padding: var(--sg1ToastPaddingVertical) var(--sg1ToastPaddingHorizontal);
  display: flex;
  align-items: center;
  gap: 10px;
}

.sg1-toast .sg1-head .sg1-title {
  font-size: 14px;
  font-family: var(--sg1toastFontFamily);
  color: var(--sg1ToastColorText);
}

.sg1-toast .sg1-head .title .sg1-id {
  font-weight: 700;
}

.sg1-toast .sg1-content {
  max-height: 0;
  overflow: hidden;
  padding: 0 var(--sg1ToastPaddingHorizontal);
  position: relative;
}

.sg1-toast.sg1-active .sg1-content {
  padding: var(--sg1ToastPaddingVertical) var(--sg1ToastPaddingHorizontal);
  max-height: var(--maxToastHeight);
  transition-timing-function: ease-out;
  transition: 0.5s max-height, 0.5s padding;
}

.sg1-toast .sg1-content:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 1px;
  width: 100%;
  background-color: var(--sg1ToastColor2);
}

.sg1-wrapper-pre {
  width: 100%;
  padding: calc(var(--sg1ToastPaddingVertical) / 2)
    calc(var(--sg1ToastPaddingHorizontal) / 2);
  background-color: var(--sg1ToastColor4);
  border-radius: 4px;
}

.sg1-toast .sg1-content pre {
  width: 100%;
  background-color: var(--sg1ToastColor4);
  font-size: 12px;
  font-family: var(--sg1toastFontFamily);
  color: var(--sg1ToastColorText);

  margin-top: 0;
  margin-bottom: 0;
}

.sg1-toast .sg1-close-btn,
.sg1-toast .sg1-expand {
  font-size: 16px;
  min-width: 1em;
  height: 1em;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.sg1-toast .sg1-close-btn:after,
.sg1-toast .sg1-close-btn:before {
  content: "";
  position: absolute;
  display: block;
  height: var(--sg1ToastSizeIconLine);
  width: 100%;
  background-color: var(--sg1ToastColor3);
}

.sg1-toast .sg1-close-btn:after {
  transform: rotate(45%);
}
.sg1-toast .sg1-close-btn:before {
  transform: rotate(-45%);
}

.sg1-toast .sg1-close-btn:before {
  transform: translate(-50%, -50%) rotate(45deg);
  top: 50%;
  left: 50%;
}

.sg1-toast .sg1-close-btn:after {
  transform: translate(-50%, -50%) rotate(-45deg);
  top: 50%;
  left: 50%;
}

.sg1-toast .sg1-expand {
  margin-left: auto;
}

.sg1-toast .sg1-expand:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  transform: rotate(45deg) scale(0.5);
  border-top: calc(var(--sg1ToastSizeIconLine) * 2) solid var(--sg1ToastColor3);
  border-right: calc(var(--sg1ToastSizeIconLine) * 2) solid
    var(--sg1ToastColor3);
}
</style>
