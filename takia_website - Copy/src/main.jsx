import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Products from "./productList/Products.jsx";
import Success from './Success.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "productList/Products/:ProductId",
    element: <Products/>,
  },
  {
    path: "success",
    element: <Success/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
