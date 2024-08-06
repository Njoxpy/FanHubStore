import React, { useState } from "react";

// pages
// handling products
export default function CreateProduct() {

  // Define state variables for form fields
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productImage, setProductImage] = useState(null);

  const [isPending, setIsPending] = useState(false);

  /**
   * How should the initial state of the product name, description, price and image be using react
   * example   const [productName, setProductName] = useState('');
   * - How to deal with uncertanities when a user inputs a photo and enters a file
   * - Impose a description for the amount of text(description) to be entered by a user
   * - when admin click into a save button it should send a post request to store.
   * - How to have two sections which hides complexity(separates) createProduct for admin and for users
   */

  const handleProductName = event => {
    setProductName(event.target.value)
  }

  const handleProductDescription = event => {
    setProductDescription(event.target.value)
    console.log(event.target.value);
  }

  const handleProductPrice = event => {
    setProductPrice(event.target.value)
  }

  const handleProductImage = event => {
    setProductImage(event.target.value)
  }

  // handle submit
  const handleSubmit = event => {
    // prevent browser default 
    event.preventDefault();

    console.log(productDescription, productImage, productName, productPrice);


    // reset to default style
    setProductDescription("");
    setProductImage("");
    setProductName("");
    setProductPrice(0);
  }
  return (
    <main>
      <div className="p-8">
        <h1 className="text-center text-yellow font-bold">
          Create Product Page
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="m-2">
              <label htmlFor="productName" className="font-light">
                Product Name
              </label>
              <input type="text" name="productName" id="productName" className="border focus:outline-none focus:border-blue rounded shadow-lg ml-2 p-1" required placeholder="Enter Product Name" 
              onChange={handleProductName}/>
            </div>
            <div className="m-2">
              <label htmlFor="productDescription" className="font-light">
                Product Description
              </label>
              <input
                type="text"
                name="productDescription"
                id="productDescription"
                className="border focus:outline-none focus:border-blue rounded shadow-lg ml-2 p-1"
                required
                placeholder="Enter Product Description"
                onChange={handleProductDescription} 
              />
            </div>
            <div className="m-2">
              <label htmlFor="productPrice" className="font-light label">
                Product Price
              </label>
              <input type="number" name="productPrice" id="productPrice" className="border focus:outline-none focus:border-blue rounded shadow-lg ml-2 p-1" required placeholder="Enter Product Price"
              onChange={handleProductPrice}
              />
            </div>
            <div></div>
            <div>
              <label htmlFor="productImage" className="font-light">
                Product Image
              </label>
              {/* <input type="image" src="" alt="" /> */}
              <input type="file" name="productImage" id="productImage" className="border focus:outline-none focus:border-blue rounded shadow-lg ml-2" required placeholder="Upload Images For the Product p-2" 
              onChange={handleProductImage}/>
            </div>
            <button
              type="submit"
              className="p-2 bg-yellow text-white rounded font-bold m-3 hover:text-white"
            >
              Save
            </button>
            <button
              type="submit"
              className="p-2 bg-red-600 text-white rounded font-bold m-3 hover:text-white"
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </main>
  );
}

/* 
Note
- On Medimu screens display label as a block level element
- center the create page section for the large screens
*/