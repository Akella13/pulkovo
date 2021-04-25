<template>
  <div id="app">
    <List />
    <Add />
  </div>
</template>

<script>
import List from '@/components/List';
import Add from '@/components/Add';

export default {
  name: 'App',
  components: {
    List,
    Add,
  },
}
</script>

<style>
#app {
  min-height: 100vh;
  background-color: aqua;
}
</style>
