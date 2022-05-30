import React from "react";
import { Link } from "react-router-dom";

const LearnMore = () => {
    return (
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img src="./lyc_light_blue.png" alt="Love Your City Logo" className="mx-auto h-16 w-auto" />
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold">How It Works</h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <ol className="list-decimal list-inside">
                        <li className="text-lg text-gray-700 font-medium">Register a campaign to help others in need of essential items.</li>
                        <li className="text-lg text-gray-700 font-medium mt-8">Create a gift registry for your beneficiaries.</li>
                        <li className="text-lg text-gray-700 font-medium mt-8">Invite others to give.</li>
                        <li className="text-lg text-gray-700 font-medium mt-8">Monitor the campaign.</li>
                        <li className="text-lg text-gray-700 font-medium mt-8">Pat yourself on the back for Loving your City.</li>
                    </ol>
                    <Link to="/" className="mx-auto block w-full justify-center py-2 px-4 mt-8 border border-transparent text-sm font-medium rounded-md transition duration-150 ease-in-out btn-primary shadow-md">
                        Get Started
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LearnMore