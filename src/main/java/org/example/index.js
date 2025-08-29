var app = new Vue({
    el: '#app',
    data: {
        message: 'Hola Vue!'
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

app.message = 'Yo cambie el mensaje';

app2.message = 'Yo cambie el mensaje';

app3.seen = false