import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Hero from "./Page/Hero/Hero";
import AboutUs from "./Page/AboutUs/AboutUs";
import Study from "./Page/Study/Study";
import Contact from "./Page/Contact/Contact";
import FlagCard from "./components/Flag/FlagCard";
import Country from './Page/Country';
import Other from './Page/Other';
import Items from './Page/Items';
import Artis from './Page/Artis';


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
        <Route path={'/country'} element={ <Country/> }/>
        <Route path={'/other'} element={ <Other/>}/>
        <Route path={'/itams'} element={<Items/>}/>
        <Route path={'/artis'} element={<Artis/>}/>

      </Routes>
    </div>
  );
}

export default App;
