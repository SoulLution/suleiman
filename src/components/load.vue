<template>
	<div class="load-lds" v-if="load">
		<div class="lds-ring">
			<div v-for="i in 4"></div>
		</div>
	</div>
</template>

<script>
	export default{
		props: {
			load: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.load-lds{
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 5;
		width: 100vw;
		height: 100vh;
		background-color: #00000080;
	}
	.lds-ring {
	  display: inline-block;
	  position: relative;
	  width: 75px;
	  height: 75px;
	}
	.lds-ring div {
	  box-sizing: border-box;
	  display: block;
	  position: absolute;
	  margin: 5px;
	  width: calc(100% - 10px);
	  height: calc(100% - 10px);
	  border: 6px solid #000;
	  border-radius: 50%;
	  animation: lds-ring 0.7s cubic-bezier(0.2, 0, 0.5, 1) infinite;
	  border-color: #4585DC transparent transparent transparent;
	}
	.lds-ring div:nth-child(1) {
	  animation-delay: -0.15s;
	}
	.lds-ring div:nth-child(2) {
	  animation-delay: -0.1s;
	}
	.lds-ring div:nth-child(3) {
	  animation-delay: -0.05s;
	}
	@keyframes lds-ring {
	  0% {
	    transform: rotate(0deg);
	  }
	  100% {
	    transform: rotate(360deg);
	  }
	}
</style>