import React, { useContext } from 'react';
import Home from './component/content/Home'
import { Switch, Route } from "react-router-dom";
import Sidebar from './component/layout/Sidebar';
import EditItem from './component/content/EditItem';
import Order from './component/content/Order';

function App() {
  return (
    <div>
      <Sidebar />
      <div className="container-fluid">
        <Switch>
          <Route path="/edit/:id" >
            <EditItem />
          </Route>
          <Route path="/order" >
            <Order />
          </Route>
          <Route path="/" >
            <Home />
          </Route>
        </Switch>
      </div>

    </div>
  )
}


export default App;
