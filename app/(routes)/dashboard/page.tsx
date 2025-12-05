import React from 'react'
import HistoryList from './_components/HistoryList'
import { Button } from '@/components/ui/button'
import DoctersAgentList from './_components/DoctersAgentList'

function Dashboard() {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>My Dashboard</h2>
        <Button>Consult With Docter</Button>
      </div>
      
      <HistoryList />
      <DoctersAgentList />
    </div>
  )
}

export default Dashboard