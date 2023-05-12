import React from 'react';
import Accessories1 from '../../Assets/Accessories1.jpeg';
import Accessories2 from '../../Assets/Accessories2.jpeg';
import Accessories3 from '../../Assets/Accessories3.jpeg';
import '../Cards/Accessories.css';

export default function Accessories() {

    return (
        <div className="AccessoriesInfo">
            <div>
            <img className='AccessoriesPic' src={Accessories1} />
            <h3>Mobile back case</h3>
            <p>Price: $20</p>
            </div>
            <div>
            <img className='AccessoriesPic' src={Accessories2} />
            <h3>Smart watch belt</h3>
            <p>Price: $40</p>
            </div>
            <div>
            <img className='AccessoriesPic' src={Accessories3} />
            <h3>Mobile charger</h3>
            <p>Price: $70</p>
            </div>
        </div>
        
    );
}
