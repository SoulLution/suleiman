<template>
	<div class="content">
		<div class="green">{{$languages.success.text_1}}</div>
		<div class="min">{{$languages.success.text_2}}</div>
	</div>
</template>

<script>
	export default{
		created(){
			this.$emit('setLoad', false)
			setTimeout(()=>{
				this.$router.push('/')
			},5000)
		}
	}
</script>

<style lang="scss" scoped>
	div.content{
		height: 80vh;
	}
	.green{
		font-weight: 800;
		font-size: 32px;
		line-height: 44px;
		color: #00A32E;
	}
	.min{
		font-weight: 800;
		font-size: 16px;
		line-height: 22px;
		color: #252525;
		margin: 24px 0px;
	}
</style>