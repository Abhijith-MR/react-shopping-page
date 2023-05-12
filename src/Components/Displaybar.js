import React, { useState } from 'react';
import logo from '../Assets/IMG1.png';
import '../Components/Displaybar.css'
import ProductsList from './Cards/ProductsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'




export default function Displaybar() {

    const [isActive, setIsActive] = useState(false)
    const [selected, setSelected] = useState('All')
    const options = ['All', 'Mobile Phones', 'Smart Watches', 'Laptops', 'Accessories']

    let mockResponse = {
        'Mobile Phones': [{
            'name': 'Samsung Galaxy S21 FE',
            'price': '150',
            'image': 'https://i.expansys.net/img/p/330590/samsung-galaxy-s21-fe-coming-soon.jpg'
        },
        {
            'name': 'iPhone 13',
            'price': '100',
            'image': 'https://directunlocks.com/heros/compressed/iphone-13.png'
        }, {
            'name': 'Oneplus 7T',
            'price': '70',
            'image': 'https://phonebox.com.mt/wp-content/uploads/2019/10/oneplus-7t-8gb-128gb-dual-sim-silver.jpg'
        }],

        'Laptops': [{
            'name': 'Dell',
            'price': '500',
            'image': 'https://cdn0.vox-cdn.com/thumbor/1Q8Fr9QNCrQiAgSaLUIaizDpOBs=/cdn0.vox-cdn.com/uploads/chorus_asset/file/3405340/dell-xps-0212.0.jpg'
        },
        {
            'name': 'Lenovo',
            'price': '400',
            'image': 'https://th.bing.com/th/id/OIP.GxWUUdJW5QB40nPDoTVJhwHaGe?pid=ImgDet&rs=1'
        }, {
            'name': 'HP',
            'price': '200',
            'image': 'https://th.bing.com/th/id/OIP.kUUaPut1iYUkSa8AoilpeAHaGS?pid=ImgDet&rs=1'
        }],
        'Smart Watches': [{
            'name': 'boAt',
            'price': '80',
            'image': 'https://cdn1.smartprix.com/rx-ivSUMjfEl-w1200-h1200/boat-storm-smartwatc.jpg'
        },
        {
            'name': 'MI',
            'price': '50',
            'image': 'https://th.bing.com/th/id/OIP.LAOp1VgJ-a92oDn-C7e6DgHaHa?pid=ImgDet&rs=1'
        }, {
            'name': 'Samsung',
            'price': '40',
            'image': 'https://th.bing.com/th/id/OIP.ILuhTeiqHuThZQf22NH6GgHaHa?pid=ImgDet&rs=1'
        }],
        'Accessories': [{
            'name': 'Mobile back case',
            'price': '20',
            'image': 'https://4.imimg.com/data4/WD/WU/MY-16417484/mobile-phone-back-cover-500x500.jpg'
        },
        {
            'name': 'Smart watch belt',
            'price': '40',
            'image': 'https://5.imimg.com/data5/SELLER/Default/2020/11/RJ/DN/XN/110960780/smart-watch-belt.jpg'
        }, {
            'name': 'Mobile charger',
            'price': '70',
            'image': 'https://www.dateks.lv/images/pic/1200/1200/021/228.jpg'
        }],
        'All': [{
            'name': 'Samsung Galaxy S21 FE',
            'price': '150',
            'image': 'https://i.expansys.net/img/p/330590/samsung-galaxy-s21-fe-coming-soon.jpg'
        },
        {
            'name': 'iPhone 13',
            'price': '100',
            'image': 'https://directunlocks.com/heros/compressed/iphone-13.png'
        }, {
            'name': 'Oneplus 7T',
            'price': '70',
            'image': 'https://phonebox.com.mt/wp-content/uploads/2019/10/oneplus-7t-8gb-128gb-dual-sim-silver.jpg'
        }, {
            'name': 'Dell',
            'price': '500',
            'image': 'https://cdn0.vox-cdn.com/thumbor/1Q8Fr9QNCrQiAgSaLUIaizDpOBs=/cdn0.vox-cdn.com/uploads/chorus_asset/file/3405340/dell-xps-0212.0.jpg'
        },
        {
            'name': 'Lenovo',
            'price': '400',
            'image': 'https://th.bing.com/th/id/OIP.GxWUUdJW5QB40nPDoTVJhwHaGe?pid=ImgDet&rs=1'
        }, {
            'name': 'HP',
            'price': '200',
            'image': 'https://th.bing.com/th/id/OIP.kUUaPut1iYUkSa8AoilpeAHaGS?pid=ImgDet&rs=1'
        },
        {
            'name': 'boAt',
            'price': '80',
            'image': 'https://cdn1.smartprix.com/rx-ivSUMjfEl-w1200-h1200/boat-storm-smartwatc.jpg'
        },
        {
            'name': 'MI',
            'price': '50',
            'image': 'https://th.bing.com/th/id/OIP.LAOp1VgJ-a92oDn-C7e6DgHaHa?pid=ImgDet&rs=1'
        }, {
            'name': 'Samsung',
            'price': '40',
            'image': 'https://th.bing.com/th/id/OIP.ILuhTeiqHuThZQf22NH6GgHaHa?pid=ImgDet&rs=1'
        },
        {
            'name': 'Mobile back case',
            'price': '20',
            'image': 'https://4.imimg.com/data4/WD/WU/MY-16417484/mobile-phone-back-cover-500x500.jpg'
        },
        {
            'name': 'Smart watch belt',
            'price': '40',
            'image': 'https://5.imimg.com/data5/SELLER/Default/2020/11/RJ/DN/XN/110960780/smart-watch-belt.jpg'
        }, {
            'name': 'Mobile charger',
            'price': '70',
            'image': 'https://www.dateks.lv/images/pic/1200/1200/021/228.jpg'
        }

        ],


    }

    return (
        <>
            <div className='Header'>
                
                <img className='logo' src={logo} alt="Logo" />
            </div>
            <div className='Content'>
                <div className='Left'>
                    <h3>Filter by category</h3>

                    <div className='dropdown'>
                        <div className='dropdown-btn' onClick={(e) => setIsActive(!isActive)}>
                            {selected} <FontAwesomeIcon icon={faCaretDown} />
                        </div>

                        {isActive && (
                            <div className='dropdown-content'>
                                {options.map((option) => (
                                    <div
                                        onClick={(e) => {
                                            setSelected(option);
                                            setIsActive(false);
                                        }}
                                        className='dropdown-item'>{option}

                                    </div>
                                ))}

                            </div>
                        )}
                    </div>


                </div>
                <div className='Right'>
                    <ProductsList mockResponse={mockResponse[selected]} />
                    {/* <Mobile/>
                    <Watch/>
                    <Laptop/>
                    <Accessories/> */}
                </div>

            </div>

        </>
    );
}
