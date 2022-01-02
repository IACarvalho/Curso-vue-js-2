new Vue({
  el: '#app',
  data: {
    title: 'Estudando eventos',
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    sum() {
      this.counter += 1
    },
    updatePosition(event) {
      this.x = event.clientX
      this.y = event.clientY
    }
  }
})