import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Home from "./view/frontend/Home";
import Login from "./view/frontend/Login";
import Registration from "./view/frontend/Registration";
import Catagory from "./view/frontend/catagories/Catagory";
import MyCart from "./view/frontend/Cart/MyCart";
import ShippingInfo from "./view/frontend/Cart/ShippingInfo";
import DelivaryInfo from "./view/frontend/Cart/DelivaryInfo";
import Payment from "./view/frontend/Cart/Payment";
import Confermations from "./view/frontend/Cart/Confermations";
import Demo from "./component/frontend/Demo";
import Sg from "./component/frontend/Sg";
import SingleProduct from "./view/frontend/SingleProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminLogin from "./view/frontend/admin/AdminLogin";
import ResetPass from "./view/frontend/ResetPass";
import NotFound from "./view/frontend/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/login",
    element: <Login />,
  },{
    path: "/registration",
    element: <Registration />,
  },{
    path: "/catagory/:slug",
    element: <Catagory />,
  },{
    path: "/singleproduct",
    element: <SingleProduct />,
  },{
    path: "/cart",
    element: <MyCart />,
  },{
    path: "/shipping",
    element: <ShippingInfo />,
  },{
    path: "/delivaryInfo",
    element: <DelivaryInfo />,
  },{
    path: "/payment",
    element: <Payment />,
  },{
    path: "/confermations",
    element: <Confermations />,
  },{
    path: "/adminlogin",
    element: <AdminLogin />,
  },{
    path: "/resetpass",
    element: <ResetPass />,
  },{
    path: "/demo",
    element: <Demo />,
  },{
    path: "/notFound",
    element: <NotFound />,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
