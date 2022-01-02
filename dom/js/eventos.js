new Vue({
  el: '#app',
  data: {
    title: 'Estudando eventos',
    counter: 0
  },
  methods: {
    sum() {
      this.counter += 1
    }
  }
})