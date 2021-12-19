<template>
	<span>
		<boxnarration
			v-if="narrationBox == 'default' || narrationBox == 'descriptions' ||  narrationBox == 'chose'"
			v-bind:lang="lang"
			v-bind:current-tabs="currentTabs"
			v-on:reedBeams="emit('reedBeams')"
		/>
		<gameEnd
			v-if="narrationBox == 'end' "
			v-bind:lang="lang"
			v-bind:current-tabs="currentTabs"
			v-on:reedBeams="emit('reedBeams')"
		/>
		<gameOver
			v-if="narrationBox == 'game over'"
			v-bind:lang="lang"
			v-bind:current-tabs="currentTabs"
			v-on:reedBeams="emit('reedBeams')"
		/>
	</span>
</template>
<script>
	import boxNarration from "./boxNarration.vue";
	import boxNarrationGameEnd from "./boxNarrationGameEnd.vue";
	import boxNarrationGameOver from "./boxNarrationGameOver.vue";

	let boxText = {
		name: "boxText",
		props: ["narrationBox", "lang", "currentTabs", "reedBeams"],
		components: {
			boxnarration: boxNarration,
			gameEnd: boxNarrationGameEnd,
			gameOver: boxNarrationGameOver,
		},
	};

	export default boxText;
</script>
