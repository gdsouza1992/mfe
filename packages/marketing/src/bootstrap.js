import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

// Mount function to start up the app.
const mount = (element) => {
  ReactDom.render(
    <App />,
    element
  );
}

// If we are in development and isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// If we are running through the container

export { mount };