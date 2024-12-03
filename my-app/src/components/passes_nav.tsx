import { FC } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { ROUTES, ROUTE_LABELS } from '../Routes'
import { Link } from "react-router-dom";

interface Props {
    name: string
}

const PassNav: FC<Props> = ({ name }) => (
  <Navbar key="md" expand="md" className='pass-nav'>
      <Container>
          <Navbar.Brand href="/">{name}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
              <Nav className="justify-content-end"></Nav>
              <Nav className="me-auto">
                  <Nav.Link href="#"><Link to={ROUTES.HOME}>{ROUTE_LABELS.HOME}</Link></Nav.Link>
                  <Nav.Link href="#"><Link to={ROUTES.PASSES}>{ROUTE_LABELS.PASSES}</Link></Nav.Link>
              </Nav>
          </Navbar.Collapse>
      </Container>
  </Navbar>
);

export default PassNav