/* eslint-disable jsx-a11y/anchor-is-valid */
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
           

           <div className='searchbox'href="javascript:void(0)">
           <input size="70" className='input' type="text" onChange={e => setId (e.target.value)} 
             value={id}/>
           <button onClick={searchID}>Search ID</button>
           </div>

           <h2 href="javascript:void(0)" className='name'><p className='name'>{locationInfo?.name}</p></h2>
        


          <div href="javascript:void(0)" className='locationinfo'>
           <div className='type'>    
           <h2 className='subtitles'>Type:</h2> 
           <a href="#">{locationInfo?.type}</a>
          </div>

          <div href="javascript:void(0)" className='dimension'>    
           <h2 className='subtitles'>Dimension:</h2> 
           <a href="javascript:void(0)">{locationInfo?.dimension}</a>
          </div>

          
          <div href="javascript:void(0)" className='population'>    
           <h2 className='subtitles'>Population:</h2> 
           <a href="javascript:void(0)">{locationInfo?.residents?.length}</a>
          </div>

         </div>    

     
      
           <ul href="#" className='characterlist'>
            {locationInfo.residents?.map(residents => (
          <ResidentInfo url={residents} key={residents} href=""/>
   ))}
    </ul>
    </div>
      );
    };

export default Location;
