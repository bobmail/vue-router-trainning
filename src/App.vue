<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click ="goBack">Back</button>
      <button @click ="goForward">Forward</button>
      <button @click ="goHome">Home</button>
    </div>
    <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/params/123/Bob Title">Params</router-link> |
    <router-link to="/goHome">GoHome</router-link> |
    <router-link to="/goParams/618/Gray is my friend">GoParams</router-link> |
    <router-link to="/hi1">Hi1</router-link> |
    <router-link to="/hi1alias">Hi1 Alias</router-link> |
    </div>
    <transition name ="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    goForward () {
      this.$router.go(1)
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  opacity: 1;
  transition:opacity 0.5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition:opacity 0.5s;
}
</style>
