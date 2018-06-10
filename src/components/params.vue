<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <p>newsID:{{$route.params.newsID}}</p>
    <p>newsTitle:{{$route.params.newsTitle}}</p>
  </div>
</template>

<script>
export default {
  name: 'Hi1',
  data () {
    return {
      msg: 'Params Page'
    }
  }
}
</script>
