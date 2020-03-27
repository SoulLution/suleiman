<template>
  <div class="main registrate">
    <form class="form">
      <div class="form-title">{{$languages.registrate.title}}</div>
      <div class="form-body">
        <div class="form-body-content">
          <div class="form-body-content-item" v-for="(member, i) in members">
            <div class="close" @click="removeMember" v-if="members.length > 1"><img src="/static/img/exit.svg"></div>
            <div class="form-body-content-item-pre">{{$languages.registrate.member}} {{i+1}}</div>
            <v-input :title="input.title" type="text" v-model="input.data" v-for="input in member"/>
          </div>
          <v-button class="__pluses" @click="addMember()" :title="$languages.registrate.member"/>

          <div class="form-body-content-about" v-html="$languages.registrate.about"></div>
          <div class="form-body-content-ending">{{$languages.registrate.ending}} <span>{{checkDate()}}</span> EUR</div>
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
        members: []
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
            if(!this.members[i][j].data){
              end = false
              break
            }
        if(end){
          this.$emit('sendAmount', this.amount)
          this.$emit('sendMembers', this.members)
          this.$router.push('/payment')
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

<style lang="scss" scoped>
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
      color: $blue_l;
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
</style>
