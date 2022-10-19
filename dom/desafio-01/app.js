new Vue({
    el: "#desafio",
    data: {
        name: 'Paulo Gadelha',
        age: 38,
        linkHtml: '<a href="http://google.com.br">Google</a>'
    },

    methods: {
        randomNumber: function() {
            return Math.random(1)
        }
    }
})