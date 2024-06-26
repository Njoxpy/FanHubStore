import React from "react";

export default function Products() {
  return (
    <main>
      <div className="p-8 bg-gray">
        <h1>Products Section</h1>
        {/* product 1 */}
        <div>
            <img src="" alt="Product 1 Image" />
            <h1>Product Name</h1>
            <h1>Product Price</h1>
            <button className="bg-yellow p-3 rounded text-white font-bold m-1 hover:bg-blue">CTA</button>
        </div>
      </div>
    </main>
  );
}

/*
- Into product section it should display 3 products in a row on large screens.
- Download 3 products image.
- create javascript array for storing product name, product price and image.
*/