import React, { useEffect, useState } from 'react';
import data from "../Components/data.js"
import { useParams } from 'react-router-dom';

function House() {
    let {id} = useParams();
    const [house , setHouse] = useState([]);

    useEffect(()=>{
      {
        for(let i=0;i<data.length ; i++){
          if(parseInt(id) === data[i].id){
            const ourHouse = data[i];
            setHouse(ourHouse);
            break;
          }
        }
      }

    } , []);

    // console.log(house);

    return (
    <div>

            <>
            <h1>{house.id}</h1>
            <h1>{house.addr}</h1>
            </>
    </div>
  )
}

export default House