import ReactDOM from 'react-dom/client'
import React from 'react'

import './index.css'

import { enableMSW } from './api/mocks'
import { App } from './App'

enableMSW().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
