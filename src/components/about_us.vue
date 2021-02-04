<template>
	<div class="main about">
		<div class="content">
			<div class="about-title">{{$languages.about_us.title}}</div>
			<div class="about-text" v-html="$languages.about_us.text">{{}}</div>
			<v-button class="about-link" :title="$languages.about_us.button" />
			<!-- <a :href="link" target="_blank" class="about-link">{{link}}</a> -->
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				link: 'http://suleimanpartners.com'
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/assets/main.scss";
	.content{
		justify-content: flex-start;
		align-items: flex-start;
	}
	.about{
		min-height:100vh;
		justify-content: flex-start;
		&-title{
			display: block;
			text-align: left;
			color: $blue_d;
			margin: 40px 0 40px;
			font-weight: 800;
			font-size: 32px;
			line-height: 44px;
		}
		&-text{
			display: block;
			text-align: left;
			font-weight: 800;
			font-size: 16px;
			line-height: 22px;
			margin-bottom: 2px;
		}
		&-link{
			margin-top: 2rem;
		}
	}
</style>