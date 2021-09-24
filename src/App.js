import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import VendingMachine from './VendingMachine'
import Item from './Item'
import NavBar from './Navbar'
import './App.css';
import {list} from './ItemsList'
console.log(list)



function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar items={list}/>
        <Route exact path='/'>
          <VendingMachine items={list}/>
        </Route>
        {list.map(i=>(
          <Route key={i.name} exact path={i.url}>
            <Item item={i}/>
          </Route>
        ))}
      </BrowserRouter>
      
    </>
  );
}

export default App;
