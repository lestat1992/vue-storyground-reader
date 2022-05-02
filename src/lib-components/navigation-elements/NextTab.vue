<template>
	<div
		v-if="svgData"
		:class="stylesObj.iconSingleArrow['type'] + ' animation-' + animation"
		class="next-tab-wrapper"
	>
		<div
			class="svg-wraper"
			:style="{width: stylesObj.iconSingleArrow['size']}"
			v-html="svgData"
		></div>
		<div
			class="svg-shadow"
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
				animation: false,
				svgShadow: false,
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
					case "minimal2":
						svgString = nextTabMinimal1;
						this.animation = "scroll-down";
						this.svgShadow = true;
						break;
					default:
						svgString = nextTabMinimal1;
						this.animation = "scroll-down";
						this.svgShadow = true;
						break;
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
		position: relative;
		transition: opacity 0.35s;
		transition-timing-function: ease-out;
	}
	.next-tab-wrapper:hover {
		opacity: 0.75;
	}
	.next-tab-wrapper:hover .svg-shadow {
		opacity: 0;
		animation: none;
	}
	.svg-shadow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transition: opacity 0.35s;
		transition-timing-function: ease-out;
	}

	/* scroll-down */
	.animation-scroll-down .svg-shadow {
		animation: scroll-down 2s infinite;
		animation-timing-function: ease-out;
	}
	.animation-scroll-down {
		transition: transform 0.35s;
		transition-timing-function: ease-out;
		transform: translateY(0) scale(0.95);
	}
	.animation-scroll-down:hover {
		transform: translateY(10%) scale(1);
	}
	@keyframes scroll-down {
		0% {
			/*box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2); */
			transform: translateY(0);
			opacity: 0.5;
		}
		100% {
			/* box-shadow: 0 0 0 20px rgba(0, 0, 0, 0); */
			transform: translateY(35%);
			opacity: 0;
		}
	}
</style>
