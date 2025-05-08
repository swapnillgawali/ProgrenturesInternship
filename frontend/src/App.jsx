import "./App.css";
import AboutUs from "./Components/AboutUs";
import HomePage from "./Components/HomePage";
import ContactUs from "./Components/ContactUs";
import LoginPage from "./Components/LoginPage";
import Dashboard from "./Components/Dashboard";
import StudentRegister from "./Components/StudentRegister";
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/AboutUs" element={<AboutUs/>}></Route>
      <Route path="/ContactUs" element={<ContactUs/>}></Route>
      <Route path="/LoginPage" element={<LoginPage/>}></Route>
      <Route path="/Dashboard" element={<Dashboard/>}></Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/StudentRegister" element={<StudentRegister/>}></Route>

    </Routes>
    </>
  );
}

export default App;
