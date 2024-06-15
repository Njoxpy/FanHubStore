/*
Layout components
- Header, footer, sidebar
*/
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <main>
      <div className="p-8 bg-blue">
        <div className="text-center">
          <Link to="/terms/conditions">
            <span className="text-green font-semibold p-2 hover:underline hover:text-white">
              Terms and Conditions
            </span>
          </Link>
          <Link to="/terms/privacy">
            <span className="text-green font-semibold p-2 hover:underline hover:text-white">
              Privacy Policy
            </span>
          </Link>
        </div>
        <div>
          <p className="text-green font-bold text-center hover:underline hover:text-white">2024 FanHub Store</p>
        </div>
      </div>
    </main>
  );
}
