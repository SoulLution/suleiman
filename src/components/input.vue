<template>
	<label class="input" :for="id"  @click="type === 'select' ? checkInp(!focus) : ''">
		<div class="input-title" :class="{ 'active': focus || data }">{{title}}</div>
		<input class="input-input" :required="required" :type="type" :id="id" @focus="checkInp(true)" @blur="checkInp(false)" @keyup="$emit('input', data)" v-model="data" v-if="type !== 'select' && type !== 'textarea'">
		<div class="input-select" :class="{ 'active': focus }" :id="id" v-else-if="type === 'select'">{{data}}</div>
		<textarea class="input-textarea" :id="id" :maxlength="maxlength" @focus="checkInp(true)" @blur="checkInp(false)" @keyup="$emit('input', data)" v-model="data" v-else>
			
		</textarea>
		<span class="maxlength" v-if="maxlength">{{value.length}} / {{ maxlength }}</span>
		<div class="input-childs" v-if="childs.length" :class="{ 'active': focus }">
			<div class="input-childs-content">
				<div class="input-childs-content-item" @click="changeSelect(item)" v-for="item in childs">{{item.name}}</div>
			</div>
		</div>
	</label>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: 'Input title'
			},
			max: {
				type: [Number, String],
				defalt: ''
			},
			maxlength: {
				type: [Number, String],
				defalt: ''
			},
			id: {
				type: [Number, String],
				default: this._uid
			},
			type: {
				type: String,
				default: 'text'
			},
			childs: {
				type: Array,
				default(){
					return []
				}
			},
			required: {
				type: Boolean,
				default: false,
			},
			value: {
				type: [Number, String],
				default: ''
			}
		},
		watch:{
			value(newData){
				this.data = newData
			},
			data(newData){
				if(this.max)
					if(newData.length >= this.max)
			// 			if(this.type === 'number'){
			// 				if(isNaN(parseInt(newData[newData.length-1]))){
			// 					this.data = newData.substr(0, newData.length-1)
			// 				}
			// 			}
			// 			this.$emit('input', this.data)

			// 	}else
					this.data = this.data.substr(0, this.max)
			}
		},
		data(){
			return {
				data: this.value,
				focus: false
			}
		},
		methods:{
			changeSelect(item){
				this.$emit('input', item.id)
				this.data = item.name
			},
			closeSelect(){
				if(this.focus)
					setTimeout(()=>{this.checkInp(false)},0)
			},
			checkInp(type){
				this.focus = type
				if(this.type === 'select')
				
					if(type)
						document.addEventListener('click', ()=>this.closeSelect(), true)
					else 
						document.removeEventListener('click', ()=>this.closeSelect(), true)
				
			}
		}
	}
</script>

<style lang="scss" scoped>

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
	  -webkit-appearance: none;
	}
	input[type=number] {
	  -moz-appearance: textfield;
	}


	.maxlength{
		position: absolute;
		right: 0.5rem;
		bottom: 0.5rem;
		font-size: 12px;
		line-height: 16px;
		color: #828282;

	}
	.input{
		padding: 22px 16px;
		background: #FAFAFA;
		border-radius: 2px;
		justify-content: flex-start;
		align-items: flex-start;
		cursor: text;
		margin: 10px 0;
		// box-shadow: 0px 0px 15px #00000050;
		&-title{
			position: absolute;
			display: block;
			width: auto;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			font-size: 16px;
			line-height: 16px;
			color: #828282;
			transition: 0.3s;
			&.active{
				font-size: 12px;
				transform: translate(-5%, -100%);
			}
		}
		&-input, &-textarea, &-select{
			resize: unset;
			border: unset;
			background-color: unset;
			width: 100%;
			outline: none;
			font-size: 16px;
			line-height: 16px;
		}
		&-textarea{
			height: 100px;
		}
		&-select{
			height: 16px;
			display: block;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			text-align: left;
			&:after{
				content: "";
				position: absolute;
				right: 0;
				top: 50%;
				height: 8px;
				width: 10px;
				background-image: url(/static/img/select.svg);
				background-repeat: no-repeat;
				transition: 0.3s;
			}
			&.active{

				&:after{
					transform: rotate(180deg);
				}
			}
		}
		&-childs{
			position: absolute;
			left: 0;
			top: 100%;
			z-index: 2;
			// height: 40vh;
			max-height: 0px;
			transition: 0.3s;
			&.active{
				height: auto;
				max-height: 40vh;
				.input-childs-content{
					border: 1px solid #8a8a8a;

				}
			}
			&-content{
				justify-content: flex-start;
				background-color: #ffffff;
				border-radius: 15px;
				height: 100%;
				max-height: 40vh;
				overflow-y: auto;
				overflow-x: hidden;
        box-shadow: 0px 0px 15px #00000050;
				&-item{
					padding: 16px 12px;
					display: block;
					text-align: left;
					border-top: 1px solid #cacaca;
					cursor: pointer;
					&:hover{
						color: #4585DC;
						background-color: #4585DC15;
					}
					&:first-child{
						border: unset;
					}
				}
			}
		}
	}
	@media screen and (max-width: 760px){
		.input{
			&-childs{
				position: fixed;
				left: 0;
				top: 0;
				z-index: 10;
				height: 100vh;
				width: 100vw;
				background-color: #00000050;
				transition: unset;
				&.active{
					height: 100vh;
					max-height: 100vh;
				}
				&-content{
					justify-content: flex-start;
					background-color: #ffffff;
					border-radius: 15px;
					height: auto;
					max-height: 80%;
					width: 80%;
					&-item{
						padding: 16px 12px;
						display: block;
						text-align: left;
						border-top: 1px solid #cacaca;
						cursor: pointer;
						&:hover{
							color: #4585DC;
							background-color: #4585DC15;
						}
						&:first-child{
							border: unset;
						}
					}
				}
			}
		}
	}
</style>