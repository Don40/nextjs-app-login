"use client"
// components/RoleList.js
import { useEffect, useState } from "react";
import axios from "axios";

const RoleList = () => {
  const [roles, setRoles] = useState([]); // State to hold the roles
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("http://localhost:8080/roles")
      .then((response) => {
        setRoles(response.data); // Set the roles in state
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        setError("Failed to fetch roles"); // Handle errors
        setLoading(false);
      });
  }, []);

  // Render loading state
  if (loading) {
    return <p className="text-center text-blue-500 font-medium">Loading roles...</p>;
  }

  // Render error state
  if (error) {
    return <p className="text-center text-red-500 font-medium">{error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Roles List</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">#</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">Prefix</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-medium text-gray-700">Name</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role, index) => (
              <tr
                key={role.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{role.prefix}</td>
                <td className="border border-gray-300 px-4 py-2">{role.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoleList;
