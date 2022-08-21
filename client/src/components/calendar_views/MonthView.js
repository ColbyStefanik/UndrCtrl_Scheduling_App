import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import CreateModal from '../modals/CreateModal';

const MonthView = () => {
    
  return (
    <div className="App">
        
      {/* <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        customButtons={{
            new: {
              text: 'Create Event',
              click: () => {
                <CreateModal />
                console.log('new event')
                },
            },
          }}
        headerToolbar={{
            center: 'dayGridMonth,timeGridWeek,timeGridDay new',
          }}
        
      /> */}
    </div>  )
}

export default MonthView;