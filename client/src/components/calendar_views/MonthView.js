import {React, useState, useEffect} from 'react'
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import CreateModal from '../modals/CreateModal';
import EventList from './EventList';

const MonthView = () => {

  const [eventList, setEventList] = useState([]);
  /*let events = [];

  const event = {
    id: 'a',
    title: 'my event',
    start: new Date("2022-08-21")
  };*/
    
  return (
    <div className="App">
      <CreateModal />
      { <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
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

/*              console.log(res.data.length);
              console.log(events);
              for(let i=0; i < res.data.length;i++) {
                let s = new Date(res.data[i].date);
                let myArray = res.data[i].startTime.split(":");
                console.log(myArray);
                s.setHours(myArray[0],myArray[1]);
                console.log(s);
                let a = {id: res.data[i]._id, title: res.data[i].gameName, start: s};
                console.log(a);
                events.push(a);
                console.log(events);
              }
              console.log(events);
*/
          }))
          .catch((err)=>console.log(err))

          //console.log(date1 + " - " + date2);
        }}
        //events = {eventList}
          
        
      /> }
      <EventList/>
    </div>  )
}

export default MonthView;