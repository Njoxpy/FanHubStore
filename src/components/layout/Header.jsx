import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <main>
      <div className="p-8 bg-blue text-white">
        <h1 className="font-bold">funStoreHub</h1>
        <nav className="flex justify-end">
          <ul>
            <li className="font-bold hover:text-yellow">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="font-bold hover:text-yellow">
            <NavLink to="products">Products</NavLink>
            </li>
            <li className="font-bold hover:text-yellow">
            <NavLink to="login">Login</NavLink>
            </li>
            <li className="font-bold hover:text-yellow">
            <NavLink to="about">About</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <Outlet />
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
- use menu for small screens dropdown menu for small screens, on small screens display the menu and when a user click into a menu then it shows navigation links available(home, Products, Login and about.)
- Design into mobile design and web design for pc.
*/