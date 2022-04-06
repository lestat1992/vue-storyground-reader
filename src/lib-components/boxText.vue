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
			@:reedBeams="emit('reedBeams')"
		/>
		<gameEnd
			v-if="narrationBox == 'end' "
			:lang="lang"
			:current-tabs="currentTabs"
			:stylesObj="stylesObj"
			@:reedBeams="emit('reedBeams')"
		/>
		<gameOver
			v-if="narrationBox == 'game over'"
			:lang="lang"
			:current-tabs="currentTabs"
			:stylesObj="stylesObj"
			@:reedBeams="emit('reedBeams')"
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
	};

	export default boxText;
</script>
<style scoped>
	.wrapper-box-text {
		background-color: red;
	}
</style>
