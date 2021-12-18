<template>
	<div class="box-illustration">
		<div
			class="inner-box"
			v-bind:style="{ paddingBottom: ( (illustration.srcFull[2] / illustration.srcFull[1]) * 100  ) + '%'}"
		>

			<div
				class="box-img"
				v-bind:style="{ backgroundImage: 'url(' + illustration.srcFull[0] + ')' }"
			>

			</div>
		</div>
	</div>
</template>


<script>
	let boxIllustration = {
		name: "boxIllustration",
		props: ["illustration"],
		methods: {},
	};

	export default boxIllustration;
</script>
