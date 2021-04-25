<template>
  <form @submit.prevent="Submit">
    <label>
      Title
      <input type="text" v-model="title">
    </label>
    <label>
      Description
      <textarea v-model="desc"></textarea>
    </label>
    <label>
      Priority
      <select v-model="priority">
        <option v-for="(label, index) in priorityRange" :key="label" :value="index">
          {{ label }}
        </option>
      </select>
    </label>
    <button type="submit">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      desc: '',
      priority: 0,
      priorityRange: [
        'none',
        'low',
        'medium',
        'high',
      ]
    };
  },
  methods: {
    Submit() {
      this.$emit('addElement', {
        title: this.title,
        desc: this.desc,
        priority: this.priority,
        date: Date(),
        done: false,
      })
    },
  },
}
</script>