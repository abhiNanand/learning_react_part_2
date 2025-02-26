import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import App2 from './Navigation/App2.jsx';
import App3 from './public_private _route/App3.jsx';
import App4 from './hooks/Location.jsx';
import App5 from './ErrorHandling/App5.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
