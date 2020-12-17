import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue'

// Mount function to start up the app.
const mount = (element) => {
  const app = createApp(Dashboard);
  app.mount(element);
}

// If we are in development and isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_dashboard-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// If we are running through the container

export { mount };