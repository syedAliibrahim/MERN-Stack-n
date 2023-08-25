import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ActivityContextProvider } from './context/ActivityContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ActivityContextProvider>
     <App />
    </ActivityContextProvider>
  </React.StrictMode>,
)
