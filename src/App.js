import './App.css';
import Header from "./components/Header/Header";
import { Routes} from "react-router-dom";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        {/*<Route path={'/'} element={}/>*/}
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
