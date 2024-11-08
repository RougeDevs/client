import Navbar from '@/components/Navbar'
import ProjectDashboard from '@/components/project/projectDashboard'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Index = () => {
  return (
    <Box>
        <Navbar/>
        <ProjectDashboard/>
    </Box>
  )
}

export default Index