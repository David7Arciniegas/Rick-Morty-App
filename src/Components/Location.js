import axios from 'axios';
import { useState } from "react";
import { useEffect } from 'react';
import ResidentInfo from './ResidentInfo';

const Location = () => {
   
const [ locationInfo,setlocationInfo] = useState({});
const [id, setId ] = useState ("");


useEffect(()=> {
const random = Math.floor(Math.random() * 126) + 1
axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then(res => setlocationInfo(res.data));
},[])


console.log(locationInfo)


const searchID = () => {
    console.log(id)
    axios.get(`https://rickandmortyapi.com/api/location/${id}`)
    .then(res => setlocationInfo(res.data));
}


    return (

        <div>
            <h2>{locationInfo?.name}</h2>

           <div>
             <input type="text" onChange={e => setId (e.target.value)} 
             value={id}/>
           <button onClick={searchID}>Buscar</button>
             
           </div>
          
            <h2>{locationInfo?.type}</h2>
            <h2>{locationInfo?.dimension}</h2>
            <h2>{locationInfo?.residents?.length}</h2>
           
            {locationInfo.residents?.map(residents => (

<ResidentInfo url={residents} key={residents} />

 ))}
        </div>
    );
};

export default Location;
