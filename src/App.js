import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './pages/ProductsLists';
import Add from './pages/ProductAdd';
import ProductsUpdate from './pages/ProductsUpdate';
import ProductsDetails from './pages/ProductsDetails';
//import "./style/modules.app.css"
//import styles from './style/modules.app.css';
//import "./style/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import  HeaderComponent  from "./components/header.components";
import ProductsCart from "./pages/ProductsCart";

function App() {

  return (
   <div className="App">
   <Router>
    <HeaderComponent/>
    <Routes>
        <Route path="/" element={<Products />}/>
        <Route path="/cart" element={<ProductsCart />}/>
        <Route path="/add" element={<Add />}/>
        <Route path="/product/:id" element={<ProductsDetails />}/>
        <Route path="/product/update/:id" element={<ProductsUpdate />}/>
    </Routes>
   </Router>
   </div>
  )
}

export default App

//npm run dev
