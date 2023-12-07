import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ApartmentProvider } from './context/apartments.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ApartmentProvider>
    <App />
  </ApartmentProvider>


)
