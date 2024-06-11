import React from "react";

export default function Registration() {
  return (
    <main>
      <div className="p-8 bg-gray">
        <h2 className="text-center font-bold text-yellow">Welcome To Regstration Page</h2>
        <div>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            placeholder="Enter Your Username"
          />

<label htmlFor="username">E-Mail</label>
          <input
          type="email"
            name="email"
            id="email"
            required
            placeholder="Enter Your E-Mail"
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
              className="bg-green p-3 rounded text-white font-light"
            >
              Create Account
            </button>
            <p>Already Registered? Login <a href="#" className="text-blue hover:underline">Here</a></p>
          </div>
        </div>
      </div>
    </main>
  );
}
