<template>
  <ul>
    <li v-for="el in storeList" :key="el.title">
      <input type="checkbox" v-model="el.checked">
      <h3>{{ el.title }}</h3>
      <p>{{ el.desc }}</p>
      <p>Created: {{ el.date }}</p>
      <p>Due: {{ el.dueDate }}</p>
      <button @click="Edit(el)">Edit</button>
      <button @click="Remove(el.title)">Remove</button>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    storeList() {
      return this.$store.state.list;
    }
  },
  methods: {
    Remove(str) {
      this.$store.commit('removeListItem', str);
    },
    Edit(el) {
      this.$store.commit('updateProxy', el);
    },
  },
}
</script>