import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { AddProduct, ChatPage, FilterPage, FullChat, HomeLayOut, Landing, Login, MyProducts, Register, SingleProduct } from "./pages"

const router = createBrowserRouter([
  {
    path: "/:provider?",
    element: <HomeLayOut />,
    errorElement: <h1>Something went wrong...</h1>,
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
        path: "chat",
        element: <ChatPage />
      },
      {
        path: "chat/:chatId",
        element: <FullChat />
      },
      {
        path: "sell",
        element: <AddProduct />
      },
      {
        path: "myproducts",
        element: <MyProducts />
      }
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