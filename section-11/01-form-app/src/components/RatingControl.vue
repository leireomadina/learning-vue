<template>
  <ul>
    <li :class="{active: modelValue === 'poor'}">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{active: modelValue === 'average'}">
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li :class="{active: modelValue === 'great'}">
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  // data() {
  //   return {
  //     activeOption: this.modelValue
  //   }
  // },
  // computed: {
  //   activeOption() {
  //     return this.modelValue
  //   }
  // },
  methods: {
    activate(option) {
      this.activeOption = option;
      this.$emit('update:modelValue', option);
    }
  }
}
</script>

<style scoped>
.active {
  border-color: rgb(228, 9, 191);
}

.active button {
  color: rgb(228, 9, 191);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
  display: flex;
}

li {
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
