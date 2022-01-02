new Vue({
  el: '#app',
  data: {
    title: 'Bom dia',
    link: 'https://www.google.com/?client=safari&channel=mac_bm.br',
    linkHtml: '<a href="https://www.google.com/?client=safari&channel=mac_bm.br">Google</a>'
  },
  methods: {
    greetings: function() {
      return this.title  
    }
  }
})