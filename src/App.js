import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from './AppContext';
import Home from './components/Home';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Header from './components/Header';

const App = () => {
    return (
        <div>
            <AppProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route index element={<Home />}></Route>
                        <Route path='/product' element={<Product />}></Route>
                        <Route path='/product/:id' element={<ProductDetail />}></Route>
                        <Route path='/cart' element={<Cart />}></Route>
                    </Routes>
                </BrowserRouter>
            </AppProvider>
        </div>
    );
}

export default App;
