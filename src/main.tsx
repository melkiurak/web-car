import React from 'react'
import ReactDOM from 'react-dom/client'
import  './index.css'
import { AppHome } from './pages/Home/Home.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppHome/>
    </BrowserRouter>
  </React.StrictMode>,
)
