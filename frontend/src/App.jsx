import "./App.css";
import AboutUs from "./Components/AboutUs";
import HomePage from "./Components/HomePage";
import ContactUs from "./Components/ContactUs";
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/AboutUs" element={<AboutUs/>}></Route>
      <Route path="/ContactUs" element={<ContactUs/>}></Route>
    </Routes>
    </>
  );
}

export default App;
