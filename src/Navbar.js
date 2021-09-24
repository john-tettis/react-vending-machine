import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,NavLink as NavBarLink } from 'reactstrap';
import './Navbar.css'


const NavBar=({items})=>{
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return(
        <>
            <Navbar dark  color="dark" expand='sm'>
                <NavbarBrand className="px-4 mr-auto"><NavLink className=' nav nav-link' to='/'>Vending Machine</NavLink></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                <Nav navbar className='ml-4'>
                    {items.map(i=>(
                    <NavItem key={i.name}>
                            <NavLink className='nav-link text-center' to={i.url}>{i.name}</NavLink>  
                    </NavItem>)
                    )}
                </Nav>
                </Collapse>
            </Navbar>
        </>
    )

}

export default NavBar