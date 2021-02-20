<template>
  <div class="footer" ref="item-5">
    <div class="footer-content content">
      <div class="footer-content-row" v-if="$route.path === '/'">
        <div class="footer-title">{{$languages.footer.title}}</div>
        <div class="footer-buttons">
          <v-button :title="$languages.footer.buttons[0]" @click="$router.push('/registrate')" />
          <v-button class="__next" :title="$languages.footer.buttons[1]" @click="$router.push('/request')" />
        </div>
      </div>
      <div class="footer-content-row">
        <div class="footer-column" v-for="link in links" v-if="$route.path === '/'">
          <div class="footer-column-title">{{link.title}}</div>
          <div class="footer-column-childs">
            <div class="footer-column-childs-child" v-for="child in link.childs">
              <img :src="'/static/img/' + child.img" v-if="child.img">
              <a :href="child.href">{{child.name}}</a>
            </div>
          </div>
        </div>
        <div class="footer-column" :class="{'center': $route.path !== '/'}">
          <div class="footer-column-title" v-if="$route.path === '/'">{{$languages.footer.soc}}</div>
          <div class="footer-column-title" v-else><img src="/static/img/logo_min.png"></div>
          <div class="footer-column-icons">
            <a class="footer-column-icons-icon" :href="icon.href" v-for="icon in icons"><img :src="'/static/img/' + icon.img"></a>
          </div>
        </div>
      </div>
      <div class="footer-content-copy">
        <span>©suleimanpartners, 2020. All rights reserved.</span>
        <span>Developer by <a target="_blank" href="https://itscorpio.com">itscorpio.com</a></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return{
        icons: [
          {
            img:'facebook.png',
            href: 'facebook.com'
          },
          // {
          //   img:'twitter.png',
          //   href: 'twitter.com'
          // },
          // {
          //   img:'instagram.png',
          //   href: 'instagram.com'
          // }
        ],
        links: []
      }
    },
    created(){
      this.links = this.$languages.footer.links
    },
    mounted(){
      this.$emit('refs', this.$refs)
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/main.scss";
  
</style>
