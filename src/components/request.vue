<template>
  <div class="main request">
    <form class="form">
      <div class="form-title">Форма заявки</div>
      <div class="form-body">
        <div class="form-body-content">
          <div class="form-body-content-item" v-for="(input, i) in inputs">
            <v-input :id="('input-' + ((Math.random() * 10000)^0) + '-data[' + ((Math.random() * 10000)^0) + ']')":childs="input.childs" :title="input.title" :type="input.type" v-model="input.data"/>
          </div>
        </div>
      </div>
      <div class="form-footer">
        <v-button title="Отправить"/>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data: () => {
      return{
        inputs: [
          {
            title: 'Наименование компании',
            type: 'text',
            data: ''
          },
          {
            title: 'Страна',
            type: 'select',
            data: '',
            childs: [
              {
                id: 'Казахстан',
                name: 'Казахстан'
              },
              {
                id: 'Россия',
                name: 'Россия'
              },
            ]
          },
          {
            title: 'Отрасль',
            type: 'select',
            data: '',
            childs: [
              {
                id: 'Сельское хозяйство',
                name: 'Сельское хозяйство'
              },
              {
                id: 'Промышленность',
                name: 'Промышленность'
              },
              {
                id: 'Фармацевтика и медицина',
                name: 'Фармацевтика и медицина'
              },
              {
                id: 'Туризм',
                name: 'Туризм'
              },
              {
                id: 'Транспорт',
                name: 'Транспорт'
              },
              {
                id: 'Нефтехимия',
                name: 'Нефтехимия'
              },
              {
                id: 'Энергетика',
                name: 'Энергетика'
              },
              {
                id: 'Логистика',
                name: 'Логистика'
              },
              {
                id: 'Инновации и высокие технологии',
                name: 'Инновации и высокие технологии'
              },
              {
                id: 'Недвижимость и строительство',
                name: 'Недвижимость и строительство'
              },
              {
                id: 'Продажа бизнеса',
                name: 'Продажа бизнеса'
              },
              {
                id: 'Другое',
                name: 'Другое'
              }
          ]
          },
          {
            title: 'Требуемые инвестиции:',
            type: 'textarea',
            data: ''
          },
          {
            title: 'Тип инвестиций',
            type: 'select',
            data: '',
            childs: [
              {
                id: 'Финансовые',
                name: 'Финансовые'
              },
              {
                id: 'Земельные',
                name: 'Земельные'
              },
              {
                id: 'Акции',
                name: 'Акции'
              },
              {
                id: 'Интелектуальные',
                name: 'Интелектуальные'
              }
            ]
          },
          {
            title: 'Стадия проекта:',
            type: 'select',
            data: '',
            childs: [
              {
                id: 'Идея',
                name: 'Идея'
              },
              {
                id: 'Разработка',
                name: 'Разработка'
              },
              {
                id: 'Исполнение',
                name: 'Исполнение'
              },
              {
                id: 'Завершение',
                name: 'Завершение'
              },
              {
                id: 'Реализация',
                name: 'Реализация'
              }
            ]
          },
          {
            title: 'Описание',
            type: 'textarea',
            data: ''
          }
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
  .request{
    padding: 15px 15px 40px;
    min-height: 100vh;
    justify-content: flex-start;
    background-color: $white;
  }
</style>
