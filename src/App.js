/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Components/styles/App.css";
import Location from "./Components/Location";
import logo from "./assets/logo.png";
import gif from "./assets/cf940473097ca8f533b759e2f6f49875.gif";



function App() {
 

  return (
  <div>


    <header className="header">
      <img href="#" className="image" src={gif} alt=""></img>
    </header>

    <div className="logo">
    <img  src={logo}width="900px" alt="" href="#"></img>
    </div>

    <Location />




  </div>
    
  );
}

export default App;
