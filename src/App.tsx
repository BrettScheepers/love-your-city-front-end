import { useState } from 'react'
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './routes/home/Home'
import Landing from './routes/home/landing/Landing'
import LogIn from './routes/home/log-in/LogIn'
import SignUp from './routes/home/sign-up/SignUp'
import LearnMore from './routes/home/learn-more/LearnMore'
import CampaignDashboard from './routes/campaign-dashboard/CampaignDashboard'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SnackbarProvider } from 'notistack'
 
const queryClient = new QueryClient()

function App() {
  

  return (
    <SnackbarProvider dense
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}>
              <Route path='/' element={<Landing />} />
              <Route path='/log-in' element={<LogIn />} />
              <Route path='/sign-up' element={<SignUp />} />
              <Route path='/learn-more' element={<LearnMore />} />
            </Route>
            <Route path='/campaigns' element={<CampaignDashboard />}>
              
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </SnackbarProvider>
  )
}
  
export default App
