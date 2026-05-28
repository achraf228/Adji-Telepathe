import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import App from './App'
import './i18n'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: '#1A1A1A',
              color: '#7DD3FC',
              border: '1px solid #22D3EE33',
              fontFamily: '"DM Sans", sans-serif',
            }
          }}
        />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
