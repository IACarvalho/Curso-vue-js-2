new Vue({
  el: '#app',
  data: {
    title: 'Aprendendo Vue 2'
  },
  methods: {
    updateTitle(event) {
      this.title = event.target.value
    }
  }
})