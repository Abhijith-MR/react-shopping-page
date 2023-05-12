import React from 'react';
import Laptop1 from '../../Assets/Laptop1.jpeg';
import Laptop2 from '../../Assets/Laptop2.jpeg';
import Laptop3 from '../../Assets/Laptop3.jpeg';
import '../Cards/Laptop.css';

export default function Laptop() {

    return (
        <div className="LaptopInfo">
            <div>
            <img className='LaptopPic' src={Laptop1} />
            <h3>Dell</h3>
            <p>Price: $500</p>
            </div>
            <div>
            <img className='LaptopPic' src={Laptop2} />
            <h3>Lenovo</h3>
            <p>Price: $400</p>
            </div>
            <div>
            <img className='LaptopPic' src={Laptop3} />
            <h3>HP</h3>
            <p>Price: $200</p>
            </div>
        </div>
        
    );
}
