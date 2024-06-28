import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'


// routes root
const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Root Routes</div>
  },
  {
    path: '/register',
    element: <div>Register Route</div>
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
