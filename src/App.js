/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Components/styles/App.css";
import Location from "./Components/Location";
import logo from "./assets/logo.png";



function App() {
 

  return (
  <div>


    <header className="header">
    </header>

    <div className="logo">
    <img  src={logo}width="900px" alt="" href="#"></img>
    </div>

    <Location />




  </div>
    
  );
}

export default App;
