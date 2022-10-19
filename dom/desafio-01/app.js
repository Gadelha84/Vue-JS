new Vue({
    el: "#desafio",
    data: {
        name: 'Paulo Gadelha',
        age: 38,
        imgLink: 'https://blog.logrocket.com/wp-content/uploads/2021/09/ultimate-guide-SVGs-vue-js.png'
    },

    methods: {
        randomNumber: function() {
            return Math.random(1)
        },
        alterarNome(event) {
            this.name = event.target.value
        }
    }
})