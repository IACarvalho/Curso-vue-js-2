new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            alert('Desafio 02, questão 01')
        },
        updateValue(event){
            this.valor = event.target.value
            console.log(event.target.value)
        }
    }
})