#!/bin/bash

# Create directories and files for new components
mkdir -p components/Charts/NestedDonutChart
mkdir -p components/Charts/SubjectPerformanceDashboard

# Create NestedDonutChart.js
cat <<EOF > components/Charts/NestedDonutChart/NestedDonutChart.js
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// Refined color palette
const COLORS = {
  performance: '#4299E1', // Soft Blue
  avgMark: '#ED64A6', // Soft Pink
  potential: '#48BB78', // Soft Green
};

const NestedDonutChart = ({ subject, data }) => {
  const calculateAngle = (value) => (value / 100) * 180;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 transition-all hover:shadow-lg">
      <h3 className="text-center text-sm font-semibold text-gray-700 mb-2 capitalize">
        {subject} Performance
      </h3>
      <ResponsiveContainer width="100%" height={120}>
        <PieChart>
          <Pie
            data={[data[2]]}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="100%"
            outerRadius={60}
            innerRadius={50}
            startAngle={180}
            endAngle={180 - calculateAngle(data[2].value)}
            fill={COLORS.potential}
          >
            <Cell key="potential" fill={COLORS.potential} />
          </Pie>
          <Pie
            data={[data[1]]}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="100%"
            outerRadius={50}
            innerRadius={40}
            startAngle={180}
            endAngle={180 - calculateAngle(data[1].value)}
            fill={COLORS.avgMark}
          >
            <Cell key="avg-mark" fill={COLORS.avgMark} />
          </Pie>
          <Pie
            data={[data[0]]}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="100%"
            outerRadius={40}
            innerRadius={30}
            startAngle={180}
            endAngle={180 - calculateAngle(data[0].value)}
            fill={COLORS.performance}
          >
            <Cell key="performance" fill={COLORS.performance} />
          </Pie>
          <Tooltip formatter={(value, name) => [\`\${value}%\`, name]} />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex justify-center space-x-2 mt-2">
        {data.map((entry, index) => (
          <div key={entry.name} className="flex items-center">
            <div
              className="w-3 h-3 mr-1 rounded-full"
              style={{
                backgroundColor:
                  index === 0
                    ? COLORS.performance
                    : index === 1
                    ? COLORS.avgMark
                    : COLORS.potential,
              }}
            />
            <span className="text-xs text-gray-600">{entry.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NestedDonutChart;
EOF

# Create SubjectPerformanceDashboard.js
cat <<EOF > components/Charts/SubjectPerformanceDashboard/SubjectPerformanceDashboard.js
import React from 'react';
import NestedDonutChart from '../NestedDonutChart/NestedDonutChart';

const subjectData = {
  biology: [
    { name: 'Performance', value: 75 },
    { name: 'Avg Mark', value: 82 },
    { name: 'Potential', value: 90 },
  ],
  chemistry: [
    { name: 'Performance', value: 68 },
    { name: 'Avg Mark', value: 75 },
    { name: 'Potential', value: 85 },
  ],
  physics: [
    { name: 'Performance', value: 80 },
    { name: 'Avg Mark', value: 88 },
    { name: 'Potential', value: 95 },
  ],
};

const SubjectPerformanceDashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-gray-100">
      {Object.entries(subjectData).map(([subject, data]) => (
        <NestedDonutChart key={subject} subject={subject} data={data} />
      ))}
    </div>
  );
};

export default SubjectPerformanceDashboard;
EOF

# Update Dashboard.js
DASHBOARD_FILE=pages/Dashboard/Dashboard.js

if [[ -f "$DASHBOARD_FILE" ]]; then
  sed -i "/import { ProgressChart } from/a import SubjectPerformanceDashboard from '../../components/Charts/SubjectPerformanceDashboard/SubjectPerformanceDashboard';" "$DASHBOARD_FILE"
  sed -i "/Progress Chart/i \          <div style={{ marginTop: '24px' }}>\n            <SubjectPerformanceDashboard />\n          </div>\n" "$DASHBOARD_FILE"
  echo "Dashboard.js updated successfully!"
else
  echo "Dashboard.js not found in $DASHBOARD_FILE!"
fi

echo "All changes applied successfully!"
