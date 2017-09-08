import React, { Component } from 'react';
import { getShelfB } from '../../services/usersService';
import { Link } from 'react-router-dom';

export default class ShelfB extends Component {
    constructor() {
        super()
        this.state = {
            shelfB: []
        }
    }

    componentDidMount() {
        getShelfB().then(res => {
            console.log(res)
            this.setState({
                shelfB: res
            })
        })
    }

    render() {

        const shelfB = this.state.shelfB.map((e, i) => {
    return (
        <h3 key={i}>{e.name}</h3>
         )
        })
        return (
            <div>
                <Link to="/Shelfc">
                    <div className='shelfBB'>
                        Shelf B
                        {shelfB}
                    </div>
                </Link>
            </div>
        )
    }
}