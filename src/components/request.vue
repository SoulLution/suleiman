<template>
  <div class="main request">
    <form class="form" @submint.prevent="createLead()">
      <div class="form-title">{{$languages.request.title}}</div>
      <div class="form-body">
        <div class="form-body-content">
          <div class="form-body-content-item" v-for="(input, i) in inputs">
            <v-input :required="true" :maxlength="input.maxlength" :id="('input-' + ((Math.random() * 10000)^0) + '-data[' + ((Math.random() * 10000)^0) + ']')":childs="input.childs" :title="input.title" :type="input.type" v-model="input.data"/>
          </div>
        </div>
      </div>
      <label class="pdf">
        <input type="file" @change="e => addFile(e)" accept="application/pdf" class="hidden">
        <span>{{$languages.request.pdf}}</span>
      </label>
      <div class="form-pretitle">{{$languages.request.who}}</div>
      <div class="form-body">
        <div class="form-body-content">
          <div class="form-body-content-item" v-for="(input, i) in inputs_who">
            <v-input :required="true" :maxlength="input.maxlength" :id="('input-' + ((Math.random() * 10000)^0) + '-data[' + ((Math.random() * 10000)^0) + ']')":childs="input.childs" :title="input.title" :type="input.type" v-model="input.data"/>
          </div>
        </div>
      </div>
      <div class="form-pretitle">{{$languages.request._package}}</div>
      <div class="form-flex-row my-8" v-for="_package in packages">
        <v-check-box v-model="_package.data" :checked="_package.data" :id="_package.value" />
        <label style="" :for="_package.value" v-html="_package.key"></label>
      </div>
      <label class="my-2">{{$languages.request.final}} <strong>{{getPrice}}€</strong></label>
      <div class="form-flex-row my-8">
        <v-check-box v-model="check" :checked="check" />
        <p v-html="$languages.registrate.link"></p>
      </div>
      <div class="form-footer">
        <input type="submit" style="display: none;" ref="send" @click.prevent="createLead()">
        <v-button :title="$languages.request.button" @click="$refs['send'].click()"/>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data: () => {
      return{
        inputs: [],
        inputs_who: [],
        packages: [],
        file: null,
        check: false
      }
    },
    computed: {
      getPrice(){
        let result = 0
        this.packages.forEach(x => {
          if(x.data)
          result += x.value
        })
        return result
      }
    },
    created(){
      this.inputs = this.$languages.request.inputs
      this.inputs_who = this.$languages.request.inputs_who
      this.packages = this.$languages.request.packages
    },
    methods: {
      addFile(e) {
        if(e.target.files.length)
          this.file = e.target.files[0]
      },
      createLead(){
        if(this.getPrice && this.check){
          console.log(this.inputs.length)
        var data = {}
        // data.append("file", this.file)
        data.company_name = this.inputs[0].data
        data.country = this.inputs[1].data
        data.industry = this.inputs[2].data
        data.required_investment = this.inputs[3].data
        data.investment_type = this.inputs[4].data
        data.project_stage = this.inputs[5].data
        data.description = this.inputs[6].data
        data.fio = this.inputs_who[0].data
        data.contacts = this.inputs_who[1].data
        data.email = this.inputs_who[2].data
        data.price = this.getPrice
        // this.$axios.post('/leads/create', data)
        // .then(res => {
          console.log(data)
          console.log(this.file)
          this.$emit('sendMembers', data)
          this.$router.push('/payment')
        // })
        // .finally( () => this.$emit('setLoad', false))
        
        }
      }
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
  .form-pretitle{
    align-items: flex-start;
    font-weight: 800;
    font-size: 20px;
    line-height: 16px;
    color: #252525;
    margin: 20px 0px;
  }
  label{
    display: block; 
    text-align: left; 
    margin-left: 1rem;
    cursor: pointer;
  }
  p{
    margin-top: 0.5rem;
  }  
  .hidden{
    display: none;
  }
  .pdf{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    width: 100%;
    border: 1px solid #80868C;
    border-radius: 2px;
    padding: 1.25rem;
    font-weight: 800;
    font-size: 16px;
    line-height: 22px;
    color: #000D1A;
    cursor: pointer;
  }
</style>
