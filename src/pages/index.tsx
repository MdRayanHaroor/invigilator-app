// pages/index.tsx
import BuildingForm from '../../components/BuildingForm';
import { useState, useEffect } from 'react';
//import prisma from '../../lib/prisma';

export default function Home() {
  const [buildings, setBuildings] = useState<{ id: number; name: string }[]>([]);

  // Fetch buildings on component mount
  useEffect(() => {
    const fetchBuildings = async () => {
      const res = await fetch('/api/buildings');
      const data = await res.json();
      setBuildings(data);
    };
    fetchBuildings();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <header className="bg-white shadow-md py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-blue-600">Invigilator Dashboard</h1>
          <p className="text-gray-600">Manage Exams and Invigilators</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4">
            <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md">
              Buildings
            </a>
            <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md">
              Classes
            </a>
            <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md">
              Teachers
            </a>
            <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md">
              Exams
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Building Form */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Add New Building</h2>
          <BuildingForm />
        </div>

        {/* Buildings Table */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Buildings</h2>
          <div className="overflow-x-auto">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 font-medium text-left text-gray-600">#</th>
                  <th className="px-4 py-2 font-medium text-left text-gray-600">Name</th>
                  <th className="px-4 py-2 font-medium text-left text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {buildings.map((building) => (
                  <tr key={building.id}>
                    <td className="px-4 py-2 text-sm text-gray-600">{building.id}</td>
                    <td className="px-4 py-2 text-sm font-medium text-blue-600">
                      {building.name}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-500">
                      <button className="text-red-500 hover:text-red-700">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}