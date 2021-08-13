import React from "react";
import { useLogin } from "../../hooks";

export const Login = () => {
  const { email, password, setEmail, setPassword, checkLogin } = useLogin();

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="bg-white lg:w-4/12 md:w-1/2 sm:w-6/12 w-full mx-auto">
        <div className="p-5 border-b-2">
          <h4 className="font-semibold uppercase text-gray-700">Login</h4>
        </div>
        <div className="p-5">
          <form className="w-full">
            <div className="inline-grid w-full mb-3">
              <input
                type="email"
                defaultValue="test@vc.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                className="focus:outline-none focus:ring-2 ring-purple-300 placeholder-gray-600 bg-gray-200 w-full p-2 rounded"
                placeholder="Email address"
              />
            </div>
            <div className="inline-grid w-full mb-3">
              <input
                type="password"
                defaultValue="123456"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                name="password"
                className="focus:outline-none focus:ring-2 ring-purple-300 placeholder-gray-600 bg-gray-200 w-full p-2 rounded"
                placeholder="Password"
              />
            </div>
          </form>
        </div>
        <div className="p-5 border-t-2 flex items-center gap-1 w-full">
          <div className="inline-grid w-full mb-3">
            <button
              onClick={() => {
                checkLogin(email, password);
              }}
              className="bg-pink-500 focus:outline-none p-1.5 rounded font-semibold  hover:bg-green-800 hover:text-white text-white"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
