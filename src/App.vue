<template>
  <div id="app">
    <List />
  </div>
</template>

<script>
import List from '@/components/List';

export default {
  name: 'App',
  components: {
    List,
  },
}
</script>

<style>
#app {
  min-height: 100vh;
  background-color: aqua;
}
</style>
