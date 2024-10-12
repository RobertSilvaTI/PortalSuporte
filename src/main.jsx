import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/*import Login from './pages/login/login.jsx';*/
import './index.css'
import { AppRoutes } from './routes/AppRoutes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<Login />*/}
    <AppRoutes />
  </StrictMode>,
)
