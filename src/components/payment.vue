<template>
	<form ref="form" class="payment content" @submit.prevent="sendPay()">
		<div class="payment-title">{{$languages.payment.title}}</div>
		<div class="card" id="card">
			<div class="card-elem w-full">
				<div class="card-elem-title">{{$languages.payment.card[0]}}</div>
				<input class="stripe-element" required inputmode="numeric" ref="cardNumber" maxlength="19" v-model="number" placeholder="XXXX XXXX XXXX XXXX" data-cp="cardNumber">
		  </div>
		  <div class="card-elem">
		  	<div class="card-elem-title">{{$languages.payment.card[1]}}</div>
		  	<label class="stripe-element" for="month">
					<input inputmode="numeric" required ref="cardMonth" maxlength="2" max="12" id="month" v-model="month" placeholder="ММ" data-cp="expDateMonth">/
					<input inputmode="numeric" required ref="cardYear" maxlength="2" min="20" v-model="year" placeholder="ГГ" data-cp="expDateYear">
		  	</label>
		  </div>
		  <div class="card-elem">
		  	<div class="card-elem-title">{{$languages.payment.card[2]}}</div>
				<input class="stripe-element" required inputmode="numeric" ref="cardCvc" maxlength="4" v-model="cvc" placeholder="XXX" data-cp="cvv">
		  </div>
			<div class="card-elem w-full">
				<div class="card-elem-title">{{$languages.payment.card[3]}}</div>
				<input class="stripe-element upper" required v-model="name" placeholder="хххххххххххххххххххх">
		  </div>
		  <div class="card-images">
		  	<img src="/static/img/master_card.png">
		  	<img src="/static/img/visa.png">
		  </div>
    </div>
    <v-input class="input-pay" type="email" :required="true" v-model="email" title="E-mail" />
    <!-- <div class="sender">
	    <div class="checked" :class="{'active': check}" @click="check = !check"></div>
	    <div class="sender-title" @click="check = !check">Получить квитанцию на e-mail</div>
    </div> -->
    <input type="submit" style="display: none;" ref="send" @click="sendPay()">
		<v-button :title="$languages.payment.button" @click="$refs['send'].click()" />
	</form>
</template>

<script>
	export default {
		props: {
			members: {
				type: Array,
				default: () => {return []}
			}
		},
    data(){
      return {
      	check: false,
      	email: '',
      	complete: false,
	      number: '',
	      month: '',
	      year: '',
	      expiry: '',
				cvc: '',
				name: '',
      }
    },
		watch:{
			number(newData, oldData){
				if(!isNaN(newData.replace(/\s/g, ''))){
		    	this.number = newData
		    	if(this.number.length === 4 || this.number.length === 9 || this.number.length === 14)
		    		this.number += ' '
		    	if(this.number.length === 19)
		        this.$refs.cardMonth.focus()
		    }else{
		    	this.number = oldData
		    }
	    },
	    month(newData, oldData){
	    	if(!isNaN(newData)){
	    		if(newData[0]>2)
	    			newData[0] = 1
	    		if(newData[1])
	    			if(newData[0] == 1 && newData[1]>2)
		    			newData[1] = 2
		    	this.month = newData
		    	if(this.month.length === 2)
		        this.$refs.cardYear.focus()
	    	}
		    else
		    	this.cvc = oldData
	    },
	    year(newData, oldData){
	    	if(!isNaN(newData)){
	    		if(newData[0]<2)
	    			newData[0] = 2
		    	this.year = newData
		    	if(this.year.length === 2)
		        this.$refs.cardCvc.focus()
	    	}
		    else
		    	this.cvc = oldData
	    },
	    cvc(newData, oldData){
	    	if(!isNaN(newData))
		    	this.cvc = newData
		    else
		    	this.cvc = oldData
	    },
		},
    created(){
			console.log(this.members)
    	if(!this.members.price)
				this.$router.push('/request')
				this.email = this.members.email
				this.name = this.members.name
    },
    methods: {
  		secure3dRedirect(acsUrl, paReq, md) {
        let form = document.createElement("form");
        form.style = "display: none";
        form.method = "POST";
        form.action = acsUrl;

        let paReqElement = document.createElement("input");
        paReqElement.value = paReq;
        paReqElement.name = "PaReq";

        let mdElement = document.createElement("input");
        mdElement.value = md;
        mdElement.name = "MD";

        let termUrlElement = document.createElement("input");
        termUrlElement.value = 'http://62.151.182.98/api/orders/3d-secure-confirm/';
        termUrlElement.name = "TermUrl";

        form.appendChild(paReqElement);
        form.appendChild(mdElement);
        form.appendChild(termUrlElement);

        document.body.appendChild(form);
        form.submit();
      },
    	sendPay(){
    		this.$emit('setLoad', true)
    		const checkout = new cp.Checkout(
			    "pk_72ed675f591c1b3e39ac376c6b120",
			    this.$refs.form)
    		const result = checkout.createCryptogramPacket();
    		let data = {
					...this.members,
    			amount: this.members.price,
					email: this.email,
					name: this.name,
    			send_mail: true,
    		}
    		this.$axios.post('/orders/create', data)
    		.then(res => {
    			data = {
					cryptogram: result.packet,
					return_url: top.location.origin + '/success/'
				}
    			this.$axios.post('/orders/pay/' + res.data.ID, data)
	    		.then(res_1 => {
    				if(res_1.status === 202){
    					let acsUrl = res_1.acs_url;
						let paReq = res_1.pa_req;
						let md = res_1.transaction_id;

						this.secure3dRedirect(acsUrl, paReq, md);
    				}
    			})
	    		.catch(err_1 => {
	    			console.error(err_1.response)
	    			throw new Error(err_1)
	    		})
	    		.finally( () => this.$emit('setLoad', false))
    		})
    		.catch(err => {
    			this.$emit('setLoad', false)
    			console.error(err.response)
    			throw new Error(err)
    		})
		  },
    }
	}

</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";
	.checked{
		height: 16px;
		width: 16px;
		background-color: #efefef;
		border-radius: 5px;
		border: 1px solid #b3b3b3;
		cursor: pointer;
		&:hover{
			background-color: #c5c5c5;
		}
		&:after{
			content: "";
			width: 60%;
			height: 80%;
			position: absolute;
			background-size: 100% 100%;
			background-image: url(/static/img/check.svg);
			transform: scale(0);
			transition: 0.2s;
		}
		&.active , &.active:hover{
			transition: 0.2s;
			background-color: #2F82D2;
			border-color: #2F82D2;
			&:after{
				transform: scale(1);
			}
		}
	}
	.sender{
		flex-direction: row;
		justify-content: flex-start;
		margin: 20px 0 40px;
		&-title{
			margin-left: 12px;
			display: block;
			width: auto;
			color: #333333;
			font-weight: 500;
			font-size: 16px;
			line-height: 16px;
		}
	}
	.input-pay{
		background-color: #EFF2F7 !important;
	}
	.payment{
		padding-top: 50px;
		max-width: 580px;
		&-title{
			color: $blue_d;
			font-weight: 800;
			font-size: 32px;
			line-height: 44px;
		}
	}
	.card{
		background-color: #EFF2F7;
		border-radius: 20px;
		padding: 40px;
		margin: 24px 0;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		&-elem{
			margin: 12px 0;
			flex: 47.5% 0 0;
			align-items: flex-start;
			&.w-full {
			flex: 100% 0 0;
			}
			&-title{
				display: block;
				text-align: left;
				margin: 12px;
				width: auto;
				color: #333333;
				font-weight: 800;
				font-size: 16px;
				line-height: 16px;
			}
		}
		&-images{
			width: 100%;
			flex-direction: row;
			justify-content: flex-end;
			margin-top: 20px;
			&>img:first-child{
				margin-right: 12px;
			}
		}
		.stripe-element{
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			border: unset;
			width: calc(100% - 32px);
			outline: none;
			padding: 0 16px;
			height: 84px;
			border-radius: 5px;
			background-color: $white;
			font-size: 16px;
			line-height: 16px;
			&>input{
				font-size: 16px;
				line-height: 16px;
				text-align: center;
				width: 32px;
				border: unset;
				outline: none;
			}
		}
	}
	.upper{
		text-transform: uppercase;
	}
</style>