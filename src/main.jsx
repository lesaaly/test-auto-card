import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CarCardPage from './pages/CarCardPage/CarCardPage.jsx'
import MobileHeader from './widgets/MobileHeader/MobileHeader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MobileHeader />
    <CarCardPage />
  </StrictMode>,
)
