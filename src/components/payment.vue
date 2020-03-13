<template>
	<div class="payment">
		<div class="payment-title">Оплата</div>
		<div class="card" id="card">
			<div class="card-elem">
				<div class="card-elem-title">Номер карты</div>
				<!-- <div class="card-number" id="card-elem1" @change="number = $event.complete"></div> -->
				<card-number class="stripe-element card-number"
		      ref="cardNumber"
		      :stripe="stripeAPIToken"
		      :options="options"
		      @change="number = $event.complete"
		    />
		  </div>
		  <div class="card-elem">
		  	<div class="card-elem-title">Срок карты</div>
				<!-- <div class="card-number" id="card-elem2" @change="expiry = $event.complete"></div> -->
		    <card-expiry class="stripe-element card-expiry"
		      ref="cardExpiry"
		      :stripe="stripeAPIToken"
		      :options="options"
		      @change="expiry = $event.complete"
		    />
		  </div>
		  <div class="card-elem">
		  	<div class="card-elem-title">CVV/ССV</div>
				<!-- <div class="card-number" id="card-elem3" @change="cvc = $event.complete"></div> -->
		    <card-cvc class="stripe-element card-cvc"
		      ref="cardCvc"
		      :stripe="stripeAPIToken"
		      :options="options"
		      @change="cvc = $event.complete"
		    />
		  </div>
		  <div class="card-images">
		  	<img src="/static/img/master_card.png">
		  	<img src="/static/img/visa.png">
		  </div>
    </div>
    <v-input class="input-pay" type="email" v-model="email" title="E-mail" />
    <div class="sender">
	    <div class="checked" :class="{'active': check}" @click="check = !check"></div>
	    <div class="sender-title" @click="check = !check">Получить квитанцию на e-mail</div>
	    </div>
		<v-button title="Опталить" @click="sendPay()" />
	</div>
</template>

<script>
	import { CardNumber, CardExpiry, CardCvc } from 'vue-stripe-elements-plus'
	var stripe = null
	export default {
		props: {
			amount: {
				type: [Number, String],
				default: 0
			}
		},
	  components: { CardNumber, CardExpiry, CardCvc },
		watch:{
	    number () { this.update() },
	    expiry () { this.update() },
	    cvc () { this.update() }
		},
    data(){
      return {
      	check: false,
      	email: '',
      	complete: false,
	      number: false,
	      expiry: false,
	      cvc: false,
	      ip: null,
	      currency: 'EUR',
	      options: {
	      	// locale: 'ru',
	      	classes: {
	      		// base: 'card-elem'
	      	},
	      	style: {
				    base: {
				      iconColor: '#c4f0ff',
				      color: '#000000',
				      fontWeight: 500,
				      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
				      fontSize: '16px',
				      fontSmoothing: 'antialiased',
				      '::placeholder': {
				        color: '#828282',
				      }
				    },
				    invalid: {
				      iconColor: '#eb1c26',
				      color: '#eb1c26',
				    },
				  }
	      },
	      stripeAPIToken: 'pk_test_Qd6D3hStD7MKiWxL4SurhdT700ZpZtbrZU',
      }
    },
    created(){
    	if(!this.amount)
    		this.$router.push('/')
    },
    mounted(){

			stripe = require('stripe')(
				// 'pk_test_Qd6D3hStD7MKiWxL4SurhdT700ZpZtbrZU'
				'sk_test_MeqEN0B7GVZlba4UpIZkFoZt00rrUqF2yb'
				);

			(async ()=> {
		    console.log('popal')
			  let paymentIntent = await 
			  stripe.paymentMethods.create({
			    amount: this.amount,
			    currency: this.currency,
			    metadata: {integration_check: 'accept_a_payment'},
			  })
			  .then(res => console.log('res', res))
				console.log(paymentIntent)
		    console.log('popal')
			})()
			stripe = Stripe('pk_test_Qd6D3hStD7MKiWxL4SurhdT700ZpZtbrZU')


  		let elements = stripe.elements();
  		// console.log(elements.create()._proto)
  		// let card = null
  		// card = elements.create("cardNumber", this.options);
  		// card.mount("#card-elem1");
  		// card = elements.create("cardExpiry", this.options);
  		// card.mount("#card-elem2");
  		// card = elements.create("cardCvc", this.options);
  		// card.mount("#card-elem3");

  		this.$axios.post('http://ip-api.com/json')
  		.then(res => this.ip = res.data.query)
  		.catch(err => {
  			console.error(err)
  			throw new Error(err)
  		})    	
    },
    methods: {
    	update () {
	      this.complete = this.number && this.expiry && this.cvc
	      if (this.number) {
	        if (!this.expiry) {
	          this.$refs.cardExpiry.focus()
	        } else if (!this.cvc) {
	          this.$refs.cardCvc.focus()
	        }
	      } else if (this.expiry) {
	        if (!this.cvc) {
	          this.$refs.cardCvc.focus()
	        } else if (!this.number) {
	          this.$refs.cardNumber.focus()
	        }
	      }
	    },
    	sendPay(){
    		console.log('popal')


    		var widget = new cp.CloudPayments({language: "ru-RU"});
		    widget.charge({ // options
            publicId: 'test_api_00000000000000000000001',  //id из личного кабинета
            description: 'Пример оплаты (деньги сниматься не будут)', //назначение
            amount: this.amount, //сумма
            currency: this.currency, //валюта
            accountId: this.email, //идентификатор плательщика (необязательно)
            skin: "modern", //дизайн виджета
        },
        function (options) { // success
            //действие при успешной оплате
        },
        function (reason, options) { // fail
            //действие при неуспешной оплате
        });


    	// 	const paymentIntent = await stripe.paymentIntents.create({
			  //   amount: 1099,
			  //   currency: this.currency,
			  //   payment_method_types: ['card'],
			  //   // metadata: {integration_check: 'accept_a_payment'},
			  // })

			  // console.log(paymentIntent)

			   // stripe.confirmCardPayment('clientSecret', {
				  //   payment_method: {
				  //     card: {card_number: this.number, card_expiry: this.expiry, card_cvc: this.cvc},
				  //     billing_details: {
				  //       name: 'Jenny Rosen'
				  //     }
				  //   }
				  // })
				  // .then(res => {
				  //   if (res.error)
				  //     console.log(res.error.message)
				  //   else
				  //     if (res.paymentIntent.status === 'succeeded') {
				  //     }
				  // })
				  // .catch(err => {
	    	// 		console.error(err)
	    	// 		throw new Error(err)
	    	// 	})


    		// this.$axios.post('https://api.cloudpayments.ru/test')
    		// .then(res => console.log(res))
    		// .catch(err => {
    		// 	console.error(err)
    		// 	throw new Error(err)
    		// })



    	// 	const paymentIntent = await stripe.paymentIntents.create({
			  //   amount: 0,
			  //   currency: this.currency
			  // });
    	// 	console.log(paymentIntent)
    	// 	console.log('popal')
    	// 	stripe.paymentMethods.create({
			  //   amount: 0,
			  //   currency: this.currency,
			  //   card: {
				 //    number: this.number, 
				 //    expiry: this.expiry, 
				 //    cvc: this.cvc
				 //  }
			  //   // Verify your integration in this guide by including this parameter
			  //   // metadata: {integration_check: 'accept_a_payment'},
			  // },
			  // (err, paymentMethod) => {
			  // 	console.log(err)
			  // 	console.log(paymentMethod)
			  // }
			  // )
    		// striple.createToken({card_number: this.number, card_expiry: this.expiry, card_cvc: this.cvc}).then(data => {
    		// 	if(data.token)
		    // 		striple.paymentRequest({
		    // 			token: data.token,
		    // 			amount: 0,
		    // 			currency: this.currency
		    // 		})
		    // 		.then(res => console.log(res))
		    // 		.catch(err => {
		    // 			console.error(err)
		    // 			throw new Error(err)
		    // 		})
    		// })
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
			&:first-child{
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
		&-number{
		}
		&-expiry{
		}
		&-cvc{
		}
		.stripe-element{
			padding: 22px 16px;
			height: 60px;
			border-radius: 5px;
			background-color: $white;
			font-size: 16px;
			line-height: 16px;
		}
	}
</style>