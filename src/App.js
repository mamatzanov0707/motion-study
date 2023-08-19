import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import AboutUs from "./Page/AboutUs/AboutUs";
import Study from "./Page/Study/Study";
import Contact from "./Page/Contact/Contact";
import FlagCard from "./components/Flag/FlagCard";
import Other from './Page/Other';
import Items from './Page/Items';
import Artis from './Page/Artis';

import Country from './Page/Country'
import Footer from "./components/Footer/footer";
import HeroPage from "./components/HeroPage/HeroPage";
import Submit from "./components/submit/submit";
import English from "./Page/Hero/English/English";

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <Routes>
//         <Route path={'/'} element={ <HeroPage/> }/>
//         <Route path={'/aboutUs'} element={ <AboutUs/> }/>
//         <Route path={'/studyAbroad'} element={ <Study/> }/>
//         <Route path={'/contacts'} element={ <Contact/> }/>
//         <Route path={'/flag'} element={ <FlagCard/> }/>
//         <Route path={'/country'} element={ <Country/> }/>
//         <Route path={'/other'} element={ <Other/>}/>
//         <Route path={'/items'} element={<Items/>}/>
//         <Route path={'/artis'} element={<Artis/>}/>
//         <Route path={'/cambridge'} element={<English/>}/>
//       </Routes>


//       <Footer/>
//     </div>
//   );
import {useEffect, useState} from "react";
import Loading from "./components/Loading/Loading";

function App() {
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
        }, 5000)
    }, [])
    return (
        <>
            <Loading load={load}/>


            <div style={{
                display: load ? 'none' : 'block'
            }}>
                <div className="App">
                    <Header/>
                    <Routes>
                        <Route path={'/'} element={<HeroPage/>}/>
                        <Route path={'/aboutUs'} element={<AboutUs/>}/>
                        <Route path={'/studyAbroad'} element={<Study/>}/>
                        <Route path={'/contacts'} element={<Contact/>}/>
                        <Route path={'/flag'} element={<FlagCard/>}/>
                        <Route path={'/country'} element={<Country/>}/>
                        <Route path={'/other'} element={<Other/>}/>
                        <Route path={'/itams'} element={<Items/>}/>
                        <Route path={'/artis'} element={<Artis/>}/>
                         <Route path={'/cambridge'} element={<English/>}/>
                    </Routes>
                     {/* <Submit/> */}
                    <Footer/>
                </div>
            </div>
        </>
    );
}

export default App;
