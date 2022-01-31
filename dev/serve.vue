<script>
	import { defineComponent } from "vue";
	// Uncomment import and local "components" registration if library is not registered globally.
	// import { TestStLibrarySample } from '@/entry.esm';

	export default defineComponent({
		name: "ServeDev",
		// components: {
		//  TestStLibrarySample,
		// }
	});
</script>

<template>
	<div id="app">
		<game />
	</div>
</template>
