import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store';
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
            <App />
    </Provider>
  </StrictMode>,
)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(() => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err))
  })
}
