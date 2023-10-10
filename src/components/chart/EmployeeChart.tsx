import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: '2010',
		Nam: 50,
		Nữ: 30
	},
	{
		name: '2011',
		Nam: 30,
		Nữ: 98
	},
	{
		name: '2012',
		Expense: 20,
		Nữ: 45
	},
	{
		name: '2013',
		Expense: 30,
		Nữ: 25
	},
	{
		name: '2014',
		Nam: 22,
		Nữ: 11
	},
	{
		name: '2015',
		Nam: 23,
		Nữ: 38
	},
	{
		name: '2016',
		Nam: 34,
		Nữ: 43
	},
	{
		name: '2017',
		Nam: 20,
		Nữ: 98
	},
	{
		name: '2018',
		Nam: 27,
		Income: 39
	},
	{
		name: '2019',
		Nam: 18,
		Nữ: 48
	},
	{
		name: '2020',
		Nam: 23,
		Nữ: 38
	},
	{
		name: '2021',
		Nam: 34,
		Nữ: 43
	}
]

export default function EmployeeChart() {
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">SỐ LƯỢNG NHÂN VIÊN MỚI MỖI NĂM</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Nam" fill="#0ea5e9" />
						<Bar dataKey="Nữ" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}