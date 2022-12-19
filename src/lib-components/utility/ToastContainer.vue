<template>
  <div v-if="toasts.length" class="toast-container">
    <div v-for="toast in toasts" :key="toast.id">
      <div class="head">
        <span class="title" v-html="toast.title"></span>
        <div
          @click="expandToast(toast.id)"
          :class="{ active: toast.expanded }"
          class="expand"
        ></div>
        <div @click="removeToast(toast.id)" class="close-btn"></div>
      </div>
      <div :class="{ active: toast.expanded }" class="content">
        <code>
          {{ toast.content }}
        </code>
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
      this.toasts((el) => {
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
<style></style>
