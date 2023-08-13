import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Hero from "./Page/Hero/Hero";
import AboutUs from "./Page/AboutUs/AboutUs";
import Study from "./Page/Study/Study";
import Contact from "./Page/Contact/Contact";
import FlagCard from "./components/Flag/FlagCard";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={'/'} element={ <Hero/> }/>
        <Route path={'/aboutUs'} element={ <AboutUs/> }/>
        <Route path={'/studyAbroad'} element={ <Study/> }/>
        <Route path={'/contacts'} element={ <Contact/> }/>
        <Route path={'/flag'} element={ <FlagCard/> }/>
      </Routes>
    </div>
  );
}

export default App;
