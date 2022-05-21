<template>
	<div class="sg1-bg-wrapper">
		<canvas
			v-if="isCanvas"
			:width="width"
			:height="height"
			id="sg1-st-canvas-bg"
		></canvas>
		<div
			v-else
			class="sg1-st-bg"
			:style="styleStBg"
		></div>
	</div>
</template>
<script>
	import drawCanvasBg from "../functions/drawCanvasBg.js";

	let BgBoxText = {
		name: "BgBoxText",
		components: {},
		props: {
			stylesObj: {},
		},
		data: function () {
			return {
				isCanvas: false,
				canvasTypeArray: ["sketch"],
				borderRadiousLayout: [
					"d3e6",
					"b3c6",
					"b2e3",
					"b2e4",
					"b6e7",
					"b5e7",
					"e2e7",
					"b2b7",
				],
				width: 0,
				height: 0,
				styleStBg: {},
			};
		},
		mounted() {
			this.init();
			window.addEventListener("resize", this.init);
		},
		destroyed() {
			window.removeEventListener("resize", this.init);
		},
		methods: {
			init() {
				/* constrollo se il box test è attaccato ai bordi */
				let canUseRadious = false;
				if (this.borderRadiousLayout.includes(this.stylesObj.layoutID)) {
					canUseRadious = true;
				}

				/* controllo se è un canvas */
				if (this.canvasTypeArray.includes(this.stylesObj.bgStyle.bgType)) {
					this.isCanvas = true;
					this.width = document.getElementsByClassName(
						"bg-wrapper"
					)[0].clientWidth;
					this.height = document.getElementsByClassName(
						"bg-wrapper"
					)[0].clientHeight;
					setTimeout(() => {
						drawCanvasBg(
							{
								width: this.width,
								height: this.height,
							},
							this.stylesObj.bgStyle,
							this.stylesObj.layoutID
						);
					}, 100);
				} else {
					this.isCanvas = false;
					if (this.stylesObj.bgStyle.bgType == "minimal1") {
						this.styleStBg = {
							backgroundColor: this.stylesObj.bgStyle.bgColor,
							boxShadow: "0 0 4px 2px rgba(14,14,14,0.45)",
						};
						if (canUseRadious) {
							this.styleStBg.borderRadius = "20px";
						}
					} else {
						this.styleStBg = {
							backgroundColor: this.stylesObj.bgStyle.bgColor,
						};
					}
				}
			},
		},
	};
	export default BgBoxText;
</script>
<style scoped>
	.sg1-bg-wrapper,
	.sg1-st-bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
