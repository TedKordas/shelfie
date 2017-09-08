import React, { Component } from 'react';
import { getShelfD } from '../../services/usersService';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';

export default class ShelfD extends Component {
    constructor() {
        super()
        this.state = {
            shelfD: []
        }
    }

    componentDidMount() {
        getShelfD().then(res => {
            console.log(res)
            this.setState({
                shelfD: res
            })
        })
    }

    render() {

        const shelfD = this.state.shelfD.map((e, i) => {
    return (
        <h3 key={i}>{e.name}</h3>
         )
        })
        return (
            <div>
            <div className='shelfAHeaderContainer'>
                <div className="shelfAHeaderDarkRed">
                <Link to='/'>
                    <img className='selfASiteLogo' src={logo} />
                </Link>
                </div>

                <div className="shelfAHeaderLightRed">
                    <div>Shelf D</div>
                </div>
            </div>  

            <div>
                <Link to="/bin1">
                    <div className='bin01'>
                        Bin 1
                    </div>
                </Link>
            </div>

            <div>
                <Link to="/bin2">
                    <div className='bin02'>
                        Bin 2
                    </div>
                </Link>
            </div>

            <div>
                <Link to="/bin3">
                    <div className='bin03'>
                        Bin 3
                    </div>
                </Link>
            </div>

            <div>
                <Link to="/bin4">
                    <div className='bin04'>
                        Bin 4
                    </div>
                </Link>
            </div>

            
            </div>
        )
    }
}