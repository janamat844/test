import * as ReactBootstrap from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <ReactBootstrap.Navbar bg="dark" variant="dark">
        <ReactBootstrap.Nav className="mr-auto">
        <ReactBootstrap.Nav.Link href="#home">Home</ReactBootstrap.Nav.Link>
        <ReactBootstrap.Nav.Link href="#features">Features</ReactBootstrap.Nav.Link>
        <ReactBootstrap.Nav.Link href="#pricing">Pricing</ReactBootstrap.Nav.Link>
        <ReactBootstrap.Nav.Link href="#pricing">Pricing</ReactBootstrap.Nav.Link>
      </ReactBootstrap.Nav>
    </ReactBootstrap.Navbar>
  <br />
  
    </div>
  );
}

export default App;
