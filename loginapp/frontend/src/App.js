import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
// import all components
import UserName from './components/UserName'
import Password from './components/Password'
import Register from './components/Register'
import Profile from './components/Profile'
import Recovery from './components/Recovery'
import Reset from './components/Reset'
import PageNotFound from './components/PageNotFound'

// routes root
const router = createBrowserRouter([
  {
    path: '/',
    element: <UserName></UserName>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/password',
    element: <Password></Password>
  },
  {
    path: '/profile',
    element: <Profile></Profile>
  },
  {
    path: '/recovery',
    element: <Recovery></Recovery>
  },
  {
    path: '/reset',
    element: <Reset></Reset>
  },
  {
    path: '/pagenotfound',
    element: <PageNotFound></PageNotFound>
  }
])
const App = () => {
  return (
   <main>
    <RouterProvider router={router}>
      
    </RouterProvider>
   </main>
  )
}

export default App
