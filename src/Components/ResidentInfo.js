import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentInfo = ({url}) => {

const [resident, setResident] = useState({});

useEffect(() => {
    axios.get(url).then((res) => setResident(res.data));
  }, [url]);


    return (

      
       <li>   
         <div  href="#" className="card">
        <h3 className="name-resident">{resident.name}</h3>
       
        <img
         src={resident.image}alt="" href="!#"
         />
         <a><p className="subtitles">Status:</p> {resident?.status}</a>
         <a><p className="subtitles">Origin:</p>{resident?.origin?.name}</a>
         <a><p className="subtitles">Episodes of Appearance:</p>{resident.episode?.length}</a>
         </div>
        </li>
    

        
    );
};

export default ResidentInfo;