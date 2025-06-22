import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import routes from './routes/routes';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

const app = createApp(App)
app.use(routes);
app.use(PrimeVue);
app.use(ToastService);
app.mount('#app');