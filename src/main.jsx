import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import AddProduct from './Components/AddProduct/AddProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/categories')
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/addproduct',
        element:<AddProduct></AddProduct>
      }

    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
