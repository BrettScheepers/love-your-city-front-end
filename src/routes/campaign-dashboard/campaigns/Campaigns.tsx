import React from 'react';
import { useMediaQuery } from 'react-responsive'
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { fetchCampaigns } from '../../../apis/campaigns';

type CampaignCardProps = {
  campaignData: {
    campaign_id: string,
    campaign_title: string,
    campaign_desc: string,
    end_date: string,
    campaign_items_item_quantity: number,
    donations_item_quantity: number,
  };
}

const CampaignCard: React.FunctionComponent<CampaignCardProps> = ({
  campaignData,
}) => {
  const {
    campaign_id,
    campaign_title,
    campaign_items_item_quantity,
    donations_item_quantity,
    end_date,
  } = campaignData
  const isMobile = useMediaQuery({ query: '(max-width: 400px)' })

  const returnFullItemProgressPercentage = (goal: number, current: number): number => {
    const decimal = (current/goal)*100
    if (decimal < 1 && decimal !== 0) return 1
    return Math.trunc(decimal)
  }

  return (
    <div className="bg-white shadow p-4 flex flex-col">
      <div className="flex">
        {!isMobile && <div className="mr-2 font-medium text-lg text-white bg-primary rounded-full w-14 h-14 flex items-center justify-center">
          {returnFullItemProgressPercentage(campaign_items_item_quantity, donations_item_quantity)}%
        </div>}
        <div className="pr-4">
          <div className="text-lg leading-5 font-bold">{campaign_title}</div>
          <div className="text-gray-500">{donations_item_quantity} of {campaign_items_item_quantity} items <br /> raised</div>
        </div>
        <div className="ml-auto">
          <div className="text-base leading-5 font-bold">{new Date(end_date).toLocaleDateString()}</div>
          <div className="text-gray-500 text-sm">End Date</div>
        </div>
      </div>
      {isMobile && (
        <div className="mb-2 mt-8 mx-auto font-medium text-lg text-white bg-primary rounded-full w-14 h-14 flex items-center justify-center">
          {returnFullItemProgressPercentage(campaign_items_item_quantity, donations_item_quantity)}%
        </div>
      )}
      <div className="my-6 w-full">
        <div className="w-full bg-gray-200 h-1">
          <div className="bg-primary h-1" style={{ width: returnFullItemProgressPercentage(campaign_items_item_quantity, donations_item_quantity)}}></div>
        </div>
      </div>
      <div className="w-full mb-4">
        <Link to={`/campaigns/${campaign_id}`} className="w-full text-center text-primary hover:text-primary-accent text-xl font-medium">
          <div className="w-full text-center">Show</div>
          <FaChevronDown className="mx-auto mt-2" />
        </Link>
      </div>
    </div>
  )
}

const AllCampaigns = () => {
  const userId = JSON.parse(sessionStorage.user).user_id
  const accessToken = sessionStorage.accessToken
  const { isLoading, isError, data, error } = fetchCampaigns(userId, accessToken);

  if (isLoading || isError) {
    return <div>Things</div>
  }

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-6xl p-6">
      <div className="my-8 flex flex-col md:flex-row justify-between">
        <h1 className="font-bold text-2xl">Monitor your campaigns</h1>
        <Link to="/campaigns/create" className="btn-primary py-2 px-8 rounded-full">
          Add Campaign
        </Link>
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {data.campaigns.map((campaign: any, i: number) => (
          <CampaignCard campaignData={campaign} key={i} />
        ))}
      </div>
    </div>
  )
}

export default AllCampaigns;