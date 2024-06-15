import React, { useState } from "react";

export default function UserRegistration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = event => {
    setUsername(event.target.value)
  }

  const handleEmail = event => {
    setEmail(event.target.value)
  }

  const handlePassword = event => {
    setPassword(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    setEmail('');
    setPassword('');
    setUsername('');
  }

  return (
    <main>
      <div className="p-8 bg-gray">
        <h2 className="text-center font-bold text-yellow">Welcome To Regstration Page</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              name="username"
              id="username"
              required
              placeholder="Enter Your Username"
              onChange={handleUsername}
            />

            <label htmlFor="username">E-Mail</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter Your E-Mail"
              onChange={handleEmail}
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
                className="bg-green p-3 rounded text-white font-light"
              >
                Create Account
              </button>
              <p>Already Registered? Login <a href="#" className="text-blue hover:underline">Here</a></p>
            </div>
          </div>
        </form>      </div>
    </main>
  );
}
