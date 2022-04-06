<template>
	<div class="box-narration">
		<div class="tab-results">

			<div
				v-for="tab,index in currentTabs"
				:key="tab.id"
				:class=" currentTabs.length == 1 ? 'label-description': 'label-multiple-chose'"
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
	let boxNarrationGameOver = {
		name: "boxNarrationGameOver",
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

	export default boxNarrationGameOver;
</script>
