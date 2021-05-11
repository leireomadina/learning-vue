const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue',
      courseGoalB: 'Master Vue and build amazing apps',
      courseGoalC: '<h3>Learn another JS framework :v</h3>',
      vueLink: 'https://v3.vuejs.org/guide/introduction.html#what-is-vue-js'
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if(randomNumber < 0.5) {
        // gets access to the data stored in the Vue global object through the "this" keyword
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
   }
});

const vm = app.mount('#user-goal');