const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    boxAClasses() {
      return { active: this.boxASelected };
    },
  },
  methods: {
    boxSelected(box) {
      if (box === 'demo1') {
        this.boxASelected = !this.boxASelected;
      } else if (box === 'demo2') {
        this.boxBSelected = !this.boxBSelected;
      } else if (box === 'demo3') {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
});

app.mount('#styling');
