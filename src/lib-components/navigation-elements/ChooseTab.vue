<template>
	<div class="chose-item">
		<div
			v-if="svgData"
			:class="stylesObj.iconMultipleArrow['type']"
			class="icon-wrapper"
		>
			<div
				class="svg-wraper"
				:style="{minWidth: stylesObj.iconMultipleArrow['size']}"
				v-html="svgData"
			></div>
			<div
				v-if="svgDataActive"
				class="svg-hover-wraper"
				:style="{minWidth: stylesObj.iconMultipleArrow['size']}"
				v-html="svgDataActive"
			>
			</div>
		</div>
		<div v-else>{{indexListText}}</div>
		{{text}}
	</div>
</template>
<script>
	import choseTabHexagon from "../svg/choseTabHexagonActive.js";
	import choseTabHexagonActive from "../svg/choseTabHexagonActive.js";

	import choseTabSketch1 from "../svg/choseTabSketch1.js";
	import choseTabSketch2 from "../svg/choseTabSketch1.js";
	import choseTabSketch3 from "../svg/choseTabSketch1.js";
	import choseTabSketch4 from "../svg/choseTabSketch1.js";
	import choseTabSketch5 from "../svg/choseTabSketch1.js";
	import choseTabSketchActive from "../svg/choseTabSketchActive.js";

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
				this.svgDataActive = svgColorChange(
					activeSvgString,
					this.stylesObj.iconMultipleArrow["color"]
				);
			},
		},
	};
	export default NextTab;
</script>
<style scoped>
	.chose-item {
		display: inline-flex;
		margin-bottom: 1em;
		max-width: 100%;
		width: auto;
		cursor: pointer;
	}
	.icon-wrapper {
		margin-right: 0.5em;
		position: relative;
	}
	.svg-hover-wraper {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}

	.chose-item,
	.svg-wraper,
	.svg-hover-wraper {
		transition: opacity 0.35s;
		transition-timing-function: ease-out;
	}

	.chose-item:hover {
		opacity: 0.75;
	}

	.chose-item:hover .svg-hover-wraper {
		opacity: 1;
	}

	.chose-item:hover .svg-wraper {
		opacity: 0;
	}
</style>
