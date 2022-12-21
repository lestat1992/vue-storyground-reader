<template>
  <div v-if="toasts.length" class="sg1-toast-container">
    <div
      v-for="(toast, index) in toasts"
      :key="toast.id"
      :class="{
        'sg1-active': toast.expanded,
        'sg1-toast-faded-1': toasts.length - index > tostToSee,
        'sg1-toast-faded-2': toasts.length - index > tostToSee + 1,
        'sg1-toast-faded-3': toasts.length - index > tostToSee + 2,
        'sg1-toast-faded-4': toasts.length - index > tostToSee + 3,
      }"
      class="sg1-toast"
      :cose="toasts.length - index"
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
      toastsFiltered: [],
      tostToSee: 3,
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
    },

    removeToast(id) {
      //AGGIUNGI UNMOUNT !!!!!!!!!!!!!!!!!!!!!!!!!

      this.toasts = this.toasts.filter((el) => el.id !== id);
    },

    expandToast(id) {
      console.log("i'm expanding");

      this.toasts.forEach((el) => {
        if (el.id == id) {
          el.expanded = !el.expanded;
        }
      });
    },
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
  right: var(--sg1ToastMargin);
  height: 100%;
  transform: translate(100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 100;
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
  box-shadow: 0 0 0 1px white;
  animation-name: sg1-fadein;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  transition: 0.35s opacity;
  transition-timing-function: ease-out;
}

@keyframes sg1-fadein {
  0% {
    opacity: 0;
    transform: translate(100%);
    max-height: 0;
  }
  85% {
    opacity: 1;
    transform: translateX(-110%);
    max-height: var(--maxToastHeight);
  }
  100% {
    transform: translateX(-100%);
  }
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
  transition: 1s max-height, 0.5s padding;
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

.sg1-toast.sg1-active .sg1-expand:after {
  transform: rotate(135deg) scale(0.5);
}

.sg1-toast-faded-1 {
  opacity: 0.5;
  pointer-events: none;
}
.sg1-toast-faded-2 {
  opacity: 0.25;
}
.sg1-toast-faded-3 {
  opacity: 0;
}
.sg1-toast-faded-4 {
  opacity: 0;
}
</style>
