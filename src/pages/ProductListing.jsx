import React from "react";

// import products images
export default function ProductListing() {

  const products = [
    {
        "productImage": "link to Image",
        "productName": "product name",
        "product price": "price",
    }
  ]  
  return (
    <main>
      <div>
        <h1>ProductListing</h1>
      </div>
      <div>
        <img src="" alt="Product 1" />
        <h1>Product Name</h1>
        <h3>Price</h3>
        <button>Add To Cart</button>
      </div>
    </main>
  );
}

/* 
- sort icon svg
- javascript object for a product with image, name and price
- task chat gpt to create an array like these for fanhubstore product page with image, name, and price.
*/