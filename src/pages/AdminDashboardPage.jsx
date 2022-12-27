import React from "react";
import { Link } from 'react-router-dom'

function logout() {
  const handleLogout = () => {
      return window.localStorage.removeItem('token')
  }
  return (
      <Link to="/admin/login">
          <input onClick={handleLogout}
             type="submit"
             className="bg-gray-500 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
             value="Sign Out"
          />
      </Link>
  )
}

const AdminDashboardPage = () => {

  return (
    <>
      <div className="w-full flex justify-center items-center text-7xl h-screen text-gray-700 ">
        Dashboard
      </div>
      {logout()}
    </>
  );
};

export default AdminDashboardPage;
