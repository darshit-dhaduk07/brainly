import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  //@ts-ignore
  const usernameRef = useRef<HTMLInputElement>(null);
  //@ts-ignore
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  async function signup(e: React.FormEvent) {
    e.preventDefault();
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    console.log(username);
    console.log(password);

    try {
      await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        username,
        password,
      });

      alert("User Signed up successfully");
      navigate("/signin");
    } catch (error) {
      console.error(error);
      alert("Signup failed");
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-secondary">
            Create Account
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Start building your Second Brain
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={signup}>
          {/* <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              ref={usernameRef}
              placeholder="John Doe"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2
                         focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div> */}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              //@ts-ignore
              ref={usernameRef}
              type="email"
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
              //@ts-ignore
              ref={passwordRef}
              type="password"
              placeholder="Create a strong password"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2
                         focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <button
            type="submit"
            onClick={signup}
            className="w-full rounded-lg bg-secondary py-2.5
                       text-white font-medium hover:opacity-90 transition"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <span className="text-btntext font-medium cursor-pointer hover:underline">
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
