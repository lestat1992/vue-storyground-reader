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
				<div
					v-else
					v-on:click="reedBeams(tab.id)"
					class="p"
				>
					<!--{{index + 1}}.--> {{tab.text[lang]}}
				</div>
			</div>

		</div>
		<div
			v-if="currentTabs.length == 1"
			class="single-beem-foward-box"
		>
			<div
				v-on:click="reedBeams(currentTabs[0].id)"
				class="icon-proceed"
			></div>
		</div>
	</div>
</template>

<script>
	let boxNarration = {
		name: "boxNarration",
		props: ["currentTabs", "lang", "reedbeams"],

		methods: {
			reedBeams(id) {
				this.$emit("reedbeams", id);
			},
		},
	};

	export default boxNarration;
</script>

