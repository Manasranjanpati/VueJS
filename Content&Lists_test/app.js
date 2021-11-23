const app = Vue.createApp({
  data() {
    return { 
      enteredTargetValue: '',
      targets: []
     };
  },
  methods: {
    addtarget() {
      this.targets.push(this.enteredTargetValue);
    },
    RemoveTarget(idoflist) {
      this.targets.splice(idoflist, 1);
    },
  }
});

app.mount('#user-targets');