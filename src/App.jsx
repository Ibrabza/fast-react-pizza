import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./ui/Home.jsx";
import Menu, {loader as menuLoader} from "./features/menu/Menu.jsx";
import Cart from "./features/cart/Cart.jsx";
import CreateOrder, {action as createOrderAction} from "./features/order/CreateOrder.jsx";
import Order ,{loader as orderloader} from "./features/order/Order.jsx";
import { action as orderUpdateAction } from "./features/order/UpdateOrder.jsx"
import AppLayout from "./ui/AppLayout.jsx";
import Error from "./ui/Error.jsx";

const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/menu',
                element: <Menu/>,
                loader: menuLoader,
                errorElement: <Error/>,
            },
            {
                path: '/cart',
                element: <Cart/>,
            },
            {
                path: '/order/new',
                element: <CreateOrder/>,
                action:createOrderAction,
            },
            {
                path: '/order/:orderId',
                element: <Order/>,
                loader: orderloader,
                errorElement: <Error/>,
                action: orderUpdateAction,
            }
        ]
    }
])

function App() {

  return (
      <RouterProvider router={router}/>
  )
}

export default App
