<template>
  <ul>
    <li v-for="el in list" :key="el.title">
      <input type="checkbox" v-model="el.checked">
      <h3>{{ el.title }}</h3>
      <p>{{ el.desc }}</p>
      <span>Created: {{ el.date }}</span>
      <span>Due: {{ el.dueDate }}</span>
      <button @click="Edit(el)">Edit</button>
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
          dueDate: new Date(2021, 3, 27, 12, 0, 0),
          priority: 3,
          checked: false,
        },
        {
          title: 'new to-dos',
          desc: 'come up with new list elements',
          date: new Date(2021, 3, 25, 12, 1, 0),
          dueDate: null,
          priority: 2,
          checked: false,
        },
      ],
    };
  },
  methods: {
    Remove(str) {
      this.list = this.list.filter(({ title }) => title !== str);
    },
    Edit(el) {
      // console.log(el.date.toLocaleString())
      this.$store.commit('updateProxy', el);
      // this.$emit('edit', el);
    },
  },
}
</script>