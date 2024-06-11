import React from "react";

// pages

export default function CreateProduct() {
  return (
    <main>
      <div className="p-8">
        <h1 className="text-center text-yellow font-bold">
          Create Product Page
        </h1>
        <div>
          <div>
            <label htmlFor="productName" className="font-light">
              Product Name
            </label>
            <input type="text" name="productName" id="productName" />
          </div>
          <div>
            <label htmlFor="productDescription" className="font-light">
              Product Description
            </label>
            <input
              type="text"
              name="productDescription"
              id="productDescription"
            />
          </div>
          <div>
            <label htmlFor="productPrice" className="font-light">
              Product Price
            </label>
            <input type="number" name="productPrice" id="productPrice" />
          </div>
          <div></div>
          <div>
            <label htmlFor="productImage" className="font-light">
              Product Image
            </label>
            <input type="image" src="" alt="" />
            <input type="file" name="productImage" id="productImage" />
          </div>
          <button
            type="submit"
            className="p-2 bg-yellow text-white rounded font-bold m-3 hover:bg-blue hover:text-white"
          >
            Save
          </button>
          <button
            type="submit"
            className="p-2 bg-yellow text-white rounded font-bold m-3 hover:bg-blue hover:text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </main>
  );
}

/* 
Note
- On Medimu screens display label as a block level element
*/