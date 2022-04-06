<template>
	<div class="pre-cached-img-wrapper">
		<div v-if="editorUsage">
			<img
				v-for="(el,index) in preCachedImgList"
				:key="index"
				class="box-img"
				:src="el"
				@load="imgsLoaded++"
			/>
		</div>
		<div v-else>
			<img
				:src="el.src"
				:srcset="el.srcset"
				:sizes="el.sizes"
				@load="imgsLoaded++"
			/>
		</div>
	</div>

</template>
<script>
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
	.pre-cached-img-wrapper {
		position: fixed;
		max-height: 0;
		max-width: 0;
		overflow: hidden;
		visibility: hidden;
	}
</style>
