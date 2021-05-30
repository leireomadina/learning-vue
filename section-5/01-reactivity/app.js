const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      console.dir(this.$refs.userText); // gets the JS input element
      this.message = this.$refs.userText.value;
      // $refs is an object whose keys are the ref attributes names we define in the HTML file
    }
  },
  // Vue lifecycles hooks:
  beforeCreate() {
    console.log('beforeCreate()');
    // no data will appear on the screen
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
    // data gets rendered in the screen
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated()');
  },
  beforeUnmount() {
    console.log('beforeUnmount()');
  },
  unmounted() {
    console.log('unmounted()');
    // data disappears from the screen
  }
});

app.mount('#app');

setTimeout(function() {
  app.unmount('#app');
}, 3000);


// creates a second Vue app
const app2 = Vue.createApp({
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: 'Pizza!'
    }
  }
});

app2.mount('#app2');

// let's write some vanilla JS code :)

/*
let message = 'Hello';
let longMessage = message + ' World!';
console.log(longMessage);

message = 'Hi';
console.log(longMessage); 
// message does not change: JS is not reactive!
*/

// JS Proxies: let's create a reactive JS system
const data = {
  message: 'Hello',
  longMessage: 'Hello! World!'
}

const handler = {
  // let's create some traps in the handler
  set(target, key, value) {
    console.log(target); // data object
    console.log(key); //message
    console.log(value); // Hello!!!!

    if(key === 'message') {
      target.longMessage = value + ' World!'
    }
    target.message = value;
  }
}
const proxy = new Proxy(data, handler);

// the proxy wraps our data object, so we can get access to its properties
proxy.message = 'Hello!!!!';
console.log('long message:', proxy.longMessage); // Hello!!!! World!
// we built a reactive system to track a property and update it when it changes
// this is a simplify explanation of how Vue reactivity works under the hood

