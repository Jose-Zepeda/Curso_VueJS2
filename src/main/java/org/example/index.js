var app = new Vue({
    el: '#app',
    data: {
        message: 'Hola Vue!',
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Usted cargó esta página el ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Aprender JavaScript' },
            { text: 'Aprender Vue' },
            { text: 'Construir algo increíble' }
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hola Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hola Vue!'
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetales' },
            { id: 1, text: 'Queso' },
            { id: 2, text: 'Cualquier otra cosa que se supone que los humanos coman' }
        ]
    }
})

app.message = 'Yo cambie el mensaje';

app2.message = 'Yo cambie el mensaje';

app3.seen = false

//La instancia VUE

var data = { a: 1 }

var vm = new Vue({
    data: data
})

vm.a = 2
data.a

data.a = 3
vm.a

vm.b = 'hola'


var obj = {
    foo: 'bar'
}

Object.freeze(obj)

new Vue({
    el: '#app',
    data: obj
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

vm.$watch('a', function (newValue, oldValue) {

})

new Vue({
    data: {
        a: 1
    },
    created: function () {
        console.log('a es: ' + this.a)
    }
})