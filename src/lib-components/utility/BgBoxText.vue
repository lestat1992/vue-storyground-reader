<template>
	<div class="bg-wrapper">
		<canvas
			v-if="isCanvas"
			:width="width"
			:height="height"
			id="st-canvas-bg"
		></canvas>
		<div
			v-else
			class="st-bg"
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
				borderRadiousLayout: [5, 6, 8, 9, 10, 11, 15, 16],
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
					console.log("canUseRadious");
					canUseRadious = true;
				}
				console.log("CONTROLLO");
				console.log(this.borderRadiousLayout);
				console.log(this.stylesObj.layoutID);

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
						console.log("pass1");
						this.styleStBg = {
							backgroundColor: this.stylesObj.bgStyle.bgColor,
							boxShadow: "0 0 4px 2px rgba(14,14,14,0.45)",
						};
						if (canUseRadious) {
							this.styleStBg.borderRadius = "20px";
						}
					} else {
						console.log("pass2");
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
	.bg-wrapper,
	.st-bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
