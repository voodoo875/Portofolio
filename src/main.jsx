import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import TestNavbar from './components/TestNavbar.jsx'
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3855300246.
import Me from './components/Me.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <Home/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/Me',
    element: <Me/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TestNavbar />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
