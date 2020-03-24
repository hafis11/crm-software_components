import React from 'react';
import './App.css';
import ProductCard from './component/productcard/productCard';
import Addproduct from './component/AddProduct/addProduct';


function App(){
  return (
    <div className="App">
      <div className="productlist">
        <ProductCard productName="Driller" productDescription="@product Description" productPrice="100"/>
    </div>
    <Addproduct></Addproduct>
    </div>
  );
}

export default App;
