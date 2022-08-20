import { useEffect, useState } from "react";
import { Product } from "../models/product";

function App() {
//  const [products, setProducts] =useState([  
//     {name: 'product1',price:100.00},
//     {name: 'product2',price:200.00},   
//  ]); ///Statik olan Product Dizimiz

 const [products, setProducts] =useState<Product[]>([]); ///Dinamik hale getiricez inbterface olusturmustuk


 useEffect(()=>{
  fetch('http://localhost:5000/api/Products')
  .then(response => response.json())
  .then(data =>setProducts(data))
 },[])//[] empty array eklemezsek sürekli products 'u çağrıyor buyüzden ekledik

// function addProduct(){
//   setProducts(prevState=> [...prevState, {name: 'product' + (prevState.length+1), price:(prevState.length*100)+100}])
// } //üstteki eski Product dizisini değiştirince bu kod hata vericek çünkü interface teki diğer alanları da bekliyor

function addProduct(){
  setProducts(prevState=> [...prevState, 
    {
      id:prevState.length+101,
      name: 'product' + (prevState.length+1), 
      price:(prevState.length*100)+100,
      brand:'some brand',
      description:'some description',
      pictureUrl:'http://picsum.photos/200',

  }]);
} //üstteki eski Product dizisini değiştirince bu kod hata vericek çünkü interface teki diğer alanları da bekliyor
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
     <div className="app">
      <h1>NtStore</h1>
      <ul>
        {products.map((product)=>(
        <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
    <button onClick={addProduct}>Add Product</button>
    </div> // Product'ın eski hali artık parametreler değişti düzenlenmiş hali aşağıdaki gibidir.
    
  );
}

export default App;