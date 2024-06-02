import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import Dashboard from './pages/admin/Dashboard';
import CreatePost from './pages/admin/CreatePost';
import UserList from './pages/admin/UserList';
import CreateCarBrand from './pages/admin/CreateCarBrand';
import ManageVehicles from './pages/admin/ManageVehicles';
import CreateUser from './pages/admin/CreateUser';
import ContactQueries from './pages/admin/ContactQueries';
import BookingHistory from './pages/BookingHistory';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='/service' element={<Services/>}/>
        <Route path='/booking-history' element={<BookingHistory/>}/>

        {/* admin panal  */}
        <Route path='/adminDashboard' element={<Dashboard/>}/>
        <Route path='/adminCreate' element={<CreatePost/>}/>
        <Route path='/adminlist' element={<UserList/>}/>
        <Route path='/adminuser' element={<CreateUser/>}/>
        <Route path='/adminbrand' element={<CreateCarBrand/>}/>
        <Route path='/adminvehicle' element={<ManageVehicles/>}/>
        <Route path='/admininbox' element={<ContactQueries/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
