<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
  </section>
</template>

<script>
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const uAge = ref(31);
    // const user = reactive({
    //   name: 'Leire',
    //   age: 33
    // });

    const uName = computed(function() {
      return firstName.value + ' ' + lastName.value;
    });

    watch([uAge, uName], function(newValues, oldValues) {
      console.log('Old age: ' + oldValues[0]);
      console.log('New age: ' + newValues[0]);
      console.log('Old name: ' + oldValues[1]);
      console.log('New name: ' + newValues[1]);
    });

    //method:
    function setNewAge() {
      uAge.value = 32;
    }

    return {
      userName: uName,
      userAge: uAge,
      setAge: setNewAge,
      firstName,
      lastName
    };
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
  // },
  // computed: {},
  // watch: {
    // age(val) {
    //   console.log(age);
    // }
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
