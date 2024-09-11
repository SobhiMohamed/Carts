import React from "react";

const NavBar = ({ products, tempProducts, setPro, increment,changeBackGroundColor }) => {
  function deleteAll() {
    return setPro([]);
  }
  function reset() {
    return setPro(
      tempProducts.map((product) => {
        return { ...product };
      })
    );
  }
  function setItem(myProduct) {
    let check = products.findIndex(
      (product) => product.name === myProduct.name
    );
    if (check == -1) {
      let {...myItem}=myProduct
      setPro([...products, myItem]);
    } else {
      increment(myProduct.id);
    }
  }
  return (
    <div className="flex justify-between p-5 bg-[inhert]">
      <span className="text-[2em]">WebSite</span>
      <div className="md:flex md:justify-evenly  md:w-[60%] hidden">
        <button
          className="bg-[#380fb5] p-3 rounded-lg "
          onClick={() => setItem(tempProducts[0])}
        >
          chipsy
        </button>
        <button
          className="bg-[#380fb5] p-3 rounded-lg"
          onClick={() => setItem(tempProducts[1])}
        >
          pepsi
        </button>
        <button
          className="bg-[#380fb5] p-3 rounded-lg"
          onClick={() => setItem(tempProducts[2])}
        >
          cigaretes
        </button>
        <button
          className="bg-[#380fb5] p-3 rounded-lg"
          onClick={() => setItem(tempProducts[3])}
        >
          kranshy
        </button>
        <button className="bg-[#b50f0f] p-3 rounded-lg" onClick={deleteAll}>
          Delete All
        </button>
        <button
          className="bg-[#2dd26f] p-3 rounded-lg text-black"
          onClick={reset}
        >
          Reset
        </button>
      </div>
      <div className="dropdown dropdown-end md:hidden bg-[#1d8e68] rounded-md">
        <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">
          Menu
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
        >
          <li>
            <button className=" p-3  " onClick={() => setItem(tempProducts[0])}>
              chipsy
            </button>
          </li>
          <li>
            <button className=" p-3 " onClick={() => setItem(tempProducts[1])}>
              pepsi
            </button>
          </li>
          <li>
            <button className=" p-3 " onClick={() => setItem(tempProducts[2])}>
              cigaretes
            </button>
          </li>
          <li>
            <button className=" p-3 " onClick={() => setItem(tempProducts[3])}>
              kranshy
            </button>
          </li>
          <li>
            <button className="bg-[#b50f0f] p-3" onClick={deleteAll}>
              Delete All
            </button>
          </li>
          <li>
            <button className="bg-[#32d3c6] p-3 text-black" onClick={reset}>
              Reset
            </button>
          </li>
        </ul>
      </div>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span className="badge badge-sm indicator-item absolute bottom-11 left-[-7px] bg-[#3a96b0] size-5 text-[#010000dd]">
          {products.length}
        </span>
      </div>

      <label className="flex cursor-pointer gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller checked:bg-red-800 "
          onClick={changeBackGroundColor}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </div>
  );
};

export default NavBar;
