<template>
  <div class="main index">

    <div class="main-content content">

      <div class="index-item __white">

        <div class="item-main">
          <div class="item-main-column">
            <div class="item-main-column-title">Первая европейская юридическая конференция </div>
            <div class="item-main-column-about">о защите торговых сделок и инвестиций в постсоветских республиках </div>
            <v-button class="web" title="Регистрация" />
          </div>
          <div class="item-main-column">
            <img class="item-main-column-img" src="static/img/main.png">
            <v-button class="mob" title="Регистрация" />
          </div>

        </div>

      </div>
      <div class="index-item __transparent">
        <div class="dot" :class="{'active': true}"></div>
      </div>

      <div class="index-item __transparent">
        <div class="item-main">
          <div class="item-main-timer">
            <div class="item-main-timer-time"><span>3</span>:</div>
            <div class="item-main-timer-date">Дни</div>
          </div>

        </div>
      </div>


      <div class="index-item __white" ref="item-0">
        <div class="item-title">Темы конференции:</div>
        <div class="item-main">
          
        </div>
      </div>

      <div class="index-item"></div>


      <div class="index-item __transaprent" ref="item-1"></div>

      <div class="index-item"></div>


      <div class="index-item __main_2" ref="item-3"></div>

      <div class="index-item __transpatent" ref="item-2"></div>

    </div>

  </div>
</template>

<script>
  export default {
    data: () => {
      return{
        types: [
          {
            number: 1,
            content: `ТОП 5  проблем, почему европейские инвестора не работают с рынком постсоветских республик.`
          },
          {
            number: 2,
            content: `Правовые основы сотрудничества Европейского союза со странами постсоветских республик в таможенной сфере.`
          },
          {
            number: 3,
            content: `ТОП 5 ответов на озвученные проблемы. Правовое регулирование иностранных инвестиций. Инвестиционные и налоговые преференции.`
          },
          {
            number: 4,
            content: `Когда и почему возникает потребность в защитных механизмах и охрана каких прав зарубежных инвесторов обеспечивается.`
          },
          {
            number: 5,
            content: `Механизмы защиты прав иностранных инвесторов 3 области:`
          },
          {
            number: 5.1,
            content: `Создание и управление совместной компанией.`
          },
          {
            number: 5.2,
            content: `Проверка партнеров путем получения информации из открытых источников. - Как проводить переговоры с партнерами. - Особенности составления договоров с партнерами. - Документальное оформление сделок.`
          },
          {
            number: 5.3,
            content: `Порядок рассмотрения судебных споров -Взыскание  задолженности и понуждение к исполнению договоров.`
          },
        ]
      }
    },
    created(){
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/main.scss";

</style>
