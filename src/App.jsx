import React, { useState } from "react";
import NavBar from "./componant/NavBar";
import AllProducts from "./componant/AllProducts";
export const App = () => {
  const [products, setPro] = useState([
    { id: 1, name: "chipsy", price: 100, items: 1 },
    { id: 2, name: "pepsi", price: 200, items: 1 },
    { id: 3, name: "cigaretes", price: 300, items: 1 },
    { id: 4, name: "kranshy", price: 400, items: 1 },
  ]);

  const [tempProducts] = useState([
    { id: 1, name: "chipsy", price: 100, items: 1 },
    { id: 2, name: "pepsi", price: 200, items: 1 },
    { id: 3, name: "cigaretes", price: 300, items: 1 },
    { id: 4, name: "kranshy", price: 400, items: 1 },
  ]);
  const [bgColor, setbgColor] = useState(true);

  
  function increment(id) {
    const newProducts = products.map((product) => {
      if (id === product.id) {
        product.items += 1;
      }
      return product;
    });
    return setPro(newProducts);
  }
  function decrement(id) {
    const newProducts = products.map((product) => {
      if (id === product.id && product.items > 1) {
        product.items -= 1;
      }
      return product;
    });
    return setPro(newProducts);
  }
  function deleteItem(id) {
    const newProducts = products.filter((product) => {
      return id != product.id;
    });
    return setPro(newProducts);
  }
  function changeBackGroundColor(){
    return setbgColor(!bgColor)
  }
  
  return (
    <div className={bgColor?"bg-[#ddd] h-[100vh]":"dark:bg-slate-800  h-[100vh]"}>
      <NavBar
        products={products}
        tempProducts={tempProducts}
        setPro={setPro}
        increment={increment}
        changeBackGroundColor={changeBackGroundColor}
      />
      <AllProducts
        products={products}
        increment={increment}
        decrement={decrement}
        deleteItem={deleteItem}
      />
    </div>
  );
};
export default App;
