
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
					:style="{...stylesObj.commonFontFamily, ...stylesObj.fontWeightListSelected, ...stylesObj.fontColor,...stylesObj.fontSize1}"
				>
					{{tab.text[lang]}}
				</div>
			</div>

		</div>
	</div>
</template>

  <script>
	let boxNarrationGameEnd = {
		name: "boxNarrationGameEnd",
		props: {
			currentTabs: {},
			lang: {},
			reedbeams: {},
			stylesObj: {},
		},
		methods: {
			reedBeams(id) {
				this.$emit("reedbeams", id);
			},
		},
	};

	export default boxNarrationGameEnd;
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
</style>
