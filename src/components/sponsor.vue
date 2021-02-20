<template>
	<div class="main about">
		<div class="content">
			<div class="about-title" v-html="$languages.sponsor_us"></div>
			
      <div class="footer-content-row">
        <div class="footer-column" style="align-items: flex-start">
          <div class="footer-column-title">{{links[0].title}}</div>
          <div class="footer-column-childs">
            <div class="footer-column-childs-child" v-for="child in links[0].childs">
              <img :src="'/static/img/' + child.img" v-if="child.img">
              <a :href="child.href">{{child.name}}</a>
            </div>
          </div>
        </div>
      </div>
			<!-- <a :href="link" target="_blank" class="about-link">{{link}}</a> -->
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
        links: []
      }
    },
    created(){
      this.links = this.$languages.footer.links
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
		margin-top: 70px;
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