<template>
	<div class="button" @click="sendData()">
		<div class="bg"></div>
		<div class="title">{{title}}</div>
	</div>
</template>

<script>
	export default{
		props: {
			title: {
				type: String,
				default: 'Button title'
			}
		},
		methods: {
			sendData(){
				this.$emit('click', true)
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";
	.button{
		max-width: 336px;
		border-radius: 2px;
		padding: 14px;
		cursor: pointer;
		z-index: 1;
		overflow: hidden;
		&:hover{
			&:after{
				left: 115%;
				transition: 0.4s;
			}
		}
		&:after{
			content: "";
			position: absolute;
			background: linear-gradient(90deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.0) 100%);
			width: 25%;
			left: -30%;
			height: 200%;
			transform: rotate(22.5deg);
		}
		&.__pluses{
			width: auto;
			&:after{
				background: linear-gradient(90deg, rgba(69,133,220,0.0) 0%, rgba(69,133,220,0.5) 50%, rgba(69,133,220,0.0) 100%);
			}
			&>.bg{
				background-color: #FAFAFA
			}
			&>.title{
				color: #252525;
				&:before{
					content: "";
					margin-left: 14px;
					margin-right: 8px;
					width: 20px;
					height: 18px;
					background-image: url("/static/img/plus.svg");
					background-repeat: no-repeat; 
					background-position: 0 0; 
					background-size: 100% 100%; 
				}
			}
		}
		&.__next{
			&:after{
				background: linear-gradient(90deg, rgba(69,133,220,0.0) 0%, rgba(69,133,220,0.5) 50%, rgba(69,133,220,0.0) 100%);
			}
			&>.bg{
				background-color: $white;
				box-shadow: 0px 5px 10px rgba(75,93,104,0.5);
			}
			&>.title{
				color: $blue_text;
				&:after{
					content: "";
					margin-left: 14px;
					width: 20px;
					height: 18px;
					background-image: url("/static/img/arrow_right.svg");
					background-repeat: no-repeat; 
					background-position: 0 0; 
					background-size: 100% 100%; 
				}
			}
		}
		&>.bg{
			height: 100%;
			width: 100%;
			position: absolute;
			top: 0;
			right: 0;
			background-color: $blue_l;
			border-radius: inherit;
		}
		&>.title{
			width: auto;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			color: $white;
			font-weight: 500;
			font-size: 17px;
			line-height: 24px;
		}
	}
</style>