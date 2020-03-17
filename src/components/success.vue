<template>
	<div class="content">
		<div>{{$languages.success.text_1}}</div>
		<div>{{$languages.success.text_2}}</div>
		<span>{{$languages.success.text_3}}</span>
	</div>
</template>

<script>
	export default{
		created(){
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
	span{
		margin: 16px 0;
		font-size: 16px;
		font-weight: bold;
		color: #001F48;
	}
</style>