const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  computed: {
    fullname() {
      console.log('I am getting started');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Ranjan Pati';
    },
  },
  methods: {
    outputFullname() {
      console.log('I am getting started............');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Ranjan Pati';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
