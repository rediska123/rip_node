import { FC } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { ROUTES, ROUTE_LABELS } from "./../Routes";
import { api } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/AuthSlice';
import './PassNav.css'; // Добавьте импорт CSS файла

const PassNav: FC = () => {
  const current_user = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    console.log("LOGOUT!")
    const { request } = await api.logout.logoutCreate();
    if (request.status == 200) {
      dispatch(logout());
      console.log(current_user)
      navigate(`${ROUTES.PASSES}`);
    }
  };

  const handleCart = async () => {
    navigate(`${ROUTES.CURRENTCARD}`);
  };

  return (
    <>
      <Navbar key="md" expand="md" className='mb-3 pass-navigation'>
        <Container>
          <Navbar.Brand href="/"><Link to={ROUTES.HOME || ""}>ООО ПродажаБилетов</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="justify-content-end">
              <Nav.Link><Link to={ROUTES.HOME || ""}>{ROUTE_LABELS.HOME}</Link></Nav.Link>
              <Nav.Link><Link to={ROUTES.PASSES || ""}>{ROUTE_LABELS.PASSES}</Link></Nav.Link>
              {current_user.isAuthenticated ? (
                <>
                  <Nav.Link><Link to={ROUTES.PROFILE || ""}>{current_user.user?.username}</Link></Nav.Link>
                  <Nav.Link onClick={handleLogout}><Link to={""}>{"Выйти"}</Link></Nav.Link>
                  <Nav.Link><Link to={ROUTES.CLIENTCARDS || ""}>{ROUTE_LABELS.CLIENTCARDS}</Link></Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link><Link to={ROUTES.LOGIN || ""}>{ROUTE_LABELS.LOGIN}</Link></Nav.Link>
                  <Nav.Link><Link to={ROUTES.REGISTRATION || ""}>{ROUTE_LABELS.REGISTRATION}</Link></Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {current_user.clientcard_count != -1 ?  (<Button onClick={handleCart}>Корзина {current_user.clientcard_count}</Button>) : current_user.user != null ? (<Button className="btn btn-secondary">Корзина</Button>) : null}
    </>
  );
};

export default PassNav;
