import './App.css';
import Services from './Component/Services/Services';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Details from './Component/Details/Details';
import BookingDetails from './Component/BookingDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Services />}></Route>
          <Route path="/service/:id" element={<Details />}></Route>
          <Route path="/bookingDetails" element={<BookingDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
