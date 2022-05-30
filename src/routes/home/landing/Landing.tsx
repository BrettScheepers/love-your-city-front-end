import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {

    return (
        <div className="min-h-screen w-full bg-white">
            <div className="min-h-screen sm:mx-auto sm:w-full sm:max-w-md flex flex-col justify-center">
                <div className="text-center mx-2 my-4">
                    <h1 className="text-5xl md:text-6xl font-bold mt-6">Love Your City</h1>
                    <img src="./lyc_light_blue.png" alt="Love Your City Logo" className="mx-auto mt-10 h-36 w-auto" />
                    <p className="text-medium mt-6">Do you have a charitable campaign you want to start?</p>
                    <p className="text-medium mt-2">Love Your City will help you create, launch and coordinate it.</p>
                    <Link to="/log-in" className="mx-auto block w-full justify-center py-2 px-4 mt-10 border border-transparent text-sm font-medium rounded-md transition duration-150 ease-in-out hover:bg-gray-100 shadow-md">
                        Log In
                    </Link>
                    <Link to="/sign-up" className="mx-auto block w-full justify-center py-2 px-4 mt-4 border border-transparent text-sm font-medium rounded-md transition duration-150 ease-in-out btn-primary shadow-md">
                        Sign Up
                    </Link>
                    <Link to="/learn-more" className="font-medium block mt-6 focus:outline-none focus:underline transition ease-in-out duration-150 link">
                        Learn more
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing