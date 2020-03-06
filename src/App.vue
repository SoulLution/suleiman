<template>
  <div id="app">

    <v-header />

  	<div class="popup" v-if="popup">
	  	<div class="popup-bg" @click="type !== undefined ? popup = false : ''"></div>
	  	<div class="popup-content">
		  	<div class="popup-content-message" :class="{'success': type === true,'error': type === false,'await': type === undefined}">{{message}}</div>
		  	<div class="popup-content-button" @click="type !== undefined ? popup = false : ''">Закрыть</div>
	  	</div>
  	</div>

    <router-view @popupsend="popupMessage" />
    <v-footer />
  </div>
</template>

<script>
import vFooter from '@/components/footer.vue'
import vHeader from '@/components/header.vue'
export default {
  name: 'App',
  components: { vFooter, vHeader },
  data(){
  	return{
  		open: false,
  		touch: 0,
  		type: undefined,
  		popup: false,
  		message: 'Ваш запрос обрабатывается, в ближайшее время с вами свяжется консультант.',
  		data:[
  			{
  				name: 'Главная',
  				path: '/'
  			},
  			{
  				name: 'Аутсорсинг',
  				path: '/outsource'
  			},
  			{
  				name: 'Консалтинг',
  				path: '/consalting'
  			},
  		]
  	}
  },
  mounted(){
		document.body.ontouchstart = e => {
			this.touch = e.touches[0].clientX
		}
		document.body.ontouchend = e => {
			let x = e.changedTouches[0].clientX, index = 0

      if(this.touch - x > (document.body.clientWidth/2))
        this.open = false
      else if(x -this.touch > (document.body.clientWidth/2))
        this.open = true

      this.touch = 0;
		}
	},
  methods:{
  	popupMessage(e){
  		this.type = e
  		if(e === false)
  			this.message = 'Ой! Что-то пошло не так, попробуйте повторить запрос позже.'
  		else if(e === true)
  			this.message = 'Ваш запрос обрабатывается, в ближайшее время с вами свяжется консультант.'
  		else
  			this.message = 'Пожалуйста, подождите, пока ваш запрос отправится.'
  		this.popup = true
  	}
  }
}
</script>

<style lang="scss">
  @import '@/assets/main.scss';

	.popup{
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		justify-content: center;
		align-items: center;
		z-index: 20;
  	&-bg{
  		position: absolute;
  		height: 100%;
  		width: 100%;
  		background-color: #00000080;
  	}
  	&-content{
  		border-radius: 10px;
  		background-color: $white;
  		width: 80%;
  		padding: 2.5%;
  		max-width: 400px;
	  	&-message{
	  		color: $main;
	  		font-weight: bold;
	  		font-size: 16px;
	  		line-height: 20px;
	  		margin-bottom: 5%;
	  		&.success{
	  			color: #00ca1c;
	  		}
	  		&.error{
	  			color: #ff2b2b;
	  		}
	  		&.await{
	  			color: #888888;
	  		}
	  	}
	  	&-button{
	  		color: $main;
	  		border: 1px solid $main;
	  		border-radius: 50px;
	  		cursor: pointer;
	  		width: auto;
	  		padding: 12px 32px;
	  	}
	  }
	}

  @media screen and (max-width: 668px){
  }
</style>
