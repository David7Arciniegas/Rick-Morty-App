import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentInfo = ({url}) => {

const [resident, setResident] = useState({});

useEffect(() => {
    axios.get(url).then((res) => setResident(res.data));
  }, [url]);


    return (

      
       <li>   
         <div className="card">
        <h3 className="name-resident">{resident.name}</h3>
       
        <img
         src={resident.image}alt=""
         />
         <p><p className="subtitles">Status:</p> {resident.status}</p>
         <p><p className="subtitles">Origin</p>{resident.origin?.name}</p>
         <p><p className="subtitles">Episodes of Appearance</p>{resident.episode?.length}</p>
         </div>
        </li>
    

        
    );
};

export default ResidentInfo;