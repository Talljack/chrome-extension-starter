import React from 'react'
import ReactDOM from 'react-dom/client'
import Popup from './Popup'
import '@/i18n/i18n'

ReactDOM.createRoot(document.getElementById('popup') as HTMLElement).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
)
