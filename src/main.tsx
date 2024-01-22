import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import Login from '@pages/Login'
import RoomList from '@pages/RoomList'
import Member from '@pages/Member'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hello</div>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/rooms',
    element: <RoomList />
  },
  {
    path: '/member',
    element: <Member />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
