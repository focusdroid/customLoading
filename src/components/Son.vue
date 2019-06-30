<template>
    <div>
      <h3>Son组件</h3>
      {{$store.state.name}}
      <p>{{$store.getters.doublename}}</p>
      <Loading v-show="$store.state.temp"/>
    </div>
</template>

<script>
</script>

<style scoped>

</style>
