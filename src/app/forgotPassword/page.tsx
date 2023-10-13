"use client";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const resetEmail = () => {
    sendPasswordResetEmail(auth, email);
  };

  return (
    <div className="w-full max-w-xs">
      <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
        Forgot password
      </label>
      <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => resetEmail()}
            disabled={!email}
          >
            Send email
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">&copy;2020 Acme Corp. All rights reserved.</p>
    </div>
  );
}
