<template>
  <ul>
    <li v-for="el in list" :key="el.name">
      <input type="checkbox" v-model="el.done">
      <h3>{{ el.name }}</h3>
      <p>{{ el.desc }}</p>
      <span>{{ el.date }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: 'write app',
          desc: 'to-do list with descriptions',
          date: new Date(2021, 3, 25, 12, 0, 0),
          priority: 1,
          done: false,
        },
        {
          name: 'new to-dos',
          desc: 'come up with new list elements',
          date: new Date(2021, 3, 25, 12, 1, 0),
          priority: 2,
          done: false,
        },
      ],
    };
  },
}
</script>