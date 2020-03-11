<template>
  <div class="main index">

    <div class="main-content content">

      <div class="index-item __white">
        <div class="content">
          <div class="item-main">
            <div class="item-main-column">
              <div class="item-main-column-title">Первая европейская юридическая конференция </div>
              <div class="item-main-column-about">о защите торговых сделок и инвестиций в постсоветских республиках </div>
              <v-button class="web" title="Регистрация" @click="$router.push('/registrate')" />
            </div>
            <div class="item-main-column">
              <img class="item-main-column-img" src="static/img/main.png">
              <v-button class="mob" title="Регистрация" @click="$router.push('/registrate')" />
            </div>
          </div>
        </div>

      </div>
      <div class="index-item __transparent">
        <div class="content">
          <div class="dot" :class="{'active': true}"></div>
        </div>
      </div>

      <div class="index-item __transparent">
        <div class="content">
          <div class="item-main">
            <div class="item-main-timer">
              <div class="item-main-timer-col">
                <div class="item-main-timer-col-time"><span>{{now.days}}</span>:</div>
                <div class="item-main-timer-col-date">Дни</div>
              </div>
              <div class="item-main-timer-col">
                <div class="item-main-timer-col-time"><span>{{checkTime(now.hours)}}</span>:</div>
                <div class="item-main-timer-col-date">Часы</div>
              </div>
              <div class="item-main-timer-col">
                <div class="item-main-timer-col-time"><span>{{checkTime(now.minuts)}}</span>:</div>
                <div class="item-main-timer-col-date">Минуты</div>
              </div>
              <div class="item-main-timer-col">
                <div class="item-main-timer-col-time"><span>{{checkTime(now.seconds)}}</span></div>
                <div class="item-main-timer-col-date last">Секунды</div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="index-item __white" ref="item-0">
        <div class="content">
          <div class="item-title">Темы конференции:</div>
          <div class="item-main">
            <div class="item-main-col">
              <div class="item-main-col-type" v-for="(type, i) in types" v-if="i < types.length/2">
                <div class="item-main-col-type-number">{{type.number}}</div>
                <div class="item-main-col-type-content">{{type.content}}</div>
              </div>
            </div>
            <div class="item-main-col">
              <div class="item-main-col-type" v-for="(type, i) in types" v-if="i >= types.length/2">
                <div class="item-main-col-type-number" :class="{'float': type.number * 10 % 10 !== 0 }">{{type.number}}</div>
                <div class="item-main-col-type-content" :class="{'float': type.number * 10 % 10 !== 0 }">{{type.content}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="index-item __bg">
        <div class="content">
          <div class="item-title">Кому это интересно</div>
          <div class="item-main">
            <div class="item-main-col cell-4">
              <img class="item-main-col-svg" src="static/img/arrow_down.svg">
              <div class="item-main-col-svg_about">Для Европейских компаний, работающих на Евразийском рынке и желающих усилить свою бизнес позицию.</div>
            </div>
            <div class="item-main-col cell-4">
              <img class="item-main-col-svg" src="static/img/arrow_down.svg">
              <div class="item-main-col-svg_about">Для начинающих и планирующих работать на Евразийском рынке.</div>
            </div>
            <div class="item-main-col cell-4">
              <img class="item-main-col-svg" src="static/img/arrow_down.svg">
              <div class="item-main-col-svg_about">Для тех, кому необходимо получить ответ в спорной ситуации.</div>
            </div>
          </div>
        </div>
      </div>


      <div class="index-item __transaprent" ref="item-1">
        <div class="content">
          <img class="item-logo" src="static/img/title_0.svg">
          <div class="item-title">Cпикеры конференции</div>
          <div class="item-main">
            <div class="item-main-cell cell-4" v-for="speaker in speakers">
              <div class="item-main-cell-body">
                <div class="item-main-cell-body-ava" @click="setPopup(speaker)"><img :src="'/static/img/'+speaker.ava" v-if="speaker.ava"></div>
                <div class="item-main-cell-body-fio">{{speaker.fio}}</div>
                <div class="item-main-cell-body-speciality">{{speaker.speciality}}</div>
              </div>
            </div>
          </div>
          <v-button title="Все спикеры" />
        </div>
      </div>

      <div class="index-item __bg __blue">
        <div class="content">
          <div class="item-title">ПРИЧИНы ПОСЕТИТЬ КОНФЕРЕНЦИЮ</div>
          <div class="item-main">
            <div class="item-main-col cell-3">
              <img class="item-main-col-svg" src="static/img/cause_0.svg">
              <div class="item-main-col-svg_about">Насыщенная программа конференции</div>
            </div>
            <div class="item-main-col cell-3">
              <img class="item-main-col-svg" src="static/img/cause_1.svg">
              <div class="item-main-col-svg_about">Уникальная площадка для поиска ответов</div>
            </div>
            <div class="item-main-col cell-3">
              <img class="item-main-col-svg" src="static/img/cause_2.svg">
              <div class="item-main-col-svg_about">Площадка для корпоративных коммуникаций</div>
            </div>
            <div class="item-main-col cell-3">
              <img class="item-main-col-svg" src="static/img/cause_3.svg">
              <div class="item-main-col-svg_about">Атмосфера  по-настоящему живого и полезного общения</div>
            </div>
          </div>
        </div>
      </div>


      <div class="index-item __main_2" ref="item-3">
        <div class="content">
          <img class="item-logo" src="static/img/title_1.svg">
          <div class="item-title">Инвестиционные проекты</div>
          <div class="item-main">
            <div class="item-main-cell cell-2" v-for="(project, i) in projects">
              <div class="item-main-cell-body">
                <div class="item-main-cell-body-project"><img :src="`/static/img/project_${i}.png`"></div>
                <div class="item-main-cell-body-fio">{{project.name}}</div>
              </div>
            </div>
          </div>
          <div class="item-link">Вы можете разместить свои инвестпроекты на сайте. Свяжитесь с нами <a>conference@suleimanpartners.com</a></div>
          <v-button title="Связаться с нами" @click="$router.push('/request')" />
        </div>
      </div>

      <div class="index-item __transpatent" ref="item-2">
        <div class="content">
          <img class="item-logo" src="static/img/title_2.svg">
          <div class="item-title">Спонсоры/Партнеры</div>
          <div class="item-main">
            <div class="item-main-cell cell-4 __min" v-for="sponsor in sponsors">
              <div class="item-main-cell-body">
                <div class="item-main-cell-body-sponsor"><img :src="'/static/img/'+sponsor.logo"></div>
              </div>
            </div>
          </div>
          <v-button title="Стать партнером" @click="$router.push('/request')" />
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    data: () => {
      return{
        end_time: new Date(new Date().valueOf() + (1000 * 60 * 59 * 24 * 7)),
        now: {days: 0, hours: 0, minuts: 0, seconds: 0},
        sponsors: [
          {
            logo: 'sponsor_0.png'
          },
          {
            logo: 'sponsor_1.png'
          },
          {
            logo: 'sponsor_2.png'
          },
          {
            logo: 'sponsor_2.png'
          },
          {
            logo: 'sponsor_0.png'
          },
          {
            logo: 'sponsor_1.png'
          },
          {
            logo: 'sponsor_1.png'
          },
          {
            logo: 'sponsor_2.png'
          },
          {
            logo: 'sponsor_0.png'
          }
        ],
        projects: [
          {
            name: 'Сельское хозяйство'
          },
          {
            name: 'Промышленность'
          },
          {
            name: 'Фармацевтика и медицина'
          },
          {
            name: 'Туризм'
          },
          {
            name: 'Транспорт'
          },
          {
            name: 'Нефтехимия'
          },
          {
            name: 'Энергетика'
          },
          {
            name: 'Логистика'
          },
          {
            name: 'Инновации и высокие технологии'
          },
          {
            name: 'Недвижимость и строительство'
          },
          {
            name: 'Продажа бизнеса'
          },
          {
            name: 'Другое'
          }
        ],
        speakers: [
          {
            fio: 'Жангельды Сулейманов',
            ava: '',
            speciality: 'CEO международного холдинга PayBox.money',
            about: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          },
          {
            fio: 'Максим Тафинцев',
            ava: '',
            speciality: 'Специализация',
            about: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          },
          {
            fio: 'Максим Черешнев',
            ava: '',
            speciality: 'Специализация',
            about: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          },
          {
            fio: 'Дариуш',
            ava: '',
            speciality: '',
            about: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          },
          {
            fio: 'представитель МФЦА',
            ava: '',
            speciality: '',
            about: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          },
          {
            fio: 'Мартина',
            ava: '',
            speciality: '',
            about: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          }
        ],
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
    async created(){
      this.now.seconds = this.end_time.getSeconds() - new Date().getSeconds()
      this.now.minuts = this.end_time.getMinutes() - new Date().getMinutes() - 11
      this.now.hours = this.end_time.getHours() - new Date().getHours()
      this.now.days = this.end_time.getDate() - new Date().getDate()
      if(this.now.seconds < 0){
        this.now.seconds += 60
        this.now.minuts--
      }
      if(this.now.minuts < 0){
        this.now.minuts += 60
        this.now.hours--
      }
      if(this.now.hours < 0){
        this.now.hours += 24
        this.now.days--
      }
      let inter = setInterval(()=>{
        if(this.now.seconds <= 0){
          this.now.seconds = 59
          if(this.now.minuts <= 0){
            this.now.minuts = 59
            if(this.now.hours <= 0){
              this.now.hours = 23
              if(this.now.days <= 0){
                this.now.days = 0
                this.now.hours = 0
                this.now.minuts = 0
                this.now.seconds = 0
                clearInterval(inter)
              }
              else
                this.now.days --
            }
            else
              this.now.hours --
          }
          else
            this.now.minuts --
        }
        else
          this.now.seconds--
      },1000)
    },
    methods: {
      setPopup(item){
        this.$emit('popupsend', item)
      },
      checkTime(time){
        return time >= 10 ? time : '0' + time;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/main.scss";

  .index{
    &-item{
      width: 100vw;
      padding: 24px 0 40px;
      &.__white{
        background-color: $white;
      }
      &.__transparent{
        background-color: transparent;
      }
      &.__bg{
        z-index: 1;
        &:before{
          content: "";
          position: absolute;
          background-color: rgba(66, 40, 25, 0.65);
          backdrop-filter: blur(5px);
          z-index: 0;
          width: 100vw;
          height: 100%;
        }
        &:after{
          content: "";
          position: absolute;
          width: 100vw;
          height: 100%;
          z-index: -1;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          background-image: url(/static/img/bg_0.png);
          background-attachment: fixed;
        }
        &.__blue{
          &:before{
            background-color: rgba(2, 56, 86, 0.68);
          }
          &:after{
            background-image: url(/static/img/bg_1.png);
          }
        }
        .item{
          &-title{
            color: $white;
          }
          &-main-col-svg_about{
            color: $white;
            margin-top: 40px; 
            font-weight: 800;
            font-size: 16px;
            line-height: 22px;
          }
        }
      }
      &.__main_2{
        background-color: $main_2;
      }
    }
  }
  .content{
    
  }
  .dot{
    width: 10px; 
    min-height: 10px; 
    margin-right: 5px;
    border-radius: 50%;
    background-color: #c5c5c5;
    &.active{
      background-color: #333333;
    }
  }
  .cell-4{
    flex: 33% 0 0;
    &.min{

    }
  }
  .cell-3{
    flex: 25% 0 0;
  }
  .cell-2{
    flex: 16.6666% 0 0;
  }
  .item{
    &-logo{
      margin: 56px 0 24px;
    }
    &-link{
      margin-bottom: 24px;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      &>a{
        width: auto;
        cursor: pointer;
        color: $blue_l;
      }
    }
    &-title{
      color: $black;
      font-weight: 800;
      font-size: 32px;
      line-height: 44px;
      text-transform: uppercase;
      margin: 56px 0 80px;
    }
    &-main{
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      &-column{
        width: 50%;
        align-items: flex-end;
        z-index: 1;
        &:first-child{
          align-items: flex-start;
        }
        &-title{
          margin-top: 120px;
          display: block;
          color: $blue_d;
          font-weight: 800;
          font-size: 32px;
          line-height: 44px;
          text-align: left;
        }
        &-about{
          display: block;
          color: $blue_about;
          font-weight: 500;
          font-size: 16px;
          line-height: 22px;
          text-align: left;
          padding: 12px 25% 78px 0;
        }
        &-img{
          z-index: -1;
          width: 125%;
          margin-top: 120px;

        }
      }
      &-col{
        width: 50%;
        padding: 0 0 0 40px; 
        &:first-child{
          padding: 0 40px 0 0; 
        }
        &-type{
          flex-direction: row;
          align-items: flex-start;
          margin-bottom: 24px;
          &-number{
            width: auto;
            color: #FFF3F3;
            font-weight: 900;
            font-size: 24px;
            line-height: 33px;
            z-index: 0;
            padding: 4px 16px; 
            &:after, &:before{
              content: "";
              position: absolute;
              z-index: -1;
              background-color: $red;
              height: 32px;
              width: 100%;
            }
            &:after{
              height: 22px;
              width: 22px;
              right: -11px;
              transform: rotate(45deg);
            }
            &.float{
              color: $grey;
              &:after, &:before{
                background-color: transparent;
              }
              &:after{
                background-image: url(/static/img/arrow_pre.svg);
                right: unset;
                left: 0;
                transform: unset;
                background-repeat: no-repeat;
              }
            }
          }
          &-content{
            display: block;
            margin: 12px 0 0 24px;
            text-align: left;
            font-weight: 800;
            font-size: 16px;
            line-height: 22px;
            color: $black;
            &.float{
              margin: 12px 0 0 12px;
            }
          }
        }
        &-svg{

        }
        &-svg_about{

        }
      }
      &-timer{
        flex-direction: row;
        &-col{
          width: auto;
          &-time{
            display: block;
            color: $blue_l;
            font-weight: 800;
            font-size: 44px;
            width: 88px;
            line-height: 60px;
            &>span{
              margin: 0 24px 0 24px;
            }
          }
          &-date{
            display: block;
            color: $black;
            width: 88px;
            // margin-left: -1px;
            font-weight: 800;
            font-size: 16px;
            line-height: 22px;
            text-align: center;
            text-transform: uppercase;
            &.last{
              margin-left: unset;
            }
          }
        }
      }
      &-cell{
        margin-bottom: 40px;
        &-body{
          &>div>img{
            width: 100%;
            height: 100%;
            transition: 0.3s;
          }
          &-ava{
            height: 200px;
            width: 200px;
            border-radius: 50%;
            background-color: #cacaca;
            overflow: hidden;
            cursor: pointer;
          }
          &-fio{
            margin: 30px 0 8px;
            font-weight: 800;
            font-size: 16px;
            line-height: 22px;
            color: $black;
          }
          &-speciality{
            font-size: 13px;
            line-height: 18px;
            color: #4F4F4F;
          }
          &-project{
            width: 50%;
            border-radius: 15px;
            overflow: hidden;
            cursor: pointer;
            &:hover{
              &>img{
                transform: scale(1.2);
              }
            }
          }
          &-sponsor{
            width: 80%;
          }
        }
      }
    }
  }

  @media screen and (max-width: 760px){
    .index-item.__bg:after{
      background-size: 400% 100%;
    }
    .cell-4{
      flex: 100% 0 0;
      &.__min{
        flex: 50% 0 0;
        &:last-child{
          display: none;
        }
      }
    }
    .cell-3{
      flex: 100% 0 0;
    }
    .cell-2{
      flex: 50% 0 0;
    }
    .item{
      &-title{
        font-size: 24px;
        line-height: 33px;
        margin: 10px 0 34px;
      }
      &-main{
        padding: 0 2.5%;
        &-column{
          width: 100%;
          align-items: center;
          &-title{
            margin-top: unset;
            font-size: 24px;
            line-height: 33px;
          }
          &-about{
            font-size: 16px;
            line-height: 22px;
            padding: 12px 0;
          }
          &-img{
            width: 100%;
            margin: 10% 0;
          }
        }
        &-timer{
          &-col-time{
            font-size: 32px;
            line-height: 44px
          }
          &-col-date{
            font-size: 13px;
            line-height: 18px;
          }
        }
        &-col{
          width: 100%;
          padding: unset !important;
          &-svg{
            max-width: 15%;
          }
          &-type{
            &-content{
              font-size: 16px;
              line-height: 22px;
            }
          }
        }
      }
    }
    .index-item.__bg .item-main-col-svg_about{
      margin: 12px 0;
    }
  }
</style>
