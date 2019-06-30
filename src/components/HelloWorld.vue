<template>
  <div class="hello">
    <h3>Hello组件</h3>
    {{$store.state.name}}
    <button type="button" @click="send">start</button>
    <br>
    <Son/>
  </div>
</template>

<script>
import Son from './Son'
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: '王之涣',
      temp: false
    }
  },
  mounted(){
    this.$store.dispatch('change', this.name)
  },
  methods: {
    send(){
      this.$store.dispatch('change', this.name)
      this.$store.dispatch('loadingchange', this.temp)
    }
  },
  components: {
    Son
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
