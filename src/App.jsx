import Auth from "./auth";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Products from "./Products";
import { context } from "./context";

export default function App(){
  return(
  <context.Provider value={[]}>
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Auth/>} />
      <Route exact path="/products" element={<Products/>} />
    </Routes>
  </BrowserRouter>
  </context.Provider>
)
}