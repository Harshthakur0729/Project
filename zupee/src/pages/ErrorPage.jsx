import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Previous route agar available ho to wahi, otherwise "/"
  const from = location.state?.from || "/";

  const goBack = () => {
    navigate(from);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-2xl mt-4">Oops! Page Not Found</h2>
      <p className="mt-2 text-gray-600">
        You tried to access an invalid route.
      </p>
      <button
        onClick={goBack}
        className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
