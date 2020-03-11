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
                id: 1,
                name: 'Казахстан'
              },
              {
                id: 2,
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
                id: 1,
                name: 'Сельское хозяйство'
              },
              {
                id: 2,
                name: 'Промышленность'
              },
              {
                id: 3,
                name: 'Фармацевтика и медицина'
              },
              {
                id: 4,
                name: 'Туризм'
              },
              {
                id: 5,
                name: 'Транспорт'
              },
              {
                id: 6,
                name: 'Нефтехимия'
              },
              {
                id: 7,
                name: 'Энергетика'
              },
              {
                id: 8,
                name: 'Логистика'
              },
              {
                id: 9,
                name: 'Инновации и высокие технологии'
              },
              {
                id: 10,
                name: 'Недвижимость и строительство'
              },
              {
                id: 11,
                name: 'Продажа бизнеса'
              },
              {
                id: 12,
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
                id: 1,
                name: 'Финансовые'
              },
              {
                id: 2,
                name: 'Земельные'
              },
              {
                id: 3,
                name: 'Акции'
              },
              {
                id: 4,
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
                id: 1,
                name: 'Идея'
              },
              {
                id: 2,
                name: 'Разработка'
              },
              {
                id: 3,
                name: 'Исполнение'
              },
              {
                id: 4,
                name: 'Завершение'
              },
              {
                id: 5,
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
    padding: 15px 15px 0;
    min-height: 100vh;
    justify-content: flex-start;
    background-color: $white;
  }
</style>
