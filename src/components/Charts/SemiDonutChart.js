import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const SemiDonutChart = ({ subject, freshMistakes, oldMistakes }) => {
  const data = [
    { name: 'Fresh Mistakes', value: freshMistakes },
    { name: 'Old Mistakes', value: oldMistakes },
  ];

  const COLORS = ['#4CAF50', '#2196F3']; // Green for Fresh, Blue for Old

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800 tracking-wide capitalize">
          {subject}
        </h3>
        <p className="text-sm text-gray-600 font-medium">Mistake Distribution</p>
      </div>
      <PieChart width={200} height={120}>
        <Pie
          data={data}
          cx={100}
          cy={120}
          startAngle={180}
          endAngle={0}
          innerRadius={50}
          outerRadius={80}
          paddingAngle={3}
          dataKey="value"
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <div className="flex justify-between mt-4 text-sm text-gray-600 font-medium">
        <span>Fresh: {freshMistakes}%</span>
        <span>Old: {oldMistakes}%</span>
      </div>
    </div>
  );
};

export default SemiDonutChart;
