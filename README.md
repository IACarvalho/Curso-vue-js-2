# Curso de Vue 2
## Iniciando com Vue

Para iniciar uma aplicação Vue basta importar um script no HTML, mas essa é um forma simplificada de usar.

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
```

Após basta criar um script javascript, nesse arquivo é instanciado o vue e passado um **option object** que, nesse objeto é apontado o id de uma **div** onde os componentes Vue vão renderizar, além de um objeto **data** 
```js
new Vue({
  el: '#app',
  data: {}
})
```

## Lincando atributos(atribute biding)
O vue tem a capacidade de fazer uma ligação com as propriedades **HTML**. Para fazer isso basta usar **v-on**, como é um recurso extremamente usado existe um atalho que é basicamente dois pontos (**:**)
```html
<img :src="image">
```

## Lidando com eventos(Event handling)
Além do biding pode ser adicionado um "ouvinte" à uma tag, e quando acontecer determinado evento é chamado uma função javascript. Para isso usa-se o **v-on**. Como é um recurso muito usado, assim como o biding, existe um atalho, basta usar arroba (**@**). O handling pode ficar ouvindo vários tipos de evento, como click ou mouseover etc.
```html
<input type="text" @input="updateTitle">
```

## DOM
Tudo que pode ser rederizado no html deve ser string ou numérico (que será convertido para string), caso não seja vai gerar um erro de semâtica,