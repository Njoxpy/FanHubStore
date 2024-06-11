import React from "react";

export default function Hero() {
  return (
    <main className="p-8">
      <h1 className="font-bold">Welcome to funStoreHub</h1>
      <p>
        Welcome to the funStoreHub Golang API, powering the backend for your
        favorite club's sports center store. This API allows seamless
        interaction with the funStoreHub frontend, enabling users to create,
        display, edit, and delete products specific to their beloved team.
      </p>
      <button className="bg-yellow p-3 rounded text-white font-bold m-1 hover:bg-blue">
        Learn More
      </button>

      <button className="bg-yellow p-3 rounded text-white font-bold hover:bg-blue">
        Buy Now
      </button>
    </main>
  );
}
