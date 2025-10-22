// src/components/SignUp.tsx
import * as React from "react";
import { signup, SignupRequest } from "../APIs/auth";

interface SignUpProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignIn: () => void;
}

const SignUp: React.FC<SignUpProps> = ({
  isOpen,
  onClose,
  onSwitchToSignIn,
}) => {
  const [formData, setFormData] = React.useState<SignupRequest>({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: "",
    address: "",
    username: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      console.log("📡 Sending signup data:", formData);
      const response = await signup(formData);
      console.log("Signup successful:", response);
      setMessage("Signup successful! Redirecting to login...");

      setTimeout(() => {
        onClose();
        onSwitchToSignIn();
      }, 2000);
    } catch (error: any) {
      console.error("❌ Signup failed:", error);

      //  Detect duplicate email or username error
      let errMsg = "Signup failed. Please try again.";

      if (error.response) {
        const data = error.response.data;

        if (
          data?.email?.[0]?.includes("already") ||
          data?.email === "User with this Email already exists."
        ) {
          errMsg = "⚠️ Email already registered. Please use a different email.";
        } else if (data?.username?.[0]?.includes("already")) {
          errMsg = "⚠️ Username already taken. Please choose another.";
        } else if (data?.message) {
          errMsg = `⚠️ ${data.message}`;
        } else if (typeof data === "string") {
          errMsg = `⚠️ ${data}`;
        }
      } else if (error.message) {
        errMsg = `⚠️ ${error.message}`;
      }

      setMessage(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Sliding Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-auto sm:w-[400px] bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 relative h-full flex flex-col">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 left-6 text-3xl font-light"
          >
            ×
          </button>

          <div className="flex flex-col items-start mt-16 space-y-6 flex-grow">
            <div className="mb-10">
              <h2 className="text-4xl font-bold text-gray-800 mb-3">Sign up</h2>
              <p className="text-md text-gray-500">
                or{" "}
                <span
                  onClick={() => {
                    onClose();
                    onSwitchToSignIn();
                  }}
                  className="text-orange-500 cursor-pointer hover:underline"
                >
                  login to your account
                </span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full space-y-4">
              {Object.keys(formData).map((key) => (
                <input
                  key={key}
                  type={
                    key === "password"
                      ? "password"
                      : key === "email"
                      ? "email"
                      : key === "phone"
                      ? "tel"
                      : "text"
                  }
                  name={key}
                  placeholder={
                    key
                      .replace("_", " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase()) || ""
                  }
                  value={(formData as any)[key]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-3 outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              ))}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition disabled:opacity-50"
              >
                {loading ? "Creating account..." : "CONTINUE"}
              </button>

              {message && (
                <p
                  className={`text-center text-sm mt-2 ${
                    message.startsWith("🎉") ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {message}
                </p>
              )}

              <p className="text-sm text-center text-gray-500">
                By creating an account, I accept the{" "}
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

export default SignUp;
