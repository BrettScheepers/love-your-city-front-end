import { baseUrl } from "./base"
import { useQuery } from 'react-query'

export function fetchCampaigns(userId: string, accessToken: string) {
  return useQuery(
    ["all-campaigns", userId],
    async () => {
      const res = await fetch(`${baseUrl}/users/${userId}`, {
        headers: {
          'authorization': `Bearer ${accessToken}`
        }
      })
      return res.json()
    },
    {
      refetchInterval: 300000,
      refetchOnWindowFocus: false,
    }
  )
}