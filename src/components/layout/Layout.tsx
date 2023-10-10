import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = (props: any) => {
  //check role o props
  return (
    <div className='flex flex-row bg-neutral-50 h-screen w-screen overflow-hidden'>
        <Sidebar />
        <div className='flex-1'>
          <Header />
          <div>{<Outlet />}</div>
        </div>
    </div>
  );
};

export default Layout