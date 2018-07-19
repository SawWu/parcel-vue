<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    created() {this.$nextTick
      this.$nextTick(()=>{
        console.log('张超是傻逼')
      })
      console.log(this)
    },
  }
</script>

<style scoped>
  #app {
    height: 100%;
  }
</style>
