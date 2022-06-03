import React from "react";
import { Outlet, useNavigate } from "react-router-dom"

type CampaignDashboardProps = {

}

const CampaignDashboard: React.FC<CampaignDashboardProps> = () => {
  const navigate = useNavigate()

  return (
    <main className="w-full min-h-screen bg-gray-50">
      <nav className="bg-white py-4 px-6 shadow flex items-center">
        <img src="./lyc_light_blue.png" alt="Love Your City Logo" className="h-14" />
        <h2 className="hidden lg:block ml-2 text-4xl font-bold">Love Your City</h2>
        <button className="ml-auto text-xl" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </nav>

      <Outlet />
    </main>
  )
}

export default CampaignDashboard