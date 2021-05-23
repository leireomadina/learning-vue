const app = Vue.createApp({
  data() {
    return {
      inputClass: '',
      paragraphIsHidden: false,
      // activeClass: 'active',
      // hiddenClass: 'hidden',
      inputBackgroundColor: ''
    };
  },
  methods: {
    toggleParagraphVisibility() {
      this.paragraphIsHidden = !this.paragraphIsHidden;
    },
  },
  computed: {
    paragraphClasses() {
     return {
       // only applies this two classes that exist on the CSS file
       user1: this.inputClass === 'user1',
       user2: this.inputClass === 'user2',
       // to toggle visible/hidden classes
       hidden: this.paragraphIsHidden,
       visible: !this.paragraphIsHidden 
     }
    }
  }
});

const vm = app.mount("#assignment");
