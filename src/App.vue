<template>
  <div id="app">

    <v-header />
    <v-popup :data="data" :popup="popup" @close="e => popup = e" />

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
  		popup: false,
  		data: {}
  	}
  },
  mounted(){
	},
  methods:{
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
