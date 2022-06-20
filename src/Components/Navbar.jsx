import {Navbar,Container,Nav} from 'react-bootstrap';

function CustomNavbar(props) {
    return (
        <>
        <Navbar bg="dark" variant="dark">
        <Container style={{"marginLeft": "10px","fontSize": "20px"}}>
          <Navbar.Brand href="/">LogicTrip</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" active={props.active === 'home'}>Home</Nav.Link>
            <Nav.Link href="/findataxi" active={props.active === 'findataxi'}>Find a taxi</Nav.Link>
            <Nav.Link href="/bid" active={props.active === 'bid'}>Bid</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
    )
}

export default CustomNavbar;