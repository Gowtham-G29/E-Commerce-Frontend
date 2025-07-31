import React, { useEffect, useState } from "react";
import { getAllDepts } from "../Service/Api";
import { Link } from "react-router-dom";

function DepartmentSelectionPage() {
  const [departments, setDepartments] = useState([]);

  const handleDepartments = async () => {
    try {
      const response = await getAllDepts();
      setDepartments(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleDepartments();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="p-6 max-w-6xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Select a Department
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition duration-300 border border-gray-200 text-center">
            <Link to="/products/all">
              <h3 className="text-xl font-semibold text-gray-800">All</h3>
            </Link>
          </div>
          {departments.map((dept) => (
            <Link key={dept.id} to={`/products/${dept.name}`}>
              <div className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition duration-300 border border-gray-200 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {dept.name} 
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DepartmentSelectionPage;
