const app = Vue.createApp({
  data() {
    return {
      inputData: '',
      confirmedInput: ''
    };
  },
  methods: {
    showAlert() {
      alert('Hello, welcome to my page!');
    },
    getInputValue(event) {
      this.inputData = event.target.value;
    },
    confirmInputValue() {
      this.confirmedInput = this.inputData;
    }
  },
});

const vm = app.mount("#assignment");
