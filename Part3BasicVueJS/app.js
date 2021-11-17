const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finished my course and learned the Vue!',
            vueLink: 'https://www.w3schools.com/'

        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Learn Javascript';
            } else {
                return 'Master Vue!';
            }
        }
    },

})

app.mount('#user-goal');