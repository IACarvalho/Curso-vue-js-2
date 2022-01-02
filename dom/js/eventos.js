new Vue({
  el: '#app',
  data: {
    title: 'Estudando eventos',
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    sum(number, event) {
      console.log(number, event)
      this.counter += number
    },
    updatePosition(event) {
      this.x = event.clientX
      this.y = event.clientY
    },
    // Parar evento via function
    stopEvent(event){
      event.stopPropragation()
    },
    doNothing(){
      console.log('Não navegou')
    },
    showAlert(event){
      alert(`Você precionou ${event.key}`)
    }
  }
})