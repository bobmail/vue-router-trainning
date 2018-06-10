<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <p>newsID:{{$route.params.newsID}}</p>
    <p>newsTitle:{{$route.params.newsTitle}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Params Page'
    }
  },
  beforeRouteEnter: (to, from, next) => {
    console.log('prepare enter router')
    next()
  },
  beforeRouteLeave: (to, from, next) => {
    console.log('prepare exit router')
    next()
  }
}
</script>
