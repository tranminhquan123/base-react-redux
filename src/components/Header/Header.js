import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        {/* <Navbar.Brand href='#home'>Trần Minh Quân</Navbar.Brand> */}
        <NavLink to='/' className='navbar-brand'>
          Trần Minh Quân
        </NavLink>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink to='/' className='nav-link'>
              Home
            </NavLink>
            <NavLink to='/users' className='nav-link '>
              User
            </NavLink>
            <NavLink to='/admin' className='nav-link'>
              Admin
            </NavLink>
            {/* <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/users'>User</Nav.Link>
            <Nav.Link href='/admin'>Admin</Nav.Link> */}
          </Nav>
          <Nav>
            <button className='btn-login'>Login</button>
            <button className="btn-signup">Sign up</button>
            {/* <NavDropdown title='Setting' id='basic-nav-dropdown'>
              <NavDropdown.Item>Login</NavDropdown.Item>
              <NavDropdown.Item>Log out</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
