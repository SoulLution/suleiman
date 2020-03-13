<template>
  <div class="header">
    <div class="header-content content">
      <div class="header-content-pre">
        
        <div class="header-content-logo logo" @click="$router.push('/')">
          <img src="static/img/logo.png">
          <img src="static/img/suleiman.svg">
        </div>
        
        <div class="header-content-links links">
          <div class="links-link" v-for="(link, i) in links" @click="comeToElem('item-' + i)">{{link.name}}</div>
        </div>
      </div>
      <div class="header-content-languages languages">
        <div class="languages-select" @click="open = !open"><img :src="'static/img/lang_' + current_lang + '.png'">{{langs[current_lang]}}<img :class="{'open': open}" src="static/img/arrow_min.svg"></div>
        <div class="languages-selector" :class="{'open': open}">
          <div class="languages-selector-item" :class="{'active': current_lang === i}" v-for="(lang, i) in langs" @click="changeLang(i)">
            <img :src="'static/img/lang_' + i + '.png'">{{lang}}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    props: {
      refs: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    data: () => {
      return{
        links: [
          {
            name: 'Конференция'
          },
          {
            name: 'Докладчики'
          },
          {
            name: 'Спонсоры/Партнеры'
          },
          {
            name: 'Инвестиционные проекты'
          },
          {
            name: 'Контакты'
          },
        ],
        langs: ['ru', 'kz'],
        open: false,
        current_lang: localStorage.getItem('language') || 0
      }
    },
    watch:{
      $route(to, from){
        document.scrollingElement.scrollTo({
          top: 0,
        })
      }
    },
    methods: {
      comeToElem(ref, index){
        console.log(this.refs)
        let top
        if(index || index === 0)
          top = this.refs[ref][index].offsetTop
        else
          top = this.refs[ref].offsetTop
        if(top || top === 0)
          window.scrollTo({
            top: top + (document.scrollingElement.clientHeight / 5),
            behavior: 'smooth'
          });
      },
      changeLang(index){
        this.open = false
        this.current_lang = index
        localStorage.setItem('language', index)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/main.scss";
  .header{
    width: 100vw;
    background-color: $blue_d;
    position: sticky;
    top: 0;
    z-index: 5;
    &-content{
      height: 70px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      &-pre{
        width: auto;
        flex-direction: row;
        justify-content: flex-start;
        &-logo{
        }
        &-links{
        }
      }
      &-languages{

      }
    }
  }
  .logo{
    flex-direction: row;
    width: auto;
    margin-right: 18px;
    cursor: pointer;
    &>img{
      &:first-child{
        padding: 0 15px;
        margin-right: 12px;
        border-left: 2px solid $orange;
        border-right: 2px solid $orange;
      }
    }
  }
  .links{
    flex-direction: row;
    &-link{
      width: auto;
      cursor: pointer;
      height: 95px;
      padding: 18px;
      font-weight: 300;
      font-size: 16px;
      line-height: 22px;
      color: $white;
      &:hover{

      }
    }
  }
  .languages{
    width: auto;
    font-weight: 800;
    font-size: 16px;
    line-height: 22px;
      justify-content: flex-start;
    color: $white;
    &-select{
      flex-direction: row;
      width: auto;
      padding: 5px;
      cursor: pointer;
      &>img{
        transition: 0.3s;
        &:first-child{
          margin-right: 8px
        }
        &:last-child{
          margin-left: 8px
        }
        &.open{
          transform: rotate(180deg);
        }
      }
    }
    &-selector{
      height: 100vh;
      max-height: 0;
      position: absolute;
      bottom: -5px;
      transform: translateY(100%);
      transition: 0.3s;
      overflow: hidden;
      justify-content: flex-start;
      &.open{
        max-height: 30vh;
      }
      &-item{
        flex-direction: row;
        padding: 5px 23px 5px 5px;
        background-color: $blue_d;
        border: unset;
        transition: 0.3s;
        cursor: pointer;
        &>img{
          margin-right: 8px
        }
        &.active{
          background-color: $white;
          color: $blue_d;

        }
      }
    }
  }
  @media screen and (max-width: 760px){
    .logo{
      &>img{
        width: 30%;
        &:first-child{
          padding: 0 7px;
        }
      }
    }
    .links{
      display: none;
    }
  }
</style>
