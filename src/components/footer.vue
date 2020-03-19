<template>
  <div class="footer" ref="item-4">
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
        ©suleimanpartners, 2020. All rights reserved.
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
          {
            img:'twitter.png',
            href: 'twitter.com'
          },
          {
            img:'instagram.png',
            href: 'instagram.com'
          }
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
  .footer{
    width: 100vw;
    background-color: $footer;
    z-index: 0;
    &-content{
      padding: 70px 16px;
      &-row{
        flex-direction: row;
        justify-content: space-between;
        margin: 30px 0;
        align-items: flex-start;
      }
      &-copy{
        padding-top: 24px;
        align-items: flex-start;
        border-top: 1px solid #DAE3F0;
        font-size: 12px;
        line-height: 180%;
        color: #212353;
      }
    }

    &-title{
      max-width: 500px;
      font-weight: 900;
      font-size: 40px;
      line-height: 54px;
      color: $blue_text;
      text-align: left;

    }
    &-buttons{
      width: auto;
      flex-direction: row;
      justify-content: space-between;
      &>div{
        width: 250px;
        margin-left: 20px;
      }
    }
    &-column{
      align-items: flex-start;
      &.center{
        max-width: 100vw;
        align-items: center;
        .footer-column-icons{
          justify-content: center;
        }
      }
      &-title{
        width: auto;
        margin-bottom: 12px;
      }
      &-childs{
        align-items: flex-start;
        &-child{
          flex-direction: row;
          width: auto;
          &>img{
            margin-right: 7px;
          }
          &>a{
            font-size: 16px;
            line-height: 35px;
            color: $blue_text;
            text-align: left;
            text-decoration: underline;
            &:hover{
              color: $blue_l;
            }
          }
        }
      }
      &-icons{
        flex-direction: row;
        justify-content: flex-start;
        &-icon{
          height: 50px;
          width: 50px;
          border-radius: 50%;
          background-color: #4A5C7830;
          margin-right: 14px;
          &:hover{
            background-color: $blue_l;
          }
          &>img{

          }
        }
      }
    }
  }

  @media screen and (max-width: 760px){
    .footer{
      &-content-row{
        flex-direction: column;
      }
      &-title{
        font-size: 24px;
        line-height: 32px;
        width: 75%;
        display: block;
        text-align: left;
      }
      &-buttons{
        flex-direction: column;
        &>div{
          margin: 12px 0;
        }
      }
      &-column{
        max-width: 250px;
        &-title{
          font-weight: 800;
          font-size: 16px;
          line-height: 24px;
        }
        &-childs-child>a{
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          overflow-wrap: break-word;
        }
      }
    }
  }
</style>
