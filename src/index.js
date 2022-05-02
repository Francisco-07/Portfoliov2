import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import './unhide.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
document.addEventListener('DOMContentLoaded', function (event) {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
