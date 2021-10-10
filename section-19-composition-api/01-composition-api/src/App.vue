<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3>
    <button @click="setAge">Change Age</button>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const uName = ref('Maximilian');
    const uAge = ref(31);
    // const user = reactive({
    //   name: 'Leire',
    //   age: 33
    // });

    function setNewAge() {
      uAge.value = 32;
    }

    return { userName: uName, userAge: uAge, setAge: setNewAge };
  }

  // data() {
  //   return {
  //     userName: 'Maximilian',
  //     age: 31
  //   };
  // },
  // methods: {
  //   setNewAge() {
  //     this.age = 32;
  //   }
  // }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
