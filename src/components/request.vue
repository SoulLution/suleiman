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
        <v-radio v-model="_package.data" :checked="_package.data" :id="_package.value" />
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
      createLead(){
        if(this.getPrice && this.check){
          console.log(this.inputs.length)
        let data = {
          company_name: this.inputs[0].data,
          country: this.inputs[1].data,
          industry: this.inputs[2].data,
          required_investment: this.inputs[3].data,
          investment_type: this.inputs[4].data,
          project_stage: this.inputs[5].data,
          description: this.inputs[6].data,
          fio: this.inputs_who[0].data,
          contacts: this.inputs_who[1].data,
          email: this.inputs_who[2].data,
          price: this.getPrice
        }
        // this.$axios.post('/leads/create', data)
        // .then(res => {
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
</style>
