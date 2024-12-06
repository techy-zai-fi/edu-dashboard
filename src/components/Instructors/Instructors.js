import React from 'react';
import { instructorsData } from '../../utils/data';

const Instructors = () => {
  return (
    <div className="card">
      <h3>Top Instructors</h3>
      {instructorsData.map(instructor => (
        <div key={instructor.id} style={{ display: 'flex', alignItems: 'center', marginTop: 16 }}>
          <img src={instructor.avatar} alt={instructor.name} style={{ width: 40, height: 40, borderRadius: '50%', marginRight: 12 }} />
          <div>
            <h4 style={{ margin: 0 }}>{instructor.name}</h4>
            <p style={{ margin: 0, fontSize: 14, color: '#64748B' }}>{instructor.course}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructors;
