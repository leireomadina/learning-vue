const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addNumber(num) {
      this.counter += num;
    },
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return 'Not there yet!';
      } else if (this.counter === 37) {
        return this.counter;
      } else {
        return 'Too much!';
      }
    }
  },
  watch: {
    result(value) {
      console.log('Watcher executing...');
      if(value != 'Not there yet') {
        const that = this;
        setTimeout(function() {
          that.counter = 0;
        }, 5000);
      }
    },
  },
});

const vm = app.mount("#assignment");
