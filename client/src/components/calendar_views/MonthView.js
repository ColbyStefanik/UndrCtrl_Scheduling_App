import {React, useState, useEffect} from 'react'
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import CreateModal from '../modals/CreateModal';

const MonthView = () => {

  const [eventList, setEventList] = useState([])
    
  return (
    <div className="App">
        
      { <FullCalendar
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
          datesSet={ function(info) { //update events list when month is changed
            let y1 = info.view.currentStart.getFullYear();
            let m1 = info.view.currentStart.getMonth();
            let d1 = info.view.currentStart.getDate();
            let y2 = info.view.currentEnd.getFullYear();
            let m2 = info.view.currentEnd.getMonth();
            let d2 = info.view.currentEnd.getDate();
            let date1 = y1 + "-" + (m1+1) + "-" + d1;
            let date2 = y2 + "-" + (m2+1) + "-" + (d2);

            axios.get( `http://localhost:8000/api/calendar/range/${date1}/${date2}`)
            .then((res=>{
                //console.log(res);
                console.log(res.data);
                setEventList(res.data);
            }))
            .catch((err)=>console.log(err))

            //console.log(date1 + " - " + date2);
          }}
        
      /> }
    </div>  )
}

export default MonthView;