import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Shelfie from './components/Shelfie/Shelfie';
import Bins from './components/Bins/Bins';
import Shelves from './components/Shelves/Shelves';
import ShelfA from './components/Shelves/ShelfA';
import ShelfB from './components/Shelves/ShelfB';
import ShelfC from './components/Shelves/ShelfC';
import ShelfD from './components/Shelves/ShelfD';

export default (
    <Switch>
        <Route exact path='/' component={ Shelfie }/>
        <Route path='/Shelves' component={ Shelves }  />
        <Route path='/ShelfA' component={ ShelfA }  />
        <Route path='/ShelfB' component={ ShelfB }  />
        <Route path='/ShelfC' component={ ShelfC }  />
        <Route path='/ShelfD' component={ ShelfD }  />
    </Switch>
)