
import * as ReactBootstrap from 'react-bootstrap';
import './Navbar.css'

function Navbar() {
  return(
  <div>
    <ReactBootstrap.Navbar className="nav">
      <ReactBootstrap.Nav className="mr-auto">
        <ReactBootstrap.Nav><p classname="name">Home</p></ReactBootstrap.Nav>
        <ReactBootstrap.Nav><p classname="name">Price</p></ReactBootstrap.Nav>
        <ReactBootstrap.Nav><p classname="name">About</p></ReactBootstrap.Nav>
    </ReactBootstrap.Nav>
  </ReactBootstrap.Navbar>

  </div>
  )
}


export default Navbar;
