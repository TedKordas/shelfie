import Shelves from '../Shelves/Shelves';
import React from 'react';
import logo from '../../logo.png';
import { Link, Route, Router, Switch } from 'react-router-dom';
import ShelfA from '../../components/Shelves/ShelfA';
import ShelfB from '../../components/Shelves/ShelfB';
import ShelfC from '../../components/Shelves/ShelfC';
import ShelfD from '../../components/Shelves/ShelfD';

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
                <Link to="/Shelfa">
                    <div className='shelfAA'>
                        Shelf A
                    </div>
                </Link>
            </div>
                
            <div>
                <Link to="/Shelfb">
                    <div className='shelfBB'>
                        Shelf B
                    </div>
                </Link>
            </div>

            <div>
                <Link to="/Shelfc">
                    <div className='shelfCC'>
                        Shelf C
                    </div>
                </Link>
            </div>

            <div>
                <Link to="/Shelfd">
                    <div className='shelfDD'>
                        Shelf D
                    </div>
                </Link>
            </div>
            
        </div>
    )
}