<template>
  <li class="todo">
    <input type="checkbox" v-model="element.checked" class="todo__checkbox">
    <div :class="['todo__text', {'todo__text--checked' : element.checked } ]">
      <h3 class="todo__title">{{ element.title }}</h3>
      <p class="todo__desc">{{ element.desc }}</p>
      <span class="todo__date">Created: {{ DateToLocaleString(element.date) }}</span>
      <span class="todo__date">Due: {{ DateToLocaleString(element.dueDate) }}</span>
    </div>
    <div class="todo__actions">
      <button @click="Edit(element)">Edit</button>
      <button @click="Remove(element.title)">Remove</button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    element: {
      type: Object,
      default: () => {},
    }
  },
  methods: {
    Remove(str) {
      this.$store.commit('removeListItem', str);
    },
    Edit(el) {
      this.$store.commit('updateProxy', el);
    },
    DateToLocaleString(date) {
      if (date) {
        return date.toLocaleString('RU-ru')
      }
    },
  },
}
</script>

<style>
  .todo {
    position: relative;
    display: flex;
    align-items: center;
    border-bottom: 1px solid gray;
    padding: 0.5em;
  }

  .todo:last-child {
    border-bottom: none;
  }

  .todo__text {
    font-size: 1em;
    margin-right: auto;
  }

  .todo__text--checked {
    text-decoration: line-through;
  }

  .todo__title {
    text-transform: capitalize;
    font-size: 1.2em;
  }

  .todo__desc {
    font-style: italic;
  }

  .todo__date {
    display: block;
    color: gray;
  }

  .todo__checkbox {
    margin-right: 1em;
  }

  .todo__actions {
    margin-right: 0;
  }
</style>