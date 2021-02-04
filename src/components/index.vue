<template>
  <div class="main index">

    <div class="main-content content">

      <div class="index-item __white">
        <div class="content">
          <div class="item-main">
            <div class="item-main-column">
              <div class="item-main-column-title">{{$languages.index.header.title}}</div>
              <div class="item-main-column-about">{{$languages.index.header.about}}</div>
              <div class="item-main-column-calendar">
                <img src="/static/img/calendar.svg">
                <span>{{$languages.index.header.calendar}}</span>
              </div>
              <v-button class="web" :title="$languages.index.header.button" @click="$router.push('/registrate')" />
            </div>
            <div class="item-main-column">
              <img class="item-main-column-img" src="static/img/main.png">
              <v-button class="mob" :title="$languages.index.header.button" @click="$router.push('/registrate')" />
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
                <div class="item-main-timer-col-date">{{$languages.index.date.days}}</div>
              </div>
              <div class="item-main-timer-col">
                <div class="item-main-timer-col-time"><span>{{checkTime(now.hours)}}</span>:</div>
                <div class="item-main-timer-col-date">{{$languages.index.date.hours}}</div>
              </div>
              <div class="item-main-timer-col">
                <div class="item-main-timer-col-time"><span>{{checkTime(now.minuts)}}</span>:</div>
                <div class="item-main-timer-col-date">{{$languages.index.date.minuts}}</div>
              </div>
              <div class="item-main-timer-col">
                <div class="item-main-timer-col-time"><span>{{checkTime(now.seconds)}}</span></div>
                <div class="item-main-timer-col-date last">{{$languages.index.date.secconds}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="index-item __transparent" ref="item-0">
        <div class="content">
          <div class="item-title">{{$languages.index.item_titles[0]}}</div>
          <!-- <div class="item-main">
            <div class="item-img">
              <img src="/static/img/conf_0.png">
              <img src="/static/img/conf_1.png">
            </div> -->
            <div class="item-about" v-html="$languages.index.conf"></div>
          </div>
        </div>
      </div>

      <div class="index-item __white">
        <div class="content">
          <div class="item-title">{{$languages.index.item_titles[1]}}</div>
          <div class="item-main">
            <div class="item-main-col">
              <div class="item-main-col-type" v-for="(type, i) in types" v-if="i < types.length">
                <div class="item-main-col-type-number">{{type.number}}</div>
                <div class="item-main-col-type-content">{{type.content}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="index-item __bg">
        <div class="content">
          <div class="item-title">{{$languages.index.item_titles[2]}}</div>
          <div class="item-main">
            <div class="item-main-col cell-4">
              <img class="item-main-col-svg" src="static/img/arrow_down.svg">
              <div class="item-main-col-svg_about">{{$languages.index._bg[0]}}</div>
            </div>
            <div class="item-main-col cell-4">
              <img class="item-main-col-svg" src="static/img/arrow_down.svg">
              <div class="item-main-col-svg_about">{{$languages.index._bg[1]}}</div>
            </div>
            <div class="item-main-col cell-4">
              <img class="item-main-col-svg" src="static/img/arrow_down.svg">
              <div class="item-main-col-svg_about">{{$languages.index._bg[2]}}</div>
            </div>
          </div>
        </div>
      </div>


      <div class="index-item __transaprent" ref="item-1">
        <div class="content">
          <img class="item-logo" src="static/img/title_0.svg">
          <div class="item-title">{{$languages.index.item_titles[3]}}</div>
          <div class="item-main">
            <div class="item-main-cell">
              <div class="item-main-cell-speakers" v-for="(speaker_list, i) in speakers">
                <div class="item-main-cell-speakers-body" v-for="speaker in speaker_list">
                  <div class="item-main-cell-body-ava" @click="speaker['name_' + $language] ? setPopup(speaker) : ''">
                    <img :src="speaker.image" v-if="speaker.image">
                  </div>
                  <div class="item-main-cell-body-fio" v-if="speaker['name_' + $language]">{{speaker['name_' + $language]}}</div>
                  <div class="item-main-cell-body-speciality">{{speaker['specialization_' + $language]}}</div>
                </div>
              </div>
            </div>
          </div>
          <!-- <v-button title="Все спикеры" /> -->
        </div>
      </div>

      <div class="index-item __bg __blue">
        <div class="content">
          <div class="item-title">{{$languages.index.item_titles[4]}}</div>
          <div class="item-main">
            <div class="item-main-col cell-3">
              <img class="item-main-col-svg" src="static/img/cause_0.svg">
              <div class="item-main-col-svg_about">{{$languages.index._bg[3]}}</div>
              <div class="item-main-col-svg_about _min">{{$languages.index._blue[0]}}</div>
            </div>
            <div class="item-main-col cell-3">
              <img class="item-main-col-svg" src="static/img/cause_1.svg">
              <div class="item-main-col-svg_about">{{$languages.index._bg[4]}}</div>
              <div class="item-main-col-svg_about _min">{{$languages.index._blue[1]}}</div>
            </div>
            <div class="item-main-col cell-3">
              <img class="item-main-col-svg" src="static/img/cause_2.svg">
              <div class="item-main-col-svg_about">{{$languages.index._bg[5]}}</div>
              <div class="item-main-col-svg_about _min">{{$languages.index._blue[2]}}</div>
            </div>
            <div class="item-main-col cell-3">
              <img class="item-main-col-svg" src="static/img/cause_3.svg">
              <div class="item-main-col-svg_about">{{$languages.index._bg[6]}}</div>
              <div class="item-main-col-svg_about _min _last">{{$languages.index._blue[3]}}</div>
            </div>
          </div>
        </div>
      </div>


      <div class="index-item __main_2" ref="item-3">
        <div class="content">
          <img class="item-logo" src="static/img/title_1.svg">
          <div class="item-title">{{$languages.index.item_titles[5]}}</div>
          <div class="item-main">
            <div class="item-main-cell cell-2" :class="{'op-025': !project.leads}" v-for="(project, i) in projects">
              <div class="item-main-cell-body" @click="project.leads ? goLeads(i) : ''">
                <div class="item-main-cell-body-project"><img :src="`/static/img/project_${i}.png`"></div>
                <div class="item-main-cell-body-fio">{{project.name}}</div>
                <div class="item-main-cell-body-leads" :class="{'op-5': !project.leads}">
                  {{project.leads ? project.leads + ' ' + $languages.index.yes_project : $languages.index.no_project}}
                </div>
              </div>
            </div>
          </div>
          <div class="item-link">
            {{$languages.index.item_link}}
            <!-- <a target="_blank" href="http://suleimanpartners.com/">conference@suleimanpartners.com</a> -->
          </div>
          <v-button class="__next" :title="$languages.index.item_but" @click="$router.push('/request')" />
        </div>
      </div>

      <div class="index-item __transpatent" ref="item-2">
        <div class="content">
          <img class="item-logo" src="static/img/title_2.svg">
          <div class="item-title">{{$languages.index.item_titles[6]}}</div>
          <div class="item-main">
            <div class="item-main-cell cell-4 __min" v-for="sponsor in sponsors">
              <div class="item-main-cell-body">
                <div class="item-main-cell-body-sponsor"><img :src="'/static/img/'+sponsor.logo"></div>
              </div>
            </div>
          </div>
          <v-button :title="$languages.index.item_but2" @click="$router.push('/request')" />
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    data: () => {
      return{
        end_time: new Date(2021,4,20),
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
        projects: [],
        speakers: [[
          {
            name_ru: 'test',
            specialization_ru: '1'
          },
          {
            name_ru: 'test',
            specialization_ru: '1'
          },
          {
            name_ru: 'test',
            specialization_ru: '1'
          }
        ],[
          {
            name_ru: 'test',
            specialization_ru: '1'
          },
          {
            name_ru: 'test',
            specialization_ru: '1'
          },
          {
            name_ru: 'test',
            specialization_ru: '1'
          }
        ]],
        types: []
      }
    },
    beforeRouteLeave (to, from, next) {
      this.$emit('removeRefs', this.$refs)
      next()
    },
    async created(){
      this.getProjects()
      this.types = this.$languages.index.types

      // this.getSpeakers()

      this.now.seconds = this.end_time.getSeconds() - new Date().getSeconds()
      this.now.minuts = this.end_time.getMinutes() - new Date().getMinutes()
      this.now.hours = this.end_time.getHours() - new Date().getHours()
      this.now.days = Math.floor(
        (this.end_time.valueOf() - new Date().valueOf()) / (24 * 60 * 60 * 1000)
        )
      // this.now.days = this.end_time.getDate() - new Date().getDate()
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
      if(this.now.days < 0)
        this.now.days = 0

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
    mounted(){
      this.$emit('refs', this.$refs)
    },
    methods: {
      async getProjects(){
        for(let project of this.$languages.projects)
          project.leads = 0
        this.$axios.get('leads')
        .then(res => {
          for(let lead of res.data.data){
            for(let project of this.$languages.projects){
              if(lead.industry === project.data){
                project.leads++
                break 
              }
            }
          }

            
        })
        this.projects = this.$languages.projects
      },
      async getSpeakers(){
        let end = await this.$axios.get('/speakers')
        .then(async res => {
          for(let i = 0; i < res.data.data.length; i++){
            console.log(res.data.data[i])
            // let end = await this.$axios.get('/speakers/'+res.data.data[i].id)
            // .then(res_1 => {
            //   res.data.data[i] = res_1.data.data
            // })
            if((i+1)%2 !== 0)
              this.speakers.push([])
            this.speakers[this.speakers.length-1].push(res.data.data[i])
          }
          console.log(this.speakers)
        })

        if(this.speakers.length)
        if(this.speakers[this.speakers.length-1].length < 2)
          this.speakers[this.speakers.length-1].push({['specialization_' + this.$language]: this.$languages.index.undefined_speaker})

        while(this.speakers.length < 4){
          this.speakers.push([
            {['specialization_' + this.$language]: this.$languages.index.undefined_speaker},
            {['specialization_' + this.$language]: this.$languages.index.undefined_speaker}
          ])
        }

      },
      goLeads(index){
        this.$router.push('/leads/'+index)
      },
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
          // content: "";
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
          background-image: url('/static/img/bg_0.png');
          // background-attachment: fixed;
        }
        &.__blue{
          &:before{
            background-color: rgba(2, 56, 86, 0.68);
          }
          &:after{
            background-color: #001F48;
            background-image: none;
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

            &._min{
              margin-top: 12px;
              font-weight: 500;
              font-size: 13px;
              line-height: 18px;
              &._last{
                margin-top: 28px;
              }
            }
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
  }
  .cell-3{
    flex: 25% 0 0;
  }
  .cell-2{
    flex: 16.6666% 0 0;
  }
  .op-5{
    opacity: 0.5;
  }
  .op-025{
    opacity: 0.25;
    .item-main-cell-body>div>img{
      cursor: auto;
      transform: unset;
    }
  }
  .item{

    &-img{
      flex-direction: row;
      width: 100vw;
      max-width: 100vw;
      min-width: 100vw;
      margin-bottom: 20px;
      &>img{
        width: 50%;
      }
    }
    &-about{
      display: block;
      text-align: left;
      font-weight: 800;
      font-size: 18px;
      line-height: 24.6px;
      color: $black;
      margin: 20px 16px;
    }
    &-logo{
      margin: 12px 0 0;
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
      margin: 56px 0 50px;
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
        &-calendar{
          flex-direction: row;
          width: 30%;
          font-weight: 800;
          font-size: 16px;
          line-height: 22px;
          color: #EB5757;
          margin-bottom: 36px;
          &>span{
            margin-left: 8px;
            text-align: left;
          }
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
          padding: 12px 25% 36px 0;
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
          // padding: 0 40px 0 0; 
        }
        &-type{
          flex-direction: row;
          margin-bottom: 24px;
          &-number{
            width: 100px;
            height: 100%;
            color: #FFF3F3;
            font-weight: 900;
            font-size: 24px;
            line-height: 33px;
            z-index: 0;
            margin-top: 8px;
            padding: 4px 16px; 
            &:after{
              content: "";
              position: absolute;
              z-index: -1;
              left: 0;
              top: -2px;
              height: 46px;
              width: 100%;
              background-image: url(/static/img/theme_arrow.svg);
              transform: unset;
              background-size: 100% 100%;
              background-repeat: no-repeat;
            }
            &.float{
              color: $grey;ackground-color: transparent;
              &:after{
                background-size: 25% 70%;
                background-image: url(/static/img/arrow_pre.svg);
              }
            }
          }
          &-content{
            display: block;
            margin-top: 12px;
            text-align: left;
            font-weight: 800;
            font-size: 16px;
            line-height: 22px;
            color: $black;
            &.float{
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
              &-col-time:first-child>span{
                margin: 0 16px;
              }
        &-col{
          width: auto;
          &-time{
            display: block;
            color: $blue_l;
            font-weight: 800;
            font-size: 44px;
            width: 104px;
            line-height: 60px;
            &>span{
              margin: 0 24px;
            }
          }
          &-date{
            display: block;
            color: $black;
            width: 104px;
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
        flex-direction: row;
        flex-wrap: wrap;
        &-speakers{
          flex-direction: row;
          &-body{
            height: 100%;
            justify-content: flex-start;
            flex: 33.33334% 0 0;
            width: 33.33334%;
          }
          &.row{
            min-height: 300px;
            flex: 100% 0 0;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            &:first-child{
              margin-bottom: -10%;
            }
            &:last-child{
              margin-top: 0%; 
            }
          }
          &.column{
            min-height: 400px;
            justify-content: space-between;
            flex: 50% 0 0;
            flex-direction: column;
          }
        }
        &-body{
          &>div>img{
            width: 100%;
            height: 100%;
            transition: 0.3s;
          }
          &-ava{
            height: 150px;
            width: 150px;
            border-radius: 50%;
            background-color: #cacaca;
            overflow: hidden;
            cursor: pointer;
          }
          &-fio{
            margin: 20px 0 8px;
            font-weight: 800;
            font-size: 16px;
            line-height: 22px;
            color: $black;
          }
          &-speciality{
            font-size: 13px;
            line-height: 18px;
            color: #4F4F4F;
            margin-bottom: 8px;
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
      &-img{
        flex-direction: column;
        &>img{
          width: 100%;
          margin-bottom: 5px;
        }
      }
      &-title{
        font-size: 24px;
        line-height: 33px;
        margin: 10px 0 34px;
      }
      &-main{
        padding: 0 2.5%;
        &-cell{
          &-speakers{
            flex-direction: column;
            &-body{
              width: 100%;
            }
            &.row{
              height: auto;
              flex: 100% 0 0;
              flex-direction: column;
              justify-content: center;
              &:first-child{
                margin-bottom: unset;
              }
              &:last-child{
                margin-top: unset; 
              }
            }
            &.column{
              flex: 100% 0 0;
              flex-direction: column;
            }
          }
        }
        &-column{
          width: 100%;
          align-items: center;
          &-calendar{
            width: 100%;
          }
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
            align-items: flex-start;
            &-number{
              margin-top: unset;
            }
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
