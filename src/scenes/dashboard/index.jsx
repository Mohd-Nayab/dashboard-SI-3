import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'

const Dashboard = () => {
    return (
        <Box m="20px">
            <Box dispay="flex" justifyContent="space-between" alignItems="center"></Box>

            Dashboard
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        </Box>
    )
}

export default Dashboard