import MonthView from './components/calendar_views/MonthView'
import WeekView from './components/calendar_views/WeekView'
import DayView from './components/calendar_views/DayView'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateModal from './components/modals/CreateModal';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <BrowserRouter>
            <Routes>
              <Route path="/api/calendar/create" element={<CreateModal />} /> 
              <Route path="/api/calendar/month" element={<MonthView />} />
              {/* <Route path="/" element={<WeekView />} />
              <Route path="/" element={<DayView />} /> */}
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
