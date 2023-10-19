import React, { useState } from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import EmployeeSidebar from './EmployeeSideBar'
import UserSideBar from './UserSideBar'
import SubAdminSideBar from './SubAdminSidebar'
import { Outlet } from 'react-router-dom';
// import toast, { Toaster } from 'react-hot-toast';

const Layout = (props: any) => {
  //check role o props

  const [currentSidebar, setCurrentSidebar] = useState("Admin");

  const sidebars = ["Admin", "Sub-Admin", "Employee", "User"];

  const handleNextSidebar = () => {
    const currentIndex = sidebars.indexOf(currentSidebar);
    const nextIndex = (currentIndex + 1) % sidebars.length;
    setCurrentSidebar(sidebars[nextIndex]);
  };

  return (
    <div className='flex flex-row bg-neutral-50 h-screen w-screen overflow-hidden'>
        {/* <Toaster position='top-center' /> */}
        {/* <Sidebar /> */}
        {/* <button onClick={handleNextSidebar}>{currentSidebar} Sidebar</button> */}
        {currentSidebar === "Admin" && <Sidebar />}
        {currentSidebar === "Sub-Admin" && <SubAdminSideBar />}
        {currentSidebar === "Employee" && <EmployeeSidebar />}
        {currentSidebar === "User" && <UserSideBar />}
        <div className='flex-1'>
          <Header />
          <div>{<Outlet />}</div>
        </div>
    </div>
  );
};

export default Layout