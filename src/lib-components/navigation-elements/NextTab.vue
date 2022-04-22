<template>
	<div
		v-if="svgData"
		:class="stylesObj.iconSingleArrow['type']"
		class="next-tab-wrapper"
	>
		<div
			class="svg-wraper"
			:style="{width: stylesObj.iconSingleArrow['size']}"
			v-html="svgData"
		></div>
	</div>
</template>
<script>
	import nextTabSketch from "../svg/nextTabSketch.js";
	import nextTabMinimal1 from "../svg/nextTabMinimal1.js";
	import nextTabMinimal2 from "../svg/nextTabMinimal2.js";

	import svgColorChange from "../functions/svgColorChange.js";

	let NextTab = {
		name: "boxNarration",
		components: {},
		props: {
			stylesObj: {},
		},
		data: function () {
			return {
				svgData: false,
			};
		},
		watch: {
			stylesObj: {
				handler() {
					this.initSvg();
				},
				deep: true,
			},
		},
		mounted() {
			this.initSvg();
		},
		methods: {
			initSvg() {
				let stringName = this.stylesObj.iconSingleArrow["type"];
				let svgString;
				switch (stringName) {
					case "sketch":
						svgString = nextTabSketch;
						break;
					case "minimal1":
						svgString = nextTabMinimal1;
						break;
					case "minimal2":
						svgString = nextTabMinimal1;
						break;
					default:
						break;
				}
				this.svgData = svgColorChange(
					svgString,
					this.stylesObj.iconSingleArrow["color"]
				);
			},
		},
	};
	export default NextTab;
</script>
<style scoped>
	.next-tab-wrapper {
		width: auto;
		display: inline-flex;
		cursor: pointer;
	}
	.next-tab-wrapper {
		transition: opacity 0.35s;
		transition-timing-function: ease-out;
	}
	.next-tab-wrapper:hover {
		opacity: 0.75;
	}
</style>
