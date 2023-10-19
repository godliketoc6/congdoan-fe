import React from 'react'
import {employee_sidebar_link} from "../../lib/constants/constants"
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { IconLogout } from '@tabler/icons-react'

const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-white hover:no-underline active:bg-neutral-600 rounded-sm text-base'

interface SidebarLinkProps {
	item: {
		key: string;
		label: string;
		path: string;
		icon: JSX.Element;
	};
}

export default function Sidebar() {
  	return (
    <div className='bg-teal-200 w-60 p-3 flex flex-col'>
      	<div className="flex items-center gap-2 px-1 py-3">
				<span className="text-neutral-200 text-lg">Logo</span>
			</div>
      	<div className="py-8 flex flex-1 flex-col gap-0.5">
			{employee_sidebar_link.map((item) => (
				<SidebarLink key={item.key} item={item}/>
			))}
		</div>
		<div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
			<Link to={'/login'} className={linkClass}>
				<span className="text-xl" >
					<IconLogout />
				</span>
				Logout
			</Link>
		</div>
    </div>
	)
}

function SidebarLink({ item }: SidebarLinkProps) {
	const {pathname} = useLocation();
	return (
		<Link to={item.path} className={classNames(pathname === item.path ? 'bg-teal-700 text-white' : '', linkClass)}> 
			<span className='text-xl'>{item.icon}</span>
			{item.label}
		</Link>
	)
}