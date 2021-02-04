<template>
  <div class="main registrate">
    <form class="form" @submit.prevent="pay()">
      <div class="form-title">{{$languages.registrate.title}}</div>
      <div class="form-body">
        <div class="form-body-content">
          <div class="form-body-content-item" v-for="(member, i) in members">
            <div class="close" @click="removeMember" v-if="members.length > 1"><img src="/static/img/exit.svg"></div>
            <div class="form-body-content-item-pre">{{$languages.registrate.member}} {{i+1}}</div>
            <v-input :required="true" :title="input.title" type="text" v-model="input.data" v-for="input in member"/>
          </div>
          <v-button class="__pluses my-8" @click="addMember()" :title="$languages.registrate.member"/>
          <v-input :required="true" title="E-mail" type="email" v-model="email"/>

          <div class="form-flex-row my-8">
            <v-check-box v-model="check" :checked="check" />
            <p v-html="$languages.registrate.link"></p>
          </div>
        </div>
      </div>
      <div class="form-footer">
        <v-button :title="$languages.registrate.send" @click="pay()" />
        <div class="registrate-title">{{$languages.registrate.if_title}}</div>
        <a href="http://suleimanpartners.com" target="_blank" class="registrate-router">{{$languages.registrate.rout}}</a>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data: () => {
      return{
        amount: 0,
        members: [],
        email: '',
        check: false
      }
    },
    created(){
      this.addMember()
    },
    methods: {
      pay(){
        let end = true
        for(let i = 0; i < this.members.length; i++)
          for(let j = 0; j < this.members[i].length; j++)
            if(!this.members[i][j].data || !this.check || !this.email){
              end = false
              break
            }
        if(end){
        // this.$emit('setLoad', true)
          this.$router.push('/success')
        }
      },
      checkDate(){
        let end = 0, type
        for(let i = 0; i < this.members.length; i++){
          for(let j = 0; j < this.members.length; j++){
            if(i === j)
              continue
            else
              if(this.members[i][0].data === this.members[j][0].data)
                type = 1
              else
                type = 0
          }
          if(new Date().valueOf() >= 1592157600000)
            end += type ? 200 : 300
          else
            end += type ? 150 : 200 
        }
        this.amount = end
        return end
      },
      removeMember(index){
        this.members.splice(index, 1)
      },
      addMember(){
        this.members.push([
          {
            title: 'Наименование компании',
            data: this.members.length ? this.members[this.members.length-1][0].data : ''
          },
          {
            title: 'Фио',
            data: ''
          }
        ])
      }
    }
  }
</script>

<style lang="scss">
  @import "@/assets/main.scss";
  .registrate{
    padding: 15px 15px 40px;
    min-height: 100vh;
    justify-content: flex-start;
    background-color: $white;
    &-title{
      font-size: 16px;
      line-height: 22px;
      margin: 20px 0 10px;
      color: #828282;
    }
    &-router{
      width: auto;
      cursor: pointer;
      color: #2F80ED;
      font-weight: 800;
    }
  }
  .close{
    position: absolute;
    right: 0;
    top: 40px;
    width: auto;
    cursor: pointer;
    z-index: 1;
    &>img{
      width: 12px;
    }
  }
  p{
    margin-top: 0.5rem;
  }
</style>
