import React from 'react'
import { Container, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Header() {
    return (
            <Navbar expand="lg" variant="light" className='gap-2'>
                <Link to="/"> <Button variant="primary">Home</Button></Link>
                <Link to="/login"> <Button variant="primary">Login</Button></Link>
                <Link to="/admin"><Button variant="primary">Admin</Button></Link>
                <Link to="/logged"><Button variant="primary">Logged</Button></Link>
                <Link to="/account"><Button variant="primary">Account</Button></Link>
            </Navbar>
    )
}

export default Header