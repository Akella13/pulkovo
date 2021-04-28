<template>
  <section>
    <div>
      <button @click="Sort">
        Sort
        <span v-if="sorting">&mapstodown;</span>
        <span v-else-if="sorting === null"></span>
        <span v-else>&mapstoup;</span>
      </button>
    </div>
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
  </section>
</template>

<script>
export default {
  data() {
    return {
      sorting: null,
    };
  },
  computed: {
    storeList() {
      return this.$store.state.list.list;
    }
  },
  watch: {
    storeList() {
      localStorage.list = JSON.stringify(this.storeList);
    },
  },
  mounted() {
    // bind localstorage list if $store.list is empty
    if (!this.storelist || this.storeList.length === 0) {
      const list = this.ParseJSON(localStorage.list);
      this.$store.commit('assignList', list);
    }
  },
  methods: {
    Remove(str) {
      this.$store.commit('removeListItem', str);
    },
    Edit(el) {
      this.$store.commit('updateProxy', el);
    },
    Sort() {
      this.$store.commit('sortList', this.sorting);
      this.sorting = !this.sorting;
    },
    ParseJSON(list) {
      const json = JSON.parse(list);
      return json.map(el => {
        el.date = new Date(el.date);
        el.dueDate = new Date(el.dueDate);
        return el;
      });
    }
  },
}
</script>