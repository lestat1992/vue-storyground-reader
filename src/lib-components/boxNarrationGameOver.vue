<template>
	<div class="box-narration">
		<div class="tab-results">

			<div
				v-for="tab,index in currentTabs"
				v-bind:key="tab.id"
				v-bind:class=" currentTabs.length == 1 ? 'label-description': 'label-multiple-chose'"
			>
				<div
					v-if="currentTabs.length == 1"
					:style="{...stylesObj.commonFontFamily}"
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
