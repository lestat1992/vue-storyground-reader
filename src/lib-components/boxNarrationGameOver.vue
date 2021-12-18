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
					class="p"
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
		props: ["currentTabs", "lang", "reedbeams"],

		methods: {
			reedBeams(id) {
				console.log("OPLA AMIGO --- ");
				console.log(id);
				this.$emit("reedbeams", id);
			},
		},
	};

	export default boxNarrationGameOver;
</script>
