"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import { signIn } from "@/services/AuthService";


const Page = () => {
    const [bgHeight, setBgHeight] = useState("100vh");
    const [loginDetails, setLoginDetails] = useState({ username: "", password: "" })

    // Initialize the router
    const router = useRouter();

    // Function to handle form submission
    const handleSignIn = async (event) => {
        event.preventDefault();
        console.log("loginDetails : ", loginDetails)
        try {
            // Perform sign-in request
            // const response = await axios.post(
            //     "http://localhost:8080/api/auth/signin",
            //     loginDetails,
            //     { headers: { 'Content-Type': 'application/json' } }
            // );
            const response = await signIn(loginDetails)
            console.log("response", response.data)
            localStorage.setItem("jwt", response.data)
            // Navigate to dashboard after successful sign-in
            router.push('/dashboard'); // Assuming the path to the dashboard page is '/dashboard'
        } catch (error) {
            console.error("Sign-in error:", error);
            alert("Invalid credentials!")
            // Handle error (e.g., show a message to the user)
        }
    };

    // Function to handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setLoginDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    return (
        <div
            className="relative w-full bg-cover bg-center"
            style={{
                backgroundImage: `url("/images/bg-image.webp")`,
                height: bgHeight,
            }}
        >
            <div className="flex items-center justify-center h-screen">
                <div className="bg-black bg-opacity-90 rounded-lg overflow-hidden w-72">
                    <div className="p-8">
                        <h2 className="text-3xl font-semibold text-white mb-4">Sign In</h2>
                        <form onSubmit={handleSignIn}>
                            <div className="mb-6">
                                <label htmlFor="username" className="text-gray-400">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username" // Changed from "email" to "username" to match the state key
                                    value={loginDetails.username} // Bind value to state
                                    onChange={handleChange} // Update state on change
                                    className="w-full border-b border-gray-500 bg-transparent text-white py-2 focus:outline-none focus:border-violet-400"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="text-gray-400">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={loginDetails.password} // Bind value to state
                                    onChange={handleChange} // Update state on change
                                    className="w-full border-b border-gray-500 bg-transparent text-white py-2 focus:outline-none focus:border-violet-400"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-violet-950 text-white py-2 px-4 rounded-md hover:bg-violet-700 focus:outline-none focus:bg-violet-700"
                            >
                                Sign In
                            </button>
                        </form>
                        <div className="mt-4 text-center">
                            <a href="#" className="text-gray-400 hover:text-white">
                                Forgot Password?
                            </a>
                        </div>
                    </div>
                    <div className="bg-navbarBgColor py-4 px-8">
                        <p className="text-gray-400 text-sm">
                            New User?{" "}
                            <a href="#" className="text-white">
                                Sign up now.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
