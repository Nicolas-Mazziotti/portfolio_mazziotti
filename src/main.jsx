import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { I18nextProvider } from 'react-i18next'
import i18n from './Components/LanguageData/LanguageConfig.jsx'
import './index.css'
import 'aos/dist/aos.css'
import 'i18next'
// import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}> {/* Envolver App con I18nextProvider */}
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
