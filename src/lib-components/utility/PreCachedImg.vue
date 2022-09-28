<template>
	<div class="sg1-pre-cached-img-wrapper">
		<div v-if="editorUsage">

			<img
				v-for="(el,index) in preCachedImgList"
				:key="index"
				class="sg1-box-img"
				:src="el"
				@load="imgsLoaded++"
			/>
		</div>
		<div v-else>
			<img
				v-for="(el,index) in preCachedImgList"
				:key="index"
				:src="el.src"
				:srcset="el.srcset"
				:sizes="el.sizes"
				@load="imgsLoaded++"
			/>
			<!--
			<img
				:src="el.src"
				:srcset="el.srcset"
				:sizes="el.sizes"
				@load="imgsLoaded++"
			/>
      -->
		</div>
	</div>

</template>
<script>
	let img = require("../../.././dev/cose/logo.png");

	let PreCachedImg = {
		name: "PreCachedImg",
		props: {
			preCachedImgList: {},
			editorUsage: {},
			setImgsLoaded: {},
		},
		data() {
			return {
				imgsLoaded: 0,
				testImg: img,
			};
		},
		watch: {
			imgsLoaded: function () {
				if (this.imgsLoaded == this.preCachedImgList.length) {
					this.$emit("setImgsLoaded");
				}
			},
		},
	};
	export default PreCachedImg;
</script>
<style scoped>
	.sg1-pre-cached-img-wrapper {
		position: fixed;
		max-height: 0;
		max-width: 0;
		overflow: hidden;
		visibility: hidden;
	}
</style>
