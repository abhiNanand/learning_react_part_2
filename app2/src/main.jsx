import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import App2 from './Navigation/App2.jsx';
import App3 from './public_private _route/App3.jsx';
import App4 from './hooks/Location.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App4/>
  </StrictMode>,
)
