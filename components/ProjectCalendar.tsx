"use client"
import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isBooked: boolean;
}

export default function ProjectCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendar, setCalendar] = useState<CalendarDay[]>([]);

  // Simulate booking status - replace with actual data source
  const isDateBooked = (date: Date) => {
    // Example: Booked for next 30 days
    const today = new Date();
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(today.getDate() + 30);
    return date >= today && date <= thirtyDaysFromNow;
  };

  const generateCalendar = (date: Date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const startingDayOfWeek = firstDay.getDay();
    const daysInMonth = lastDay.getDate();

    const calendar: CalendarDay[] = [];

    // Add days from previous month
    const prevMonth = new Date(date.getFullYear(), date.getMonth() - 1);
    const daysInPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const day = new Date(prevMonth.getFullYear(), prevMonth.getMonth(), daysInPrevMonth - i);
      calendar.push({
        date: day,
        isCurrentMonth: false,
        isBooked: isDateBooked(day)
      });
    }

    // Add days from current month
    for (let i = 1; i <= daysInMonth; i++) {
      const day = new Date(date.getFullYear(), date.getMonth(), i);
      calendar.push({
        date: day,
        isCurrentMonth: true,
        isBooked: isDateBooked(day)
      });
    }

    // Add days from next month
    const remainingDays = 42 - calendar.length; // 6 rows × 7 days
    for (let i = 1; i <= remainingDays; i++) {
      const day = new Date(date.getFullYear(), date.getMonth() + 1, i);
      calendar.push({
        date: day,
        isCurrentMonth: false,
        isBooked: isDateBooked(day)
      });
    }

    setCalendar(calendar);
  };

  useEffect(() => {
    generateCalendar(currentDate);
  }, [currentDate]);

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="mb-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Project Availability
        </h2>
        <div className="flex items-center gap-4">
          <button
            onClick={prevMonth}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          <span className="text-lg font-medium text-gray-900 dark:text-white">
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </span>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <ChevronRightIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {weekDays.map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 py-2">
            {day}
          </div>
        ))}
        {calendar.map((day, index) => (
          <div
            key={index}
            className={`
              aspect-square flex items-center justify-center rounded-lg text-sm
              ${day.isCurrentMonth 
                ? 'text-gray-900 dark:text-white' 
                : 'text-gray-400 dark:text-gray-600'
              }
              ${day.isBooked 
                ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300' 
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }
              transition-colors cursor-pointer
            `}
          >
            {day.date.getDate()}
          </div>
        ))}
      </div>
      
      <div className="mt-4 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800"></div>
          <span>Booked</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"></div>
          <span>Available</span>
        </div>
      </div>
    </div>
  );
} 