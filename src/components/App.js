import React, { Component } from 'react';
import '../App.css';
import router from '../router';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        {/* <Link to="/">Shelfie</Link>
        <Link to="/ShelfA">ShelfA</Link>
        <Link to="/ShelfB">ShelfB</Link>
        <Link to="/ShelfC">ShelfC</Link>
        <Link to="/ShelfD">ShelfD</Link> */}
        { router }
      </div>
    );
  }
}

export default App;
