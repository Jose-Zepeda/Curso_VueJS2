new Vue({
    el: '#app',
    data: {
        nombre: ''
    },
    computed: {
        mensajeBienvenida() {
            return this.nombre
                ? `¡Bienvenido, ${this.nombre}!`
                : '¡Bienvenido!';
        }
    },
    methods: {
        mensajeBienvenidaMetodo() {
            return this.nombre
                ? `¡Bienvenido, ${this.nombre}!`
                : '¡Bienvenido!';
        }
    }
});