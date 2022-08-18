import MonthView from './components/calendar_views/MonthView'
import WeekView from './components/calendar_views/WeekView'
import DayView from './components/calendar_views/DayView'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="container-fluid-xl">
      <div className="row">
        <div className="col">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MonthView />} />
              <Route path="/" element={<WeekView />} />
              <Route path="/" element={<DayView />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
