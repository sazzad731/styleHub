"use client"
import Link from 'next/link';
import React from 'react'
import { signUpUser } from '../actions/signUpUsers';

export default function SignUp() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const payload = { name, email, password }
    const result = await signUpUser(payload);
    console.log(result);
  };
  return (
    <div className="mt-20 flex flex-col items-center">
      <div className="mb-8">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
          New to here?
        </h2>
        <p className="mt-2 text-center text-sm">
          Already have an account?{" "}
          <Link
            className="font-bold hover:underline text-primary"
            href="/login"
          >
            Login
          </Link>
        </p>
      </div>
      <div className="p-8 shadow-sm border border-neutral-200 rounded-lg w-full md:w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold" htmlFor="email">
              Name{" "}
            </label>
            <div className="mt-1">
              <input
                name="name"
                placeholder="Your name"
                required
                type="text"
                className="input w-full"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold" htmlFor="email">
              {" "}
              Email address{" "}
            </label>
            <div className="mt-1">
              <input
                name="email"
                placeholder="you@example.com"
                required
                type="email"
                className="input w-full"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold" htmlFor="password">
              {" "}
              Password{" "}
            </label>
            <div className="mt-1">
              <input
                type="password"
                placeholder="••••••••"
                name="password"
                className="input w-full"
                required
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="btn" type="submit">
              Sign up
            </button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2"> Or continue with </span>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <button className="btn">
              <svg
                className="mr-3 h-5 w-5"
                height="48px"
                viewBox="0 0 48 48"
                width="48px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  fill="#FFC107"
                ></path>
                <path
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  fill="#FF3D00"
                ></path>
                <path
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  fill="#4CAF50"
                ></path>
                <path
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C43.021,36.251,44,34,44,30C44,22.659,43.862,21.35,43.611,20.083z"
                  fill="#1976D2"
                ></path>
              </svg>
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
