import React from 'react';
import Card1 from '../../Assets/Card1.jpeg';
import Card2 from '../../Assets/Card2.jpeg';
import Card3 from '../../Assets/Card3.jpeg';
import '../Cards/Mobile.css';

export default function ProductsList({mockResponse}) {

   

    return (
        <div className="MobileInfo">
            {mockResponse.map(res=>{
                return  <div>
                <img className='MobPic' src={res.image} />
                <h3>{res.name}</h3>
                <p>Price: ${res.price}</p>
            </div>
            })}
           
        </div>

    );
}
