<template>
	<div id="app">
		<game
			:gameData="testMarta"
			:pathMediaDir="'http://192.168.1.9:8000/media'"
			:indexMedia="defaultIndexMedia"
			:editorUsage="true"
			:useTheme="false"
			:canEmit="true"
			:showToast="true"
			@functionToEmitByTabs="EmitByTabs"
			@functionToEmitOnInit="EmitOnInit"
			@functionToEmitBeforeNavigation="EmitBeforeNavigation"
			@functionToEmitAfterNavigation="EmitAfterNavigation"
			ref="gameRef"
		/>
		<div class="box"><a @click="getPlayerData()">Get data user </a><br /></div>
		<div class="box"><a @click="getTabData()">Get data tab</a><br /></div>
		<div class="box"><a @click="setStart()">set start</a><br /></div>
	</div>
</template>
<script>
	import { defineComponent } from "vue";
	// Uncomment import and local "components" registration if library is not registered globally.
	// import { TestStLibrarySample } from '@/entry.esm';

	import testMarta from "./cose/test.json";
	import defaultIndexMedia from "./cose/media/indexMedia.json";

	export default defineComponent({
		name: "ServeDev",
		// components: {
		//  TestStLibrarySample,
		// }
		data() {
			return {
				testMarta: testMarta,
				defaultIndexMedia: defaultIndexMedia,
			};
		},
		methods: {
			EmitByTabs(params) {
				console.log("CIAOOOOONE!");
				console.log(params);
			},
			EmitOnInit() {
				console.log("INIT CIAOOONE!");
			},
			EmitBeforeNavigation() {
				console.log("NAVIGATION1");
			},
			EmitAfterNavigation() {
				console.log("NAVIGATION2");
			},
			getPlayerData() {
				let values = this.$refs.gameRef.getPlayerValues();
				console.log(values);
			},
			getTabData() {
				let values = this.$refs.gameRef.getCurrentTabValues();
				console.log(values);
			},
			setStart() {
				this.$refs.gameRef.setStartPoint(1);
			},
		},
	});
</script>
