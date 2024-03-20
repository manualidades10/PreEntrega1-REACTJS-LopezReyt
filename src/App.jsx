import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navigation/NavBar'
import HomeComp from './components/home/HomeComp';
import SingleProdComp from './components/product/SingleProdComp';
import CategoryProdComp from './components/categories/CategoryProdComp';
import ContactComp from './components/contact/ContactComp';
import ItemListConainer from './components/products/ItemListContainer'


function App() {
  
  return (
    <>
    <BrowserRouter>
    <h1>BIENVENIDOS A SIR MATE</h1>
    <NavBar/>
    <Routes>
          <Route exact path="/" element={<HomeComp />} />
          <Route exact path="/products" element={<ItemListConainer />} />
          <Route exact path="/product/:prodId" element={<SingleProdComp />} />
          <Route
            exact
            path="/categories/:category"
            element={<CategoryProdComp />}
          />
          <Route exact path="/contact" element={<ContactComp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
