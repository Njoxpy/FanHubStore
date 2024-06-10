import React from "react";

export default function Header() {
  return (
    <main>
      <div className="p-8 bg-blue text-white">
        <h1 className="font-bold">Logo</h1>
        <nav className="flex justify-end">
          <ul>
            <li className="font-bold hover:text-yellow">
              <a href="#">Home</a>
            </li>
            <li className="font-bold hover:text-yellow">
              <a href="#">Products</a>
            </li>
            <li className="font-bold hover:text-yellow">
              <a href="#">Login</a>
            </li>
            <li className="font-bold hover:text-yellow">
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}

/*
Download svg for
- home icon
-  products Icon
- Login
- About

Navbar responsive
*/