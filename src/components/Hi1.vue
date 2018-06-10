<template>
  <div>
    <h2>
      {{$route.params.username}}-{{$route.params.id}}! {{msg}}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Hi1',
  data () {
    return {
      msg: "I'm Hi1"
    }
  }
}
</script>

<style scoped>
</style>
