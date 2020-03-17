<template>
  <div id="app">

    <v-header :refs="refs"/>
    <v-popup :data="data" :popup="popup" @close="e => popup = e" />

    <router-view 
    :amount="amount" @sendAmount="e => amount = e"
    :members="members" @sendMembers="e => members = e"
    @refs="addRefs"
    @removeRefs="e => addRefs(e, true)"
    @popupsend="popupMessage" />
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
      members: [],
      refs: {}
  	}
  },
  mounted(){
	},
  methods:{
    addRefs(e, reverse){
      for(let item in e) 
        this.$set(this.refs, item, (reverse ? '' : e[item]))
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
