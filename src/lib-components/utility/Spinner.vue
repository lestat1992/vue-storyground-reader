<template>
	<div class="sg1-spinner-box-media">
		<div class="sg1-spinner pulse-container">
			<div class="sg1-pulse-bubble pulse-bubble-1"></div>
			<div class="sg1-pulse-bubble pulse-bubble-2"></div>
			<div class="sg1-pulse-bubble pulse-bubble-3"></div>
		</div>
	</div>
</template>

<script>
	let spinnerBox = {
		name: "Spinner",
	};

	export default spinnerBox;
</script>
<style scoped>
	.sg1-spinner-box-media {
		background-color: #464646;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		animation-name: sg1-fadein;
		animation-duration: 0.4s;
		animation-timing-function: ease-out;
	}

	@keyframes sg1-fadein {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	/* PULSE BUBBLES */

	.sg1-pulse-container {
		width: 3em;
		font-size: rem(15px);
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.sg1-pulse-bubble {
		font-size: 1em;
		width: 0.6em;
		height: 3em;
		background-color: #ffffff;
	}

	.sg1-pulse-bubble-1 {
		animation: sg1-pulse 0.6s ease 0s infinite alternate;
	}
	.sg1-pulse-bubble-2 {
		animation: sg1-pulse 0.6s ease 0.15s infinite alternate;
	}
	.sg1-pulse-bubble-3 {
		animation: sg1-pulse 0.6s ease 0.3s infinite alternate;
	}

	/* KEYFRAMES */

	@keyframes sg1-pulse {
		from {
			opacity: 1;
			transform: scale(1);
		}
		to {
			opacity: 0.5;
			transform: scale(0.8);
		}
	}
</style>
