import './App.css';
import Header from "./components/Header/Header";
import { Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        {/*<Route path={'/'} element={}/>*/}
      </Routes>
    </div>
  );
}

export default App;
