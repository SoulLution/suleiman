<template>
	<div class="content">
		<div class="green">{{$languages.error.text_1}}</div>
		<div class="min">{{error_message}}</div>
	</div>
</template>

<script>
	export default{
    props: {
      error_message: {
        type: String,
        default: ""
      }
    },
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
		color: #EB0000;
	}
	.min{
		font-weight: 800;
		font-size: 16px;
		line-height: 22px;
		color: #252525;
		margin: 24px 0px;
	}
</style>