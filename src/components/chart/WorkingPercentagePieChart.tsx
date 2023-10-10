import React from 'react';
import { Datum, Pie, PieConfig } from '@ant-design/charts';

interface DataItem {
  type: string;
  value: number;
}

const WorkingPercentagePieChart: React.FC = () => {
  const data: DataItem[] = [
    { type: 'Category 1', value: 27 },
    { type: 'Category 2', value: 25 },
    { type: 'Category 3', value: 18 },
    { type: 'Category 4', value: 15 },
    { type: 'Category 5', value: 10 },
  ];

  const config: PieConfig = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }: Datum) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [{ type: 'element-active' }],
  };

  return(
    <div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
      <strong className="text-gray-700 font-medium">SỐ LƯỢNG NHÂN VIÊN MỚI MỖI NĂM</strong>
      <Pie {...config} />
    </div>
  )
};

export default WorkingPercentagePieChart;
