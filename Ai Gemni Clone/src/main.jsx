import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Zaib from './context/zaib.jsx'

createRoot(document.getElementById('root')).render(
  <Zaib>

    <App/>

  </Zaib>
)
