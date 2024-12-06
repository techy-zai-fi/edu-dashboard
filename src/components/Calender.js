import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const CalendarContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const MonthNavigator = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #f5f5f5;
    }
  }
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
`;

const WeekDay = styled.div`
  text-align: center;
  font-size: 12px;
  color: #64748b;
  padding: 8px 0;
`;

const Day = styled.div`
  text-align: center;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;

  ${(props) =>
    props.isToday &&
    `
    background: #8b5cf6;
    color: white;
  `}

  ${(props) =>
    props.isSelected &&
    `
    background: #eef2ff;
  `}

  &:hover {
    background: ${(props) => !props.isToday && '#eef2ff'};
  }
`;

const EventList = styled.div`
  margin-top: 20px;
`;

const Event = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 8px;

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`;

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (year, month) => {
    return new Array(new Date(year, month + 1, 0).getDate()).fill(null).map((_, index) => index + 1);
  };

  const events = [
    {
      name: 'Nathan Maclam',
      time: '10 AM - 12 PM',
      avatar: '/path-to-avatar.jpg',
    },
    {
      name: 'Dnial Vator',
      time: '10 AM - 12 PM',
      avatar: '/path-to-avatar.jpg',
    },
  ];

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  const handleDayClick = (day) => {
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  };

  const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());

  return (
    <CalendarContainer>
      <CalendarHeader>
        <MonthNavigator>
          <button onClick={handlePrevMonth}>
            <ChevronLeft />
          </button>
          <h3>
            {currentDate.toLocaleString('default', {
              month: 'long',
              year: 'numeric',
            })}
          </h3>
          <button onClick={handleNextMonth}>
            <ChevronRight />
          </button>
        </MonthNavigator>
      </CalendarHeader>

      <CalendarGrid>
        {weekDays.map((day) => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}

        {daysInMonth.map((day) => (
          <Day
            key={day}
            isToday={
              day === new Date().getDate() &&
              currentDate.getMonth() === new Date().getMonth() &&
              currentDate.getFullYear() === new Date().getFullYear()
            }
            isSelected={day === selectedDate.getDate()}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </Day>
        ))}
      </CalendarGrid>

      <EventList>
        {events.map((event, index) => (
          <Event key={index}>
            <img src={event.avatar} alt={event.name} />
            <div>
              <div>{event.name}</div>
              <div style={{ color: '#64748b', fontSize: '12px' }}>{event.time}</div>
            </div>
          </Event>
        ))}
      </EventList>
    </CalendarContainer>
  );
};

export default Calendar;
