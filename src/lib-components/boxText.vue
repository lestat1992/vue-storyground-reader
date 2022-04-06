<template>
	<div
		class="wrapper-box-text"
		:style="{ ...stylesObj.boxText, ...stylesObj.boxTextPadding }"
	>
		<boxnarration
			v-if="narrationBox == 'default' || narrationBox == 'descriptions' ||  narrationBox == 'chose'"
			v-bind:lang="lang"
			v-bind:current-tabs="currentTabs"
			:stylesObj="stylesObj"
			v-on:reedBeams="emit('reedBeams')"
		/>
		<gameEnd
			v-if="narrationBox == 'end' "
			v-bind:lang="lang"
			v-bind:current-tabs="currentTabs"
			:stylesObj="stylesObj"
			v-on:reedBeams="emit('reedBeams')"
		/>
		<gameOver
			v-if="narrationBox == 'game over'"
			v-bind:lang="lang"
			v-bind:current-tabs="currentTabs"
			:stylesObj="stylesObj"
			v-on:reedBeams="emit('reedBeams')"
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
