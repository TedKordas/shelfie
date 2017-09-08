import React, { Component } from 'react';
import { getShelfD } from '../../services/usersService';
import { Link } from 'react-router-dom';

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
                <Link to="/Shelfd">
                    <div className='shelfDD'>
                        Shelf D
                        {shelfD}
                    </div>
                </Link>
            </div>
        )
    }
}