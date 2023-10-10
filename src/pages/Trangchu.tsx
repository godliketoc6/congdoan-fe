import React from 'react'
import EmployeeChart from '../components/chart/EmployeeChart'
import GenderChart from '../components/chart/GenderPieChart'
import WorkingPercentagePieChart from '../components/chart/WorkingPercentagePieChart'

export default function Trangchu() {
  return (
    <div className='flex flex-wrap p-2'>
      <EmployeeChart />
      <GenderChart />
      <WorkingPercentagePieChart />
    </div>
  )
}