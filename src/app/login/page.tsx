"use client";

import checkAuth from "@/lib/check-auth";
import { redirect } from "next/navigation";

export default function Page() {
  const isAuth = checkAuth();

  if (!isAuth) {
    return <Auth />;
  }

  return redirect("/admin");
}

function Auth() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const password = e.currentTarget.password.value;
    const env_code = process.env.NEXT_PUBLIC_ADMIN_CODE;

    if (password === env_code) {
      localStorage.setItem("code", password);
      redirect("/admin");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Admin Login</h1>
        <p className="text-gray-600 mb-6">
          Only authenticated users can see this page.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
