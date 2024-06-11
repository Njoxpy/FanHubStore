/* 
page for user login
light Blue for "Login" to match the form fields, and green for "Register" to draw attention.
*/
import React from "react";

export default function Login() {
  return (
    <main>
      <div className="p-8 bg-gray">
        <h2>Welcome To Login Page</h2>
        <div>
          <label htmlFor="username" className="label">UserName/E-Mail</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            placeholder="Enter Your Username or E-Mail"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Enter Your Password"
            autoComplete="true"
          />
          <div>
            <button
              type="submit"
              className="bg-blue p-3 rounded text-white font-light"
            >
              Login
            </button>
            <p>
              Not Registered? Create New Account
              <a href="#" className="text-blue hover:underline">
                Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

/* 
- The use of classname label
*/