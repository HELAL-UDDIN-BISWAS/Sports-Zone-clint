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
import Provider from './Provider/Provider';
import Category from './pages/category/Category';
import Detailscards from './Components/detailCard/Detailscards';
import Mycart from './Components/Card/Mycart';
import Ubdatecard from './pages/Ubdatecart/Ubdatecard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:() => fetch('/data.json')
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addproduct',
        element: <AddProduct></AddProduct>
      },
      {
        path:'/detailscards',
        element:<Detailscards></Detailscards>,
      },
      {
        path:'/mycart',
        element:<Mycart></Mycart>,
        loader:() => fetch('http://localhost:5000/categories')
      },
      {
        path:'/category/:id',
        element:<Category></Category>,
        loader:() => fetch("/data.json")
      },
      {
        path:'/Ubdatecard/:id',
        element:<Ubdatecard></Ubdatecard>,
        loader:({params}) => fetch(`http://localhost:5000/categories/${params.id}`)

      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
