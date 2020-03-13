<template>
  <div class="main registrate">
    <form class="form">
      <div class="form-title">Регистрация на конференцию</div>
      <div class="form-body">
        <div class="form-body-content">
          <div class="form-body-content-item" v-for="(member, i) in members">
            <div class="form-body-content-item-pre">Участник {{i+1}}</div>
            <v-input :id="('input-' + ((Math.random() * 10000)^0) + '-data[' + ((Math.random() * 10000)^0) + ']')" :title="input.title" type="text" v-model="input.data" v-for="input in member"/>
          </div>
          <v-button class="__pluses" @click="addMember()" title="Участник"/>

          <div class="form-body-content-about">1 участник конференции 300 EUR, стоимость для 2 участника с одной компании 200 EUR.<br>При оплате до 15.6.2020 стоимость 1 участника 200 EUR для 2 участника с одной компании 150 EUR</div>
          <div class="form-body-content-ending">Итоговая сумма: <span>{{checkDate()}}</span> EUR</div>
        </div>
      </div>
      <div class="form-footer">
        <v-button title="Отправить" @click="pay()" />
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
  }
</style>
