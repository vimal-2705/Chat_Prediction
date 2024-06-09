import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ScrollToTop from './pages/ScrollToTop';
import Predict from './pages/Predict';
import Login from './pages/Login';
import Teachers from './pages/Teachers';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/predict' element={<Predict />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
