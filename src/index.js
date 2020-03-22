import Vue from 'vue';
import App from './components/App.vue';

new Vue({
    render: h => h(App) // Renderiza el archivo App.vue
}).$mont('#app'); // Monta la aplicación en el div con id 'app'