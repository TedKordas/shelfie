import React, { Component } from 'react';
import { getShelfC } from '../../services/usersService';
import { Link } from 'react-router-dom';

export default class ShelfC extends Component {
    constructor() {
        super()
        this.state = {
            shelfC: []
        }
    }

    componentDidMount() {
        getShelfC().then(res => {
            console.log(res)
            this.setState({
                shelfC: res
            })
        })
    }

    render() {

        const shelfC = this.state.shelfC.map((e, i) => {
    return (
        <h3 key={i}>{e.name}</h3>
         )
        })
        return (
            <div>
                <Link to="/ShelfC">
                    <div className='shelfCC'>
                        Shelf C
                        {shelfC}
                    </div>
                </Link>
            </div>
        )
    }
}