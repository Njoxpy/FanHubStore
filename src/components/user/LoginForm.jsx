/* 
page for user login
light Blue for "Login" to match the form fields, and green for "Register" to draw attention.
*/
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function UserLogin() {

  // handle input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = event => {
    setUsername(event.target.value)
  }

  const handlePassword = event => {
    setPassword(event.target.value)
  }

  const handleSubmit = event => {
    // prevent default
    event.preventDefault()

    // reset
    setPassword('')
    setUsername('')
  }


  return (
    <main>
      <div className="p-8 bg-gray">
        <h2>Welcome To Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="label">UserName/E-Mail</label>
            <input
              type="text"
              name="username"
              id="username"
              required
              placeholder="Enter Your Username or E-Mail"
              onChange={handleUsername}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Enter Your Password"
              autoComplete="true"
              onChange={handlePassword}
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
                <Link to="/" className="text-blue hover:underline">
                  Here
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

/* 
- The use of classname label
*/