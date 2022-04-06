<template>
	<div
		v-if="svgData"
		v-html="svgData"
	>

	</div>
</template>
<script>
	let NextTab = {
		name: "boxNarration",
		components: {},
		props: {
			stylesObj: {},
		},
		data: function () {
			return {
				svgData: false,
			};
		},
		mounted() {},
		methods: {},
	};
	export default NextTab;
</script>
