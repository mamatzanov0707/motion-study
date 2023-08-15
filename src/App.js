import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import AboutUs from "./Page/AboutUs/AboutUs";
import Study from "./Page/Study/Study";
import Contact from "./Page/Contact/Contact";
import FlagCard from "./components/Flag/FlagCard";
import Country from './Page/Country';
import Other from './Page/Other';
import Items from './Page/Items';
import Artis from './Page/Artis';

import Footer from "./components/Footer/footer";
import HeroPage from "./components/HeroPage/HeroPage";
import Submit from "./components/submit/submit";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={'/'} element={ <HeroPage/> }/>
        <Route path={'/aboutUs'} element={ <AboutUs/> }/>
        <Route path={'/studyAbroad'} element={ <Study/> }/>
        <Route path={'/contacts'} element={ <Contact/> }/>
        <Route path={'/flag'} element={ <FlagCard/> }/>
        <Route path={'/country'} element={ <Country/> }/>
        <Route path={'/other'} element={ <Other/>}/>
        <Route path={'/itams'} element={<Items/>}/>
        <Route path={'/artis'} element={<Artis/>}/>

      </Routes>
        <Submit/>
        <Footer/>
    </div>
  );
}

export default App;
