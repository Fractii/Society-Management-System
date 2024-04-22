import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavBar() {
  return (
    <Navbar style={{ backgroundColor: '#c4a464' }}>
      <Container>
        <Navbar.Brand className="mr-auto" href="#home" style={{ color: 'white', marginLeft: '-100px' }}>
          <strong>Society Management System</strong>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <div className="d-flex">
            <Button href="#login" style={{ backgroundColor: '#00264d' , marginRight: '10px' }}>
              Login
            </Button>
            <Button href="#signup" style={{ backgroundColor: '#00264d' }}>
              Signup
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
