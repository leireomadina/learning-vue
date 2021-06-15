<template>
  <section>
    <form @submit.prevent="submitData">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="inputName" @input="getinputName">
      </div>
      <div>
        <label for="age">Age:</label>
        <input type="age" id="age" v-model="inputAge" @input="getinputAge">
      </div>
      <button>Set User Data</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      inputName: '',
      inputAge: '' 
    }
  },
  emits: {
    'set-data': function(inputName, inputAge) {
      if(inputName && inputAge) {
        return true;
      } else {
        console.warn('name or age are missing');
        return false;
      }
    }
  },
  methods: {
    submitData() {
      this.$emit('set-data', this.inputName, this.inputAge);
    }
  }
}
</script>
