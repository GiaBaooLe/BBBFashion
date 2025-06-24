import { Route, Routes } from "react-router"
import { Home } from "./pages/Home/Home"
import { Product } from "./pages/Product/Product"
import { ProductDetail } from "./pages/Product/ProductDetail"

export const App = () => {
  return (
   <>
   <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/product/:id" element={<ProductDetail/>}></Route>
   </Routes>
   </>
  )
}
