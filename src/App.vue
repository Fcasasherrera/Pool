<template>
  <div id="app">
    <Navigation/>
    <Home />
    <HowWork />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Home from './components/Home.vue'
import HowWork from './components/HowWork.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Home,
    HowWork
  }
}
</script>

<style>
  #app {
    padding: 10px;
  }

</style>
