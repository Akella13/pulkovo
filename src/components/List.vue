<template>
  <ul>
    <li v-for="el in list" :key="el.title">
      <input type="checkbox" v-model="el.done">
      <h3>{{ el.title }}</h3>
      <p>{{ el.desc }}</p>
      <span>{{ el.date }}</span>
      <button @click="Remove(el.title)">Remove</button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: 'write app',
          desc: 'to-do list with descriptions',
          date: new Date(2021, 3, 25, 12, 0, 0),
          priority: 1,
          done: false,
        },
        {
          title: 'new to-dos',
          desc: 'come up with new list elements',
          date: new Date(2021, 3, 25, 12, 1, 0),
          priority: 2,
          done: false,
        },
      ],
    };
  },
  methods: {
    Remove(str) {
      this.list = this.list.filter(({ title }) => title !== str);
    },
  },
}
</script>