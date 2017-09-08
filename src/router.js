import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Shelfie from './components/Shelfie/Shelfie';
import Bins from './components/Bins/Bins';
import Shelves from './components/Shelves/Shelves';

export default (
    <Switch>
        <Route exact path='/' component={ Shelfie }/>
        <Route path='/Shelves' component={ Shelves }  />
    </Switch>
)