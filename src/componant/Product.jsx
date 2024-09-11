import React from "react";

const Product = ({ product:{name,price,items,id} ,increment,decrement,deleteItem}) => {
  return (
    <div>
            <div  className="  flex flex-wrap justify-evenly text-lg bg-[#29dc7d] rounded-md mt-8 text-[#000] sm:h-[10vh] h-[20vh] items-center	">
                <span>name : {name}</span>
                <span>price : {price} </span>
                <span>items : {items} </span>
                <span className="flex gap-5">
                <button className="size-10  bg-[#e120ab] rounded-md" onClick={()=>increment(id)}>+</button>
                <button className="size-10  bg-[#e120ab] rounded-md "onClick={()=>decrement(id)}>-</button>
                <button className="size-10  bg-[#e120ab] rounded-md"onClick={()=>deleteItem(id)}>Del</button>
                </span>
                <span>total price : {price * items}</span>
            </div>
        
    </div>
  )
};

export default Product;
