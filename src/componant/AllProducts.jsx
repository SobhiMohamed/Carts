import React from "react";
import Product from "./Product";

const AllProducts = ({ products, increment, decrement, deleteItem }) => {
  let allPrices = products.map((product) => {
    return product.price * product.items;
  });
  let totalAmount = `Your Cart Is Empty`;
  if (allPrices.length > 0) {
    let total = allPrices.reduce((num1, num2) => {
      return num1 + num2;
    });
    totalAmount = `Total Amount : ${total}`;
  }
  return (
    <div className="flex flex-col gap-5 mt-5">
      <p className="text-[#30ce77] text-[2rem] text-center ">My Cart</p>
      {products.map((product, i) => (
        <Product
          key={i}
          product={product}
          increment={increment}
          decrement={decrement}
          deleteItem={deleteItem}
        />
      ))}
      <p className="text-red-600 text-[2em] text-center">{totalAmount}</p>
    </div>
  );
};

export default AllProducts;
