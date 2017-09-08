import Shelves from '../Shelves/Shelves';
import React from 'react';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';
import ShelfA from '../../components/Shelves/ShelfA';

export default function Shelfie() {
    return (
        <div>
            <div className='header'>
                <Link to='/'>
                    <img className='siteLogo' src={logo} />
                </Link>
                <h1 className='siteTitle'>Shelfie</h1>
            </div>
            
            <div>
                <ShelfA/>
            </div>

            <div>

            </div>

            <div>

            </div>

            <div>

            </div>
            
        </div>
    )
}