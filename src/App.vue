<template>
  <div id="app">
    <router-view>

    </router-view>
  </div>
</template>

<script>
import appWrapper from './components/Notification.vue'



export default {
  name: 'app',
  components: {
    appWrapper
  }
}
</script>

<style>

  #app {
    background: url(assets/background.svg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

</style>
