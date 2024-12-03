"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import { signIn } from "@/services/AuthService";


const JoinForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  
    const [submitted, setSubmitted] = useState(false);
  
    // Handle form field changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Perform form validation or API call here
      // After submission, you can show a success message or reset the form
      console.log('Form Submitted:', formData);
      setSubmitted(true);
    };
  
    return (
      <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Well Done!!!!</h2>
  
        {submitted ? (
          <div className="text-center text-green-500">
            <h3 className="text-xl">Thank you for joining us!</h3>
            <p>We have received your details and will get in touch with you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="phone" className="block text-lg font-medium">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
  
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    );
  };
  
  export default JoinForm;