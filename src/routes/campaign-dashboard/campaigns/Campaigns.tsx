import React from 'react';
import { fetchCampaigns } from '../../../apis/campaigns';
import { ReactQueryDevtools } from 'react-query/devtools'

const AllCampaigns = () => {
  const userId = JSON.parse(sessionStorage.user).user_id
  const accessToken = sessionStorage.accessToken
  const { isLoading, isError, data, error } = fetchCampaigns(userId, accessToken);

  if (isLoading || isError) {
    return <div>Things</div>
  }

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-4xl bg-pink-500">
      {JSON.stringify(data)}
    </div>
  )
}

export default AllCampaigns;