<template>
	<div class="box-narration">
		<div
			class="tab-results"
			:style="stylesObj.tabResultsMaxHeight"
		>

			<div
				v-for="tab,index in currentTabs"
				:key="tab.id"
				:class=" currentTabs.length == 1 ? 'label-description': 'label-multiple-chose'"
			>
				<div
					v-if="currentTabs.length == 1"
					:style="{...stylesObj.commonFontFamily, ...stylesObj.fontWeightListSelected, ...stylesObj.fontColor,...stylesObj.fontSize1,...stylesObj.paddingBottomNextTab}"
				>
					{{tab.text[lang]}}
				</div>
				<div
					v-else
					:style="{...stylesObj.commonFontFamily, ...stylesObj.fontWeightListSelected, ...stylesObj.fontColor,...stylesObj.fontSize1}"
				>
					<ChooseTab
						:index="index"
						:text="tab.text[lang]"
						:stylesObj="stylesObj"
						@click="emitReedBeams3(tab.id)"
					/>
				</div>
			</div>

			<div
				v-for="tab,index in nextTabsChose"
				:key="tab.id"
				:class=" currentTabs.length == 1 ? 'label-description': 'label-multiple-chose'"
			>
				<div
					v-if="tab.id"
					:style="{...stylesObj.commonFontFamily, ...stylesObj.fontWeightListSelected, ...stylesObj.fontColor,...stylesObj.fontSize1}"
				>
					<ChooseTab
						:index="index"
						:text="tab.text[lang]"
						:stylesObj="stylesObj"
						@click="emitReedBeams3(tab.id)"
					/>
				</div>
			</div>

		</div>
		<div
			v-if="currentTabs.length == 1 && nextTabsChose.length == 0"
			class="single-beem-foward-box"
			:style="stylesObj.paddingTopNextTab"
		>
			<NextTab
				:stylesObj="stylesObj"
				@click="emitReedBeams3(currentTabs[0].id)"
			/>
		</div>
	</div>
</template>

<script>
	import NextTab from "../navigation-elements/NextTab";
	import ChooseTab from "../navigation-elements/ChooseTab";

	let boxNarration = {
		name: "boxNarration",
		components: {
			NextTab: NextTab,
			ChooseTab: ChooseTab,
		},
		props: {
			currentTabs: {},
			nextTabsChose: {},
			lang: {},
			emitReedBeams2: {},
			stylesObj: {},
		},
		methods: {
			emitReedBeams3(id) {
				this.$emit("emitReedBeams2", id);
			},
		},
	};

	export default boxNarration;
</script>
<style scoped>
	.tab-results {
		flex-grow: 1;
		overflow: auto;
	}
	.single-beem-foward-box {
		display: flex;
		justify-content: center;
	}
	.box-narration {
		position: relative;
		z-index: 10;
	}
</style>
