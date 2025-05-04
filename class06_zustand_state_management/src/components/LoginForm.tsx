"use client";
import { sanityLoginUploader } from '@/services/sanityApi';
import React, { useState } from 'react';



function LoginForm() {

  // useState is a hook that allows you to add state to your functional components in React.
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log(`Username😁: ${username}, Password: ${password}`)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {  // button press karne se ye function call hota hai or apne andar wala function chlata hai..
    e.preventDefault(); // ye karta ye hai ke button click karne par hmra form sara data kahi or bhrjne ki karta hai ye usko rokta hai.
    // sanity login uploader
    const loginSanityFunction = async () => {
      console.log(`Username😈: ${username}, Password: ${password}`); // ye console par data ko print karega jo hamne input kiya hai.
      const response = await sanityLoginUploader(username, password); // input se aya data sanity data create waly fucntion mein bhej rhy hain taky ye data sanity pe create ho.

      alert(`Login successful!`); // ye alert box khulega jab data create ho jayega.
    }

    loginSanityFunction()
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <div className="space-y-4">
        <form onSubmit={handleSubmit}>

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>

          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default LoginForm;