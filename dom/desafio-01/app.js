new Vue({
  el: '#desafio',
  data: {
    name: 'Israel Afonso',
    age: 29,
    imageUrl: 'https://miro.medium.com/max/2000/1*ACR0gj0wbx91V_xgURifWg.png'
  },
  computed: {
    title(){
      return `Usando VueJS - ${this.name} (${this.age})`
    },
    randomNumber() {
      return Math.random()
    }
  }
})