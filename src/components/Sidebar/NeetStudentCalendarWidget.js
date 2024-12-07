import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';


const CalendarIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    style={{ 
      color: '#0284c7', 
      marginRight: '0.5rem' 
    }}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const ClockIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    style={{ 
      color: '#d97706', 
      marginBottom: '0.25rem' 
    }}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const BookOpenIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    style={{ 
      color: '#10b981', 
      marginBottom: '0.25rem' 
    }}
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const TargetIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    style={{ 
      color: '#f43f5e', 
      marginBottom: '0.25rem' 
    }}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const ChevronLeftIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRightIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const NeetStudentCalendarWidget = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Mock exam and study events
  const events = {
    '2024-07-15': { type: 'exam', title: 'NEET Mock Test', color: 'bg-rose-500' },
    '2024-07-20': { type: 'study', title: 'Biology Review', color: 'bg-emerald-500' },
    '2024-07-25': { type: 'goal', title: 'Chemistry Practice', color: 'bg-sky-500' }
  };

  // Generate calendar grid
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startingDay = firstDay.getDay();
    const days = [];

    // Previous month's days
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }

    // Current month's days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const fullDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      days.push({
        day: i,
        date: fullDate,
        event: events[fullDate]
      });
    }

    return days;
  };

  const changeMonth = (delta) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + delta);
    setCurrentDate(newDate);
  };

  const renderEventIndicator = (event) => {
    if (!event) return null;
    return (
      <span 
        style={{
          position: 'absolute',
          bottom: '0.125rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '0.375rem',
          height: '0.375rem',
          borderRadius: '9999px',
          backgroundColor: event.color.replace('bg-', '#'),
          animation: 'pulse 1.5s infinite',
        }}
        title={event.title}
      />
    );
  };

  return (
    <Card 
      style={{ 
        maxWidth: '20rem', 
        marginTop: '60px', 
        width: '100%', 
        height: '400px',
        borderRadius: '1rem', 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        display: 'flex', // Makes it a flex container
        flexDirection: 'column', // Ensures children are stacked vertically
      }}
    >
      {/* Header */}
      <CardHeader 
        style={{
          background: 'linear-gradient(to right, #f0f9ff, #cbddf7)',
          padding: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <CalendarIcon />
          <h2 style={{ 
            fontSize: '1.0rem', 
            fontWeight: 600, 
            color: '#1f2937',
            letterSpacing: '0.025em'
          }}>
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
        </div>
        <div style={{ display: 'flex', gap: '0.25rem' }}>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => changeMonth(-1)}
            style={{ 
              color: '#4b5563', 
              hover: { backgroundColor: '#e0f2fe' } 
            }}
          >
            <ChevronLeftIcon />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => changeMonth(1)}
            style={{ 
              color: '#4b5563', 
              hover: { backgroundColor: '#e0f2fe' } 
            }}
          >
            <ChevronRightIcon />
          </Button>
        </div>
      </CardHeader>

      {/* Calendar Grid */}
      <CardContent 
        style={{
          padding: '0.5rem',
          flexGrow: 1, // Makes it take available space
          overflowY: 'auto', // Adds scrolling if content overflows
          maxHeight: '300px', // Optional: Limit the height
        }}
      >
        {/* Weekday Headers */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(7, 1fr)', 
          textAlign: 'center', 
          fontSize: '0.75rem', 
          color: '#6b7280', 
          marginBottom: '0.75rem' 
        }}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} style={{ fontWeight: 500 }}>{day}</div>
          ))}
        </div>

        {/* Days Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(7, 1fr)', 
          gap: '0.375rem', 
          textAlign: 'center' 
        }}>
          {generateCalendarDays().map((day, index) => (
            <div 
              key={index} 
              style={{
                position: 'relative',
                height: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '0.5rem',
                color: day ? '#374151' : '#d1d5db',
                backgroundColor: day && day.date === selectedDate.toISOString().split('T')[0] 
                  ? '#e0f2fe' 
                  : 'transparent',
                fontWeight: day && day.date === selectedDate.toISOString().split('T')[0] 
                  ? 600 
                  : 400,
                cursor: day ? 'pointer' : 'default',
                transition: 'all 0.2s ease-in-out',
                ':hover': day ? { backgroundColor: '#f0f9ff' } : {}
              }}
              onClick={() => day && setSelectedDate(new Date(day.date))}
            >
              {day ? day.day : ''}
              {day && renderEventIndicator(day.event)}
            </div>
          ))}
        </div>
      </CardContent>

      {/* Quick Action Buttons */}
      <CardFooter 
        style={{
          backgroundColor: '#f9fafb',
          padding: '0.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.5rem',
          borderTop: '1px solid #f3f4f6'
        }}
      >
        {[
          { icon: ClockIcon, label: 'Timetable' },
          { icon: BookOpenIcon, label: 'Study Plan' },
          { icon: TargetIcon, label: 'Goals' }
        ].map(({ icon: Icon, label }) => (
          <Button 
            key={label}
            variant="ghost"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.25rem',
              padding: '0.5rem',
              borderRadius: '0.5rem',
              fontSize: '0.55rem',
              fontWeight: 500,
              color: '#4b5563',
              transition: 'all 0.2s ease-in-out',
              ':hover': { 
                backgroundColor: 'white', 
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' 
              }
            }}
          >
            <Icon />
            <span>{label}</span>
          </Button>
        ))}
      </CardFooter>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </Card>
  );
};

export default NeetStudentCalendarWidget;