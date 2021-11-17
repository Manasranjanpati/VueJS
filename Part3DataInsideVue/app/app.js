const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Hi This is my 1st Message!!!',
            courseGoalB: 'Hi This is my 2nd Message!!!',
            vueLink: 'https://www.w3schools.com/'

        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    },

})

app.mount('#user-goal');