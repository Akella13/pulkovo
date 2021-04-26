<template>
  <form @submit.prevent="Submit">
    <label>
      Title
      <input type="text" :value="proxy.title">
    </label>
    <label>
      Description
      <textarea :value="proxy.desc"></textarea>
    </label>
    <label>
      Due Date
      <input type="datetime-local" :value="parseDateToString(proxy.dueDate)">
    </label>
    <label>
      Priority
      <select :value="proxy.priority">
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
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      // title: '',
      // desc: '',
      // priority: 0,
      priorityRange: [
        'none',
        'low',
        'medium',
        'high',
      ],
      // dueDate: null,
    };
  },
  computed: {
    proxy() {
      return this.$store.state.proxy;
    },
  },
  methods: {
    Submit() {
      // submit form fields
      // this.$emit('addElement', {
      //   title: this.title,
      //   desc: this.desc,
      //   priority: this.priority,
      //   date: new Date(),
      //   dueDate: new Date(this.dueDate),
      //   checked: false,
      // });
      // reset form fields
      this.$store.commit('resetProxy');
    },
    parseDateToString(date) {
      if (date) {
        const str = date.toISOString();
        return str.slice(0, -3)
      }
      return null;
    },
  },
}
</script>