const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullName: "",
    };
  },
  watch: {
    // name(value) {
    //   if (value === "") {
    //     this.fullName = " ";
    //   } else {
    //     // this.fullname = this.name + ' ' + 'Ordeñana';
    //     // watchers take automatically the last value of its dependency:
    //     // can pass it as an argument (value) or two (newValue, oldValue)
    //     this.fullName = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = this.name + " " + value;
    //   }
    // },
    counter(value) {
      if(value > 50) {
        const that = this;
        setTimeout(function() {
          that.counter = 0;
        }, 2000);
      }
    }
  },
  computed: {
    // better in this case to use a Computer Property than a Watcher
    fullName() {
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    },
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    outputFullname() {
      console.log("Running again...");
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + "Ordeñana";
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
