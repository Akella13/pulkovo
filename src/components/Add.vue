<template>
  <section v-show="showModal" class="form__wrapper">
    <button @click="Close" class="form__close">&#88;</button>
    <form @submit.prevent="Submit" class="form">
      <label class="form__field">
        Title
        <input type="text" v-model="formFields.title" class="form__input" placeholder="Type in title" required>
      </label>
      <label class="form__field">
        Description
        <textarea v-model="formFields.desc" class="form__input"  placeholder="Add a description"/>
      </label>
      <label class="form__field">
        Due Date
        <input type="datetime-local" v-model="formFields.dueDate" class="form__input">
      </label>
      <label class="form__field">
        Priority
        <select v-model="formFields.priority" class="form__input">
          <option v-for="(label, index) in priorityRange" :key="label" :value="index">
            {{ label }}
          </option>
        </select>
      </label>
      <button class="form__field form__submit" type="submit">Add</button>
    </form>
  </section>
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
      showForm: true,
    };
  },
  computed: {
    proxy() {
      return this.$store.state.proxy.proxy;
    },
    showModal() {
      return this.$store.state.modal.show;
    }
  },
  watch: {
    proxy(proxy) {
      this.formFields = { ...this.formFields, ...proxy };
      // datetime format
      if (proxy.dueDate) {
        this.formFields.dueDate = this.ParseDateToString(proxy.dueDate);
      }
    },
  },
  mounted() {
    console.log('I would recommend to use Chrome in order to use whole possibilites of native datepicker');
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
      this.Close();
    },
    ParseDateToString(date) {
      if (date) {
        // hack to shift timezone
        const shift = new Date(date);
        shift.setHours(date.getHours() + 3);
        const str = shift.toISOString();
        return str.slice(0, -1)
      }
      return null;
    },
    Close() {
      this.$store.commit('toggleModal')
    },
  },
}
</script>

<style>
  .form {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    min-width: 400px;
    background-color: aqua;
    padding: 3em 2em;
    border-radius: 5%;
  }

  .form__wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(123, 123, 123, 0.7);
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form__close {
    position: absolute;
    top: 1em;
    right: 1em;
    padding: 0.5em 1em;
    border-radius: 20%;
  }

  .form__field {
    margin-bottom: 1em;
    display: flex;
    align-items: center;
  }

  .form__input {
    margin-left: 1em;
    width: 100%;
  }

  .form__submit {
    align-self: center;
    width: 100%;
    max-width: 300px;
  }
</style>