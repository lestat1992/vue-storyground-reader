<template>
	<div
		class="sg1-box-illustration"
		:style="stylesObj.boxIllustration"
	>
		<div class="sg1-inner-box">
			<img
				v-if="editorUsage"
				class="sg1-box-img"
				:src="illustration.srcFull[0]"
			/>
			<img
				v-else
				:src="imgPathPart + '-' + style['img-sizes'][style['img-sizes'].length - 1]['width'] + 'x' + style['img-sizes'][style['img-sizes'].length - 1]['height'] + '.jpg'"
				:srcset="responsiveImages.srcset"
				:sizes="responsiveImages.sizes"
			/>
		</div>
	</div>
</template>

<script>
	let boxIllustration = {
		name: "boxIllustration",
		props: {
			illustration: {},
			editorUsage: {},
			indexMedia: {},
			pathMediaDir: {},
			style: {},
			stylesObj: {},
		},
		methods: {},
		computed: {
			imgPathPart: function () {
				let name = this.indexMedia.find((el) => el.Id == this.illustration.ID)
					.name;

				return this.pathMediaDir + "/" + name;
			},
			responsiveImages: function () {
				let data = {
					srcset: "",
					sizes: "",
				};

				this["style"]["img-sizes"].forEach((el, index) => {
					data.srcset =
						data.srcset +
						this.imgPathPart +
						"-" +
						el.width +
						"x" +
						el.height +
						".jpg " +
						el.width +
						"w";
					if (index + 1 != this["style"]["img-sizes"].length) {
						data.srcset = data.srcset + ",";
					}

					if (index + 1 != this["style"]["img-sizes"].length) {
						data.sizes =
							data.sizes +
							"( max-width:" +
							el.width +
							"px ) " +
							el.width +
							"px, ";
					} else {
						data.sizes = data.sizes + el.width + "px";
					}
				});

				return data;
			},
		},
	};

	export default boxIllustration;
</script>
<style scoped>
	.sg1-box-illustration {
		grid-column-start: 2;
		grid-column-end: 3;
		grid-row-start: 2;
		grid-row-end: 3;
	}
	.sg1-inner-box {
		width: 100%;
		height: 100%;
	}
	.sg1-inner-box img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}
</style>
