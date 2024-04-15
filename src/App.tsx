import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


import Home from './components/dashboard/home/Home';
import OrderManagement from './components/dashboard/order-management/OrderManagement';
import Customers from './components/dashboard/customers/Customers';
import Coupon_code from './components/dashboard/coupon-code/Coupon_code';
import Categories from './components/dashboard/categories/Categories';
import Transaction from './components/dashboard/transaction/Transaction';
import Brand from './components/dashboard/brand/Brand';
import Add_products from './components/dashboard/add_products/Add_products';
import Product_List from './components/dashboard/product_list/Product_List';
import Manage_admins from './components/dashboard/manage_admins/Manage_admins';
import Admin_roles from './components/dashboard/admin_roles/Admin_roles';
import Portal from './components/dashboard/Portal/Portal';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    children:[
        {
          path:'/',
          element:<Portal/>
        },
        {
          path:'/order',
          element:<OrderManagement/>
        },
        {
          path:'/customers',
          element:<Customers/>,
        
        },
        {
          path:'/coupon-code',
          element:<Coupon_code/>,
        
        },
        {
          path:'/categories',
          element:<Categories/>,
        
        },
        {
          path:'/transaction',
          element:<Transaction/>,
        
        },
        {
          path:'/brand',
          element:<Brand/>,
        
        },
        {
          path:'/add-products',
          element:<Add_products/>,
        
        },
        {
          path:'/products-list',
          element:<Product_List/>,
        
        },
        {
          path:'/manage-admin',
          element:<Manage_admins/>,
        
        },
        {
          path:'/admin-roles',
          element:<Admin_roles/>,
        
        },
       
    ]
  },
  
 
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
