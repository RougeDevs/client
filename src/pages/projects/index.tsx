import Navbar from '@/components/Navbar'
import MarketDashboard from '@/components/projects/marketDashboard'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Index = () => {
  return (
    <Box>
        <Navbar/>
        <MarketDashboard/>
    </Box>
  )
}

export default Index