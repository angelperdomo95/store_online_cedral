
import { useRoutes, BrowserRouter } from "react-router-dom"
import { ShoppingCartProvider } from "../../Context"
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from "../../Components/Navbar"
import CheckoutSideMenu from "../../Components/CheckoutSideMenu"
import './App.css'

const AppRoutes =() => { 
  let routes = useRoutes([ 
   {path: "/", element: <Home />},
   {path: "/Clothes", element: <Home />},
   {path: "/Shoes", element: <Home />},
   {path: "/Furniture", element: <Home />},
   {path: "/Others", element: <Home />},
   {path: "/My-account", element:  <MyAccount />},
   {path: "/My-order", element:  <MyOrder />},
   {path: "/My-orders", element:  <MyOrders />},
   {path: "/My-orders/last", element:  <MyOrder />},
   {path: "/My-orders/:id", element:  <MyOrder />},
   {path: "/sign-in", element:  <SignIn />},
   {path: "/*", element:  <NotFound />},
  ])

  return routes 
 } 
 
 const App = () => {
  
  return (
    <ShoppingCartProvider>
    <BrowserRouter>
    <AppRoutes/>
    <Navbar />
    <CheckoutSideMenu/>
    </BrowserRouter>
    </ShoppingCartProvider>

  )
}

export default App
