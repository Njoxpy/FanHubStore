import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <main className="p-8">
      <h1 className="font-bold text-xl py-2">Welcome to funStoreHub</h1>
      <p>
        Welcome to the funStoreHub Golang API, powering the backend for your
        favorite club's sports center store. This API allows seamless
        interaction with the funStoreHub frontend, enabling users to create,
        display, edit, and delete products specific to their beloved team.
      </p>
      <button className="bg-yellow p-2 rounded text-white font-bold m-1 hover:bg-blue">
        Learn More
      </button>

      <button className="bg-yellow p-2 rounded text-white font-bold hover:bg-blue">
        <Link to="/products">Buy Now</Link>
      </button>
    </main>
  );
}

/*
- download hero image to include into fanhubstrore website.
- on small screens diplay the hero section into rows, first rows for hello image then second for title and subtitle and third row for cta(learn more and buy now button) 

- when a user clicks into lear more have a link a link that sends a user to a certain product being displayed by id.
*/