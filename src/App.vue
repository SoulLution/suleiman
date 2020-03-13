<template>
  <div id="app">

    <v-header :refs="refs"/>
    <v-popup :data="data" :popup="popup" @close="e => popup = e" />

    <router-view :amount="amount" @sendAmount="e => amount = e" @refs="addRefs" @popupsend="popupMessage" />
    <v-footer @refs="addRefs"/>
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
  		popup: false,
  		data: {},
      amount: 0,
      refs: {}
  	}
  },
  mounted(){
	},
  methods:{
    addRefs(e){
      for(let item in e) 
        this.$set(this.refs, item, e[item])
    },
  	popupMessage(e){
  		this.data = e
      this.popup = true
  	}
  }
}
</script>

<style lang="scss">
  @import '@/assets/main.scss';
</style>
