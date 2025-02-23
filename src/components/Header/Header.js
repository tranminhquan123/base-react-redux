import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand href='#home'>Trần Minh Quân</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/users' className='nav-link'>User</Link>
            <Link to='/admin' className='nav-link'>Admin</Link>
            {/* <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/users'>User</Nav.Link>
            <Nav.Link href='/admin'>Admin</Nav.Link> */}
          </Nav>
          <Nav>
            <NavDropdown title='Setting' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Login</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Log out</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.1'>Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
