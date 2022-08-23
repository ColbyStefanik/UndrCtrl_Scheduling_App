import MonthView from './components/calendar_views/MonthView'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateModal from './components/modals/CreateModal';
import Register from './components/login_and_regs/Register';
import Login from './components/login_and_regs/Login';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <BrowserRouter>
            <Routes>
              <Route path="/register" element={<Register/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/calendar/create" element={<CreateModal />} /> 
              <Route path="/calendar/month" element={<MonthView />} />
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
