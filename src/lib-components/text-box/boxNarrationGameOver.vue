<template>
	<div class="sg1-box-narration">
		<div
			class="sg1-tab-results"
			:style="stylesObj.tabResultsMaxHeight"
		>

			<div
				v-for="tab,index in currentTabs"
				:key="tab.id"
				:class=" currentTabs.length == 1 ? 'sg1-label-description': 'sg1-label-multiple-chose'"
			>
				<div
					v-if="currentTabs.length == 1"
					@click="gameIntentLoad4()"
					:style="{...stylesObj.commonFontFamily, ...stylesObj.fontWeightListSelected, ...stylesObj.fontColor,...stylesObj.fontSize1}"
					v-html="fixText(tab.text[lang])"
					class="sg1-replay-link"
				>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import fixText from "../functions/fixText.js";

	let boxNarrationGameOver = {
		name: "boxNarrationGameOver",
		props: {
			currentTabs: {},
			lang: {},
			reedbeams: {},
			stylesObj: {},
			gameIntentLoad3: {},
		},
		methods: {
			reedBeams(id) {
				this.$emit("reedbeams", id);
			},
			fixText(text) {
				return fixText(text);
			},
			gameIntentLoad4() {
				this.$emit("gameIntentLoad3");
			},
		},
	};

	export default boxNarrationGameOver;
</script>
<style scoped>
	.sg1-tab-results {
		flex-grow: 1;
		overflow: auto;
	}
	.sg1-box-narration {
		position: relative;
		z-index: 10;
	}
	.sg1-replay-link {
		text-decoration: underline;
		cursor: pointer;
	}
</style>
