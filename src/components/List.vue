<template>
  <section>
    <header>
      <button @click="Create">Create</button>
      <button @click="Sort">
        Sort
        <span v-if="sorting">&mapstodown;</span>
        <span v-else-if="sorting === null"></span>
        <span v-else>&mapstoup;</span>
      </button>
    </header>
    <ul>
      <Item v-for="el in storeList" :key="el.title" :element="el" />
    </ul>
  </section>
</template>

<script>
import Item from './Item';

export default {
  components: {
    Item,
  },
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
    },
    Create() {
      this.$store.commit('resetProxy');
      this.$store.commit('toggleModal');
    }
  },
}
</script>