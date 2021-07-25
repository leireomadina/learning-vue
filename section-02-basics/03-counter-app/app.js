const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    // setName(event) {
    //   this.name = event.target.value;
    // },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    submitForm(event) {
      event.preventDefault();
      alert('submitted!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
