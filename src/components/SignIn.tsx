import * as React from "react";
import { login } from "../APIs/auth";

interface SignInProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignUp: () => void;
  onLoginSuccess: () => void;
}

const SignIn: React.FC<SignInProps> = ({
  isOpen,
  onClose,
  onSwitchToSignUp,
  onLoginSuccess,
}) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      //  Use login API from auth.ts
      const response = await login({ username, password });

      if (response) {
        // Save user data to local storage
        localStorage.setItem("user", JSON.stringify(response));

        // Notify parent that login succeeded
        onLoginSuccess();
        onClose();
      }
    } catch (err: any) {
      console.error("Login failed:", err);
      setError("Invalid username or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sliding Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-auto sm:w-[400px] bg-white shadow-lg transform transition-transform duration-500 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 relative h-full flex flex-col">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 left-6 text-3xl font-light"
          >
            ×
          </button>

          {/* Login Content */}
          <div className="flex flex-col items-start mt-16 space-y-6 pr-20 flex-grow">
            <div className="mb-10">
              <h2 className="text-4xl font-bold text-gray-800 mb-3">Login</h2>
              <p className="text-md text-gray-500">
                or{" "}
                <span
                  className="text-orange-500 cursor-pointer hover:underline"
                  onClick={() => {
                    onClose();
                    onSwitchToSignUp();
                  }}
                >
                  create an account
                </span>
              </p>
            </div>

            <form onSubmit={handleLogin} className="w-full space-y-4">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md p-3 outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-md p-3 outline-none focus:ring-2 focus:ring-orange-500"
              />

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition disabled:opacity-50"
              >
                {loading ? "Logging in..." : "LOGIN"}
              </button>

              <p className="text-sm text-center text-gray-500 px-4">
                By clicking on Login, I accept the{" "}
                <span className="font-semibold text-black">
                  Terms & Conditions
                </span>{" "}
                &{" "}
                <span className="font-semibold text-black">Privacy Policy</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
