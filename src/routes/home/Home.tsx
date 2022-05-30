import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className="w-full min-h-screen bg-gray-50 flex flex-col justify-center">
            <Outlet />
        </div>
    )
}

export default Home