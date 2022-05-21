<template>
	<div
		v-if="svgData"
		:class="'sg1-'+stylesObj.iconSingleArrow['type'] + ' sg1-animation-' + animation"
		class="sg1-next-tab-wrapper"
	>
		<div
			class="sg1-svg-wraper"
			:style="{width: stylesObj.iconSingleArrow['size']}"
			v-html="svgData"
		></div>
		<div
			class="sg1-svg-shadow"
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
						this.animation = "shining";
						break;
					case "minimal2":
						svgString = nextTabMinimal2;
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
	.sg1-next-tab-wrapper {
		width: auto;
		display: inline-flex;
		cursor: pointer;
		position: relative;
		transition: opacity 0.35s;
		transition-timing-function: ease-out;
	}
	.sg1-next-tab-wrapper:hover {
		opacity: 0.75;
	}
	.sg1-next-tab-wrapper:hover .sg1-svg-shadow {
		opacity: 0;
		animation: none;
	}
	.sg1-svg-shadow {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transition: opacity 0.35s;
		transition-timing-function: ease-out;
	}

	/* scroll-down */
	.sg1-animation-scroll-down .sg1-svg-shadow {
		animation: sg1-scroll-down 2s infinite;
		animation-timing-function: ease-out;
	}
	.sg1-animation-scroll-down {
		transition: transform 0.35s;
		transition-timing-function: ease-out;
		transform: translateY(0) scale(0.95);
	}
	.sg1-animation-scroll-down:hover {
		transform: translateY(10%) scale(1);
	}
	@keyframes sg1-scroll-down {
		0% {
			transform: translateY(0);
			opacity: 0.5;
		}
		100% {
			transform: translateY(35%);
			opacity: 0;
		}
	}

	/* shining */
	.sg1-animation-shining {
		transition: transform 0.35s;
		transition-timing-function: ease-out;
		transform: translateY(0) scale(0.95);
		animation: sg1-shining 1s infinite;
		animation-timing-function: ease-out;
	}
	.sg1-animation-shining:hover {
		transform: translateY(10%) scale(1);
		animation: none;
	}
	@keyframes sg1-shining {
		0% {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
		50% {
			opacity: 0.5;
			transform: translateY(0) scale(0.95);
		}
		100% {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}
</style>
