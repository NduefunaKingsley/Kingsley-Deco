import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
      <Navbar expand="lg" className="bg-body-secondary contain-nav">
      <Container>
        <Navbar.Brand href="#home">Kingsley's Deco</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Services">Services</Nav.Link>
            <Nav.Link href="/Contact">Contacts</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Bath House</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Bedrooms
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Halls / Palours</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Others
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;