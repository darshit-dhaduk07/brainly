import axios from "axios";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const usernameRef = useRef<HTMLInputElement>(null);
  //@ts-ignore
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  async function signin(e: React.FormEvent) {
    e.preventDefault();
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    console.log(username);
    console.log(password);

    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
        username,
        password,
      });

      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/dashboard");

    } catch (error) {
      console.error(error);
      alert("Signin failed");
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-secondary">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Sign in to your Second Brain
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={signin}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              ref={usernameRef}
              placeholder="you@example.com"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2
                         focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
            ref={passwordRef}
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2
                         focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-secondary py-2.5
                       text-white font-medium hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <span className="text-btntext font-medium cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
