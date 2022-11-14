new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertClick() {
            alert("Fui clicado!!")
        },
        listenKey(event) {
            this.valor = event.target.value
        }
    },
})