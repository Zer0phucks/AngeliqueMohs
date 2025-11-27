import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Event } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

interface EventsCalendarProps {
  events: Event[];
}

const EventsCalendar: React.FC<EventsCalendarProps> = ({ events }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Get events for the selected month
  const monthEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getMonth() === currentMonth.getMonth() &&
           eventDate.getFullYear() === currentMonth.getFullYear();
  }).sort((a, b) => a.date.getTime() - b.date.getTime());

  // Get upcoming events (next 3)
  const upcomingEvents = events
    .filter(event => event.date >= new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 3);

  const getEventTypeColor = (type?: string) => {
    switch (type) {
      case 'exhibition':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'workshop':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'open-studio':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'sale':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      default:
        return 'bg-art-100 text-art-700 border-art-200';
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (date: Date, time?: string) => {
    if (time) return time;
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <div className="bg-white rounded-sm shadow-sm border border-art-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl text-art-900">Calendar</h2>
        <Calendar className="text-art-600" size={24} />
      </div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-art-100">
        <button
          onClick={() => navigateMonth('prev')}
          className="p-1 hover:bg-art-50 rounded transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft size={20} className="text-art-600" />
        </button>
        <h3 className="font-semibold text-art-900">{monthName}</h3>
        <button
          onClick={() => navigateMonth('next')}
          className="p-1 hover:bg-art-50 rounded transition-colors"
          aria-label="Next month"
        >
          <ChevronRight size={20} className="text-art-600" />
        </button>
      </div>

      {/* Upcoming Events List */}
      <div className="space-y-4">
        <AnimatePresence mode="wait">
          {monthEvents.length > 0 ? (
            monthEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="border border-art-200 rounded-sm p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-semibold px-2 py-1 rounded border ${getEventTypeColor(event.type)}`}>
                        {event.type?.replace('-', ' ') || 'Event'}
                      </span>
                    </div>
                    <h4 className="font-serif text-lg text-art-900 mb-2">{event.title}</h4>
                    <div className="space-y-1 text-sm text-art-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      {event.time && (
                        <div className="flex items-center gap-2">
                          <Clock size={14} />
                          <span>{event.time}</span>
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          <span className="text-art-500">{event.location}</span>
                        </div>
                      )}
                    </div>
                    {event.description && (
                      <p className="text-sm text-art-600 mt-2 line-clamp-2">{event.description}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-8 text-art-400"
            >
              <p>No events scheduled for this month.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Quick View: Next 3 Upcoming */}
      {upcomingEvents.length > 0 && (
        <div className="mt-6 pt-6 border-t border-art-100">
          <h3 className="font-semibold text-art-900 mb-3 text-sm uppercase tracking-wider">Next Up</h3>
          <div className="space-y-2">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="text-sm">
                <div className="font-medium text-art-900">{event.title}</div>
                <div className="text-art-500 text-xs">
                  {formatDate(event.date)} {event.time && `• ${event.time}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsCalendar;

