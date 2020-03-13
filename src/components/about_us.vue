<template>
	<div class="main about">
		<div class="content">
			<div class="about-title">О нас</div>
			<div class="about-text">{{text_1}}</div>
			<div class="about-text">{{text_2}}</div>
			<div class="about-text">{{text_3}}</div>
			<div class="about-text">{{text_4}}</div>
			<a :href="link" target="_blank" class="about-link">{{link}}</a>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				text_1: `Казахстанская юридическая компания Suleiman&Partners, является лидером по решению сложных вопросов в области экономических, налоговых и инвестиционных споров.  Наша компания отлично 	зарекомендовала себя как в бизнес – сообществе, так и в работе с органами государственного управления. 
				`,
				text_2: `Мы первая юридическая казахстанская компания, которая на территории Европы для бизнес- сообщества европейских стран, проведет юридическую конференцию о защите европейских инвесторов, компаний и торгово-экономических сделок в постсоветских республиках.
				`,
				text_3: `Высокой оценкой нашей работы, является то, что наши клиенты доверили нам право  представить Вам их инвестиционные проекты из первых рук. 
				`,
				text_4: `Кнопка читать о компании больше`,
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
			display: block;
			text-align: left;
			width: auto;
			color: $blue_l;
			cursor: pointer;
		}
	}
</style>