const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      fullName:''
    };
  },
  methods: {
    addToCart(value){
      this.counter = this.counter + value;
    },
    removeFromCart(value){
      this.counter = this.counter - value;
    },
    onNameInput(event, lastName){
      console.log('input', event);
      //this.name = event.target.value+ '  ' + lastName; //Adding events to the value
      this.fullName = event.target.value+ '  ' + lastName;
    }
  },
});

app.mount('#events');
