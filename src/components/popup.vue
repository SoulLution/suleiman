<template>
	<div class="popup" v-show="popup">
  	<div class="popup-bg" @click="$emit('close', false)"></div>
  	<transition name="fade-popup">
	  	<div class="popup-content" v-show="popup">
		  	<div class="popup-content-ava"><img :src="'/static/img/'+ data.ava"></div>
		  	<div class="popup-content-fio">{{data.fio}}</div>
		  	<div class="popup-content-speciality">{{data.speciality}}</div>
		  	<div class="popup-content-about">{{data.about}}</div>
		  	<div class="popup-content-button" @click="$emit('close', false)"></div>
	  	</div>
	  </transition>
	</div>

</template>

<script>
	export default{
		props: {
			data: {
				type: Object,
				default(){
					return {}
				}
			},
			popup: {
				type: Boolean,
				default: false
			}
		},
		data(){
	  	return{
	  	}
	  },
	}
</script>

<style lang="scss" scoped>
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
  		background-color: #ffffff;
  		width: 80%;
  		max-height: 80%;
  		padding: 2.5%;
  		max-width: 550px;
  		justify-content: flex-start;
  		&-ava{
        min-height: 200px;
        width: 200px;
        border-radius: 50%;
        background-color: #cacaca;
        overflow: hidden;
  		}
	  	&-fio{
	  		font-weight: 800;
				font-size: 16px;
				line-height: 22px;
				color: #000000;
				margin-top: 20px;
	  	}
			&-speciality{
				font-size: 13px;
				line-height: 18px;
				text-align: center;
				color: #4F4F4F;
				width: 50%;
				margin: 8px 0 20px;
			}
			&-about{
				font-size: 13px;
				line-height: 18px;
				text-align: center;
				color: #4F4F4F;
		    word-break: break-word;
		    overflow-y: auto;

			}
	  	&-button{
	  		position: absolute;
	  		right: 2.5%;
	  		top: 2.5%;
	  		height: 18px;
	  		width: 18px;
	  		background-repeat: no-repeat;
	  		background-size: 100% 100%;
	  		background-image: url(/static/img/exit.svg);
	  		border-radius: 50px;
	  		cursor: pointer;
	  	}
	  }
	}

	.fade-popup-enter-active, .fade-popup-leave-active{
	  transition: 5s;
	  transform: scale(1);
	}
	.fade-popup-enter-to{
		transition: 0.3s;
	  transform: scale(1.05);
	}
	.fade-popup-enter, .fade-popup-leave-to{
		transition: 0.3s;
	  transform: scale(0);
	}
	@media screen and (max-width: 760px){
		.popup-content{
			max-height: 90vh;
		}
		.popup-content-ava{
			min-height: 100px;
			width: 100px;
		}
	}
</style>