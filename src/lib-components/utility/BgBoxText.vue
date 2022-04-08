<template>
	<div class="bg-wrapper">
		<canvas
			:width="width"
			:height="height"
			id="st-canvas-bg"
		></canvas>
	</div>
</template>
<script>
	import bgSketch from "../svg/bgSketch.js";

	import svgColorChange from "../functions/svgColorChange.js";
	//const canvasSketch = require("canvas-sketch");
	/*

																																												const random = require("canvas-sketch-util/random");
																																												const math = require("canvas-sketch-util/math");
																																											  */

	let BgBoxText = {
		name: "BgBoxText",
		components: {},
		props: {
			stylesObj: {},
		},
		data: function () {
			return {
				width: 0,
				height: 0,
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
				this.width = document.getElementsByClassName("bg-wrapper")[0].clientWidth;
				this.height = document.getElementsByClassName(
					"bg-wrapper"
				)[0].clientHeight;
				setTimeout(() => {
					this.drawCanvasBg();
				}, 100);
			},
			drawCanvasBg() {
				let canvas = document.getElementById("st-canvas-bg");

				let context = canvas.getContext("2d");

				/* */
				let svgString = svgColorChange(bgSketch, this.stylesObj.bgStyle.bgColor);

				var img1 = new Image();
				img1.onload = function () {
					context.drawImage(img1, 0, 0);
				};
				img1.src =
					"data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgString);

				console.log(context);
				context.fillStyle = "pink";
				context.fillRect(0, 0, 100, 100);
				/* */
			},
		},
	};
	export default BgBoxText;
</script>
<style scoped>
	.bg-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
