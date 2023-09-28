import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)