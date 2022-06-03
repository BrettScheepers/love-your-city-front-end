import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <main className="w-full min-h-screen bg-gray-50 flex flex-col justify-center">
      <Outlet />
    </main>
  )
}

export default Home