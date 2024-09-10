import Navbar from '@/components/Navbar'
import TaskDetailPage from '@/components/task/taskDashboard'
import TaskDashboard from '@/components/task/taskDashboard'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Index = () => {
  return (
    <Box>
        <Navbar/>
        <TaskDetailPage/>
    </Box>
  )
}

export default Index