new Vue({
  el: '#app',
  data: {
    title: 'teste',
    link: 'https://www.google.com/?client=safari&channel=mac_bm.br'
  },
  methods: {
    greetings: function() {
      return this.title  
    }
  }
})