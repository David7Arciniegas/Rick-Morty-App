import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentInfo = ({url}) => {

const [resident, setResident] = useState({});

useEffect(() => {
    axios.get(url).then((res) => setResident(res.data));
  }, [url]);


    return (
        <div>
        <h3>{resident.name}</h3>
        <img
         src={resident.image}
         />
         <p>{resident.status}</p>
         <p>{resident.origin?.name}</p>
         <h4>{resident.episode?.length}</h4>

       

        </div>
    );
};

export default ResidentInfo;