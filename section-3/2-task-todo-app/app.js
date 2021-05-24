const app = Vue.createApp({
  data() {
    return {
      inputTask: '',
      tasks: [],
      isListVisible: true
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputTask);
    },
    toggleListView() {
      this.isListVisible = !this.isListVisible;
    }
  },
  computed: {
    buttonCaption() {
      return this.isListVisible ? 'Hide' : 'Show';
    }
  }
});

const vm = app.mount("#assignment");
