import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Hero from "./Page/Hero/Hero";
import AboutUs from "./Page/AboutUs/AboutUs";
import Study from "./Page/Study/Study";
import Contact from "./Page/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={'/'} element={ <Hero/> }/>
        <Route path={'/aboutUs'} element={ <AboutUs/> }/>
        <Route path={'/studyAbroad'} element={ <Study/> }/>
        <Route path={'/contacts'} element={ <Contact/> }/>
      </Routes>
    </div>
  );
}

export default App;
