import React, { useState, useEffect } from "react"; // Import necessary React hooks
import { collection, onSnapshot, query } from "firebase/firestore"; // Import Firestore methods
import { db } from "../../firebase"; // Import the Firestore database instance
import { toast } from "react-toastify"; // Import toast for notifications
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Login = ({ setUsers }) => {
  // State to manage user data input
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // State to manage the list of users fetched from Firestore
  const [user, setUser] = useState([]);

  // Hook for navigation
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(userData); // Log user data for debugging
    checkUserCredentials(); // Check user credentials
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the userData state
    setUserData({ ...userData, [name]: value });
  };

  // Fetch all users from Firestore
  const getAllUsers = async () => {
    const q = query(collection(db, "user")); // Create a query to get all documents from the "user" collection
    const users = onSnapshot(q, (querySnapshot) => {
      let userArray = [];
      querySnapshot.forEach((doc) => {
        userArray.push({ ...doc.data(), id: doc.id }); // Add each user document to the array
      });
      setUser(userArray); // Update the user state with the fetched users
      console.log(userArray); // Log the user array for debugging
    });
  };

  // Check user credentials against the fetched users
  const checkUserCredentials = async () => {
    await getAllUsers(); // Wait for getAllUsers to complete
  
    let foundUser = null; // Variable to store the found user
  
    // Loop through the user array to find a match
    for (let i = 0; i < user.length; i++) {
      if (
        user[i].user.email === userData.email &&
        user[i].user.password === userData.password
      ) {
        foundUser = user[i]; // If a match is found, store the user
        break; // Exit the loop
      }
    }
  
    // If user is found, log them in
    if (foundUser) {
      toast.success("User logged in successfully", {
        position: "top-right",
        autoClose: 5000,
      });
      localStorage.setItem("user", JSON.stringify(foundUser)); // Save user data in localStorage
      setUserData({
        email : "",
        password : ""
      }) // Reset userData state
      setUsers(true); // Update the parent state to reflect that the user is logged in
      navigate('/'); // Navigate to the home page
    } else {
      // If user is not found, show an error toast
      toast.error("Invalid Credentials", {
        position: "top-right",
        autoClose: 5000,
      });
      console.log("failed"); // Log failure for debugging
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit} autoComplete="off"> {/* Form element with submit handler */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            required={true}
            name="email"
            onChange={handleChange}
            value={userData.email}
          /> {/* Input for email */}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
            required={true}
            name="password"
            onChange={handleChange}
            value={userData.password}
          /> {/* Input for password */}
        </div>
        <div className="flex items-center justify-evenly">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button> {/* Submit button */}
        </div>
      </form>
    </>
  );
};

export default Login; // Export the Login component as default
