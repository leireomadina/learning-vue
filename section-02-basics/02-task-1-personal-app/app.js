const app = Vue.createApp({
  data() {
    return {
      myName: "Leire",
      myAge: 32,
      imgUrl: "https://i.redd.it/sk2ztddzfqt41.png"
    };
  },
  methods: {
    addAge() {
      return this.myAge + 5;
    },
    calculateRandomNumber() {
      return Math.random();
    }
  }
});

const vm = app.mount("#assignment");
