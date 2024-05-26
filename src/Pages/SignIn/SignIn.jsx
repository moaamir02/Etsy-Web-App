import React, { useState } from "react";
import { Register } from "../../Components/Auth/Register";
import Login from "../../Components/Auth/Login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const SignIn = ({setUsers}) => {
  const [isSignIn, setIsSignIn] = useState(true); // State to toggle between sign-in and registration forms

  const toggleForm = () => setIsSignIn(!isSignIn);

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-sm w-full z-50">
          <div className="px-6 py-4">
            <ToastContainer />
            <div className="text-lg text-center font-medium text-gray-900">
              {isSignIn ? "Sign In" : "Register"}
            </div>
            <div className="mt-4">
              {isSignIn ? <Login setUsers={setUsers} /> : <Register />}
              <div className="mt-4 text-center">
                <button
                  onClick={toggleForm}
                  className="text-blue-500 hover:underline"
                >
                  {isSignIn
                    ? "Need an account? Register"
                    : "Have an account? Sign In"}
                </button>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 bg-gray-100 border-t border-gray-200">
            <Link to="/">
              <button className="text-gray-500 hover:text-gray-700 font-bold py-2 px-4 rounded">
                Close
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
