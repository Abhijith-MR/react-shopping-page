import React from 'react';
import Card1 from '../../Assets/Card1.jpeg';
import Card2 from '../../Assets/Card2.jpeg';
import Card3 from '../../Assets/Card3.jpeg';
import '../Cards/Mobile.css';

export default function Mobile() {

    return (
        <div className="MobileInfo">
            <div>
            <img className='MobPic' src={Card1} />
            <h3>Samsung Galaxy S21 FE</h3>
            <p>Price: $150</p>
            </div>
            <div>
            <img className='MobPic' src={Card2} />
            <h3>iPhone 13</h3>
            <p>Price: $100</p>
            </div>
            <div>
            <img className='MobPic' src={Card3} />
            <h3>Oneplus 7T</h3>
            <p>Price: $70</p>
            </div>
        </div>
        
    );
}
