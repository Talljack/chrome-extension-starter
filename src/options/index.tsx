import React from 'react'
import ReactDOM from 'react-dom/client'
import Options from './Options'
import '@/i18n/i18n'
import './index.css'

ReactDOM.createRoot(document.getElementById('options-page') as HTMLElement).render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
)
