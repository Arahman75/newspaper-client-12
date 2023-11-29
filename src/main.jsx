import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './Routes/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './provide/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-6xl mx-auto'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
