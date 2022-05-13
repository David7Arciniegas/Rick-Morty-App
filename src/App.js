import "./Components/styles/App.css";
import { useState } from "react";
import Location from "./Components/Location";
import ResidentInfo from "./Components/ResidentInfo";


function App() {
  const [showCountry, setShowCountry] = useState(false);

  return (
  <div>

<Location />

  </div>
    
  );
}

export default App;
