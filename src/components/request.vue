<template>
  <div class="main request">
    <form class="form" @submint.prevent="createLead()">
      <div class="form-title">{{$languages.request.title}}</div>
      <div class="form-body">
        <div class="form-body-content">
          <div class="form-body-content-item" v-for="(input, i) in inputs">
            <v-input :required="true" :id="('input-' + ((Math.random() * 10000)^0) + '-data[' + ((Math.random() * 10000)^0) + ']')":childs="input.childs" :title="input.title" :type="input.type" v-model="input.data"/>
          </div>
        </div>
      </div>
      <div class="form-footer">
        <input type="submit" style="display: none;" ref="send" @click="createLead()">
        <v-button :title="$languages.request.button" @click="$refs['send'].click()"/>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data: () => {
      return{
        inputs: []
      }
    },
    created(){
      this.inputs = this.$languages.request.inputs
    },
    methods: {
      createLead(){
        let data = {
          company_name: this.inputs[0].data,
          country: this.inputs[1].data,
          industry: this.inputs[2].data,
          required_investment: this.inputs[3].data,
          investment_type: this.inputs[4].data,
          project_stage: this.inputs[5].data,
          description: this.inputs[6].data
        }
        this.$axios.post('/leads/create/', data)
        .then(res => {
          this.$router.push('/success')
        })
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
</style>
