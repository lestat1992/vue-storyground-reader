<template>
	<div
		class="wrapper-box-text"
		:style="{ ...stylesObj.boxText, ...stylesObj.boxTextPadding }"
	>
		<boxnarration
			v-if="narrationBox == 'default' || narrationBox == 'descriptions' ||  narrationBox == 'chose'"
			:lang="lang"
			:current-tabs="currentTabs"
			:stylesObj="stylesObj"
			@emitReedBeams2="emitReedBeams1"
		/>
		<gameEnd
			v-if="narrationBox == 'end' "
			:lang="lang"
			:current-tabs="currentTabs"
			:stylesObj="stylesObj"
			@emitReedBeams2="emitReedBeams1"
		/>
		<gameOver
			v-if="narrationBox == 'game over'"
			:lang="lang"
			:current-tabs="currentTabs"
			:stylesObj="stylesObj"
			@emitReedBeams2="emitReedBeams1"
		/>
	</div>
</template>
<script>
	import boxNarration from "./text-box/boxNarration.vue";
	import boxNarrationGameEnd from "./text-box/boxNarrationGameEnd.vue";
	import boxNarrationGameOver from "./text-box/boxNarrationGameOver.vue";

	let boxText = {
		name: "boxText",
		components: {
			boxnarration: boxNarration,
			gameEnd: boxNarrationGameEnd,
			gameOver: boxNarrationGameOver,
		},
		props: {
			narrationBox: {},
			lang: {},
			currentTabs: {},
			reedBeams: {},
			stylesObj: {},
		},
		methods: {
			emitReedBeams1(id) {
				console.log("ehi ciao");
				this.$emit("reedBeams", id);
			},
		},
	};

	export default boxText;
</script>
<style scoped>
	.wrapper-box-text {
		background-color: red;
		display: flex;
		flex-direction: column;
	}
	.box-narration {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}
</style>
