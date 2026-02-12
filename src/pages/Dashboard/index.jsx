import React from 'react'
import { useState } from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import StatsCard from '../../components/StatsCard'
import OrderTable from '../../components/OrderTable'

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
        <div className='flex-1 flex flex-col overflow-hidden'>
          <Header toggleSidebar={() => setIsOpen(!isOpen)} />
          <main className='p-6 space-y-6  overflow-y-auto'>
            <StatsCard />
            <OrderTable />
          </main>
        </div>
      </div>
    </>
  )
}

export default Dashboard