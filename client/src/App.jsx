import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { AddProduct, ChatPage, FilterPage, FullChat, HomeLayOut, Landing, Login, MyProducts, Register, SingleProduct } from "./pages"
import { ErrorPage } from "./components"

const router = createBrowserRouter([
  {
    path: "/:provider?",
    element: <HomeLayOut />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "filter/:type",
        element: <FilterPage />
      },
      {
        path: "product/:productId",
        element: <SingleProduct />
      },
      {
        path: "chat", // protected
        element: <ChatPage />
      },
      {
        path: "chat/:chatId", // protected
        element: <FullChat />
      },
      {
        path: "sell",
        element: <AddProduct />
      },
      {
        path: "myproducts", // protected
        element: <MyProducts />
      },
      { path: "*", element: <ErrorPage /> }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}