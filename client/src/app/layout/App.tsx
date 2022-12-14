import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import Header from "./Header";
import 'react-toastify/dist/ReactToastify.css'
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";

function App() {
  const[darkMode,setDarkMode]=useState(false);
  const palletType=darkMode ? 'dark' : 'light';
  const theme =createTheme({
    palette:{
      mode:palletType,
      background :  {
        default: palletType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChangeColor()
  {
    setDarkMode(!darkMode);
  }
  //  const [products, setProducts] =useState([
  //     {name: 'product1',price:100.00},
  //     {name: 'product2',price:200.00},
  //  ]); ///Statik olan Product Dizimiz

  return (
    // <div className="app">
    //   <h1>NtStore</h1>
    //   <ul>
    //     {products.map((item,index)=>(
    //     <li key={index}>{item.name} - {item.price}</li>
    //     ))}
    //   </ul>
    // <button onClick={addProduct}>Add Product</button>
    // </div> // Product'ın eski hali artık parametreler değişti düzenlenmiş hali aşağıdaki gibidir.
    <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-right' hideProgressBar/>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChangeColor={handleThemeChangeColor}/>
      <Container>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/catalog'  element={<Catalog/>} />
        <Route path='/catalog/:id'  element={<ProductDetails/>} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/server-error' element={<ServerError/>} />
        <Route path='*' element={<NotFound/>} />
        </Routes>
      </Container>
    </ThemeProvider> // Product'ın eski hali artık parametreler değişti düzenlenmiş hali aşağıdaki gibidir.
  );
}

export default App;
