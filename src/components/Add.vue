<template>
  <form @submit.prevent="Submit">
    <label>
      Title
      <input type="text" v-model="formFields.title">
    </label>
    <label>
      Description
      <textarea v-model="formFields.desc" />
    </label>
    <label>
      Due Date
      <input type="datetime-local" v-model="formFields.dueDate">
    </label>
    <label>
      Priority
      <select v-model="formFields.priority">
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
      priorityRange: [
        'none',
        'low',
        'medium',
        'high',
      ],
      formFields: {
        title: '',
        desc: '',
        priority: 0,
        dueDate: null,
      },
    };
  },
  computed: {
    proxy() {
      return this.$store.state.proxy;
    },
  },
  watch: {
    proxy(proxy) {
      this.formFields = { ...this.formFields, ...proxy };
      // BUG: incorrect time parsing
      // datetime format
      if (proxy.dueDate) {
        this.formFields.dueDate = this.parseDateToString(proxy.dueDate);
      }
    },
  },
  methods: {
    Submit() {
      const dueDate = this.formFields.dueDate;
      // emit form fields
      this.$store.commit('updateList', { 
        ...this.formFields,
        dueDate: dueDate ? new Date(dueDate) : null,
      });
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