import React from 'react';
import Watch1 from '../../Assets/Watch1.jpeg';
import Watch2 from '../../Assets/Watch2.jpeg';
import Watch3 from '../../Assets/Watch3.jpeg';
import '../Cards/Watch.css';

export default function Watch() {

    return (
        <div className="WatchInfo">
            <div>
            <img className='WatchPic' src={Watch1} />
            <h3>boAt</h3>
            <p>Price: $80</p>
            </div>
            <div>
            <img className='WatchPic' src={Watch2} />
            <h3>MI </h3>
            <p>Price: $50</p>
            </div>
            <div>
            <img className='WatchPic' src={Watch3} />
            <h3>Samsung</h3>
            <p>Price: $40</p>
            </div>
        </div>
        
    );
}
