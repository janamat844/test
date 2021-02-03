import React from 'react'
import Header from './Header'
import './Navbar.css'
function Navbar() {
    return (
        <div>
       <Header/>       
<Navbar className="navbardiv"  expand="lg">
  <Navbar.Brand href="#home">NESBS</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Navbar className="mr-auto">
      <Navbar.Link className="menue" href="#home">Home</Navbar.Link>
      <Navbar.Link href="#about">About</Navbar.Link>
      <Navbar.Link href="#contact">Contact</Navbar.Link>
      <Navbar.Link href="#gallery">Gallery</Navbar.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Navbar>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button className="searchbuttom" variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Navbar
