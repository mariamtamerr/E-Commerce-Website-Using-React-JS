
import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import './CustomNavbar.css'; 
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { faGlobe , faCircleHalfStroke} from '@fortawesome/free-solid-svg-icons'
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { ThemeContext } from "./context/ThemeContext"; // Import ThemeProvider
import { LanguageContext } from "./context/LanguageContext"; // Import ThemeProvider


function CustomNavbar() {



  // -------------------
  const counter = useSelector((state) => state.cart.counter)
  const { contextLang, setContextLang } = useContext(LanguageContext)
    const { contextTheme, setContextTheme } = useContext(ThemeContext)

    const changeLang = (e) => {
        if (contextLang == 'en') setContextLang('ar')
        else setContextLang('en')
    }

    const changeTheme = (e) => {
        if (contextTheme == 'light') setContextTheme('dark')
        else setContextTheme('light')
    }

return (
    <>
 
   <Navbar expand="lg" className="navbar bg-body-tertiary" style={{ padding: '0.5% 5%' }}>
        <Container className="container-fluid d-flex justify-content-between">
        <Navbar.Brand>Products</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navy">
          {/* <Link to="/" className='nav-link' >Products</Link>
        <Link to="/register" className='nav-link' >Register</Link>
        <Link to="/login" className='nav-link' >Login</Link> */}

        {/* ----------------------------------- */}
        {/* <NavLink exact to="/" className='nav-link' activeClassName='active-link'>
              Products
            </NavLink>
            <NavLink to="/register" className='nav-link' activeClassName='active-link'>
              Register
            </NavLink>
            <NavLink to="/login" className='nav-link' activeClassName='active-link'>
              Login
            </NavLink> */}

            {/* ---------------------------------------- */}
            {/* <Nav className={contextLanguage == "EN" ? "ms-auto" : "me-auto"}></Nav> */}
            <NavLink className='navigations nav-link il' style={({isActive}) => {return {fontWeight: isActive ? "bold" : "",color: isActive ? "red" : "black"};}} to='/'>Products</NavLink>
            <NavLink className='navigations nav-link il' style={({isActive}) => {return {fontWeight: isActive ? "bold" : "",color: isActive ? "red" : "black"};}} to='/register'>Register</NavLink>
              <NavLink className='navigations nav-link il' style={({isActive}) => {return {fontWeight: isActive ? "bold" : "",color: isActive ? "red" : "black"};}} to='/login'>Login</NavLink>
              {/* <NavLink className='navigations nav-link il' style={({isActive}) => {return {fontWeight: isActive ? "bold" : "",color: isActive ? "green" : "black"};}} to='/cart'><FontAwesomeIcon icon={faCartShopping} /> </NavLink> */}
        

          </Nav>

          {/* <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className='ms-2'>
                {contextLang}
                
              </Dropdown.Toggle>

              <Dropdown.Menu className='ms-2'>
                <Dropdown.Item onClick={() => setContextLang("ar")}>AR</Dropdown.Item>
                <Dropdown.Item onClick={() => setContextLang("en")}>EN</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
            {/* --------------------------------- */}



  {/* // contextLang == "en"? <FontAwesomeIcon icon={faGlobe} className='ms-2'  onClick={() => setContextLang("ar")}/> : <FontAwesomeIcon icon={faCircleHalfStroke} className='ms-2' onClick={() => setContextLang("en")}/> */}


   
            <NavLink className="nav-link active mx-2 fw-semibold" onClick={changeLang}>
                        <FontAwesomeIcon icon={faGlobe} style={{ color: "#000000", }} className='mx-1' />
                        {contextLang}</NavLink>
                    <NavLink className="nav-link active mx-2 fw-semibold" onClick={changeTheme}>
                        <FontAwesomeIcon icon={faCircleHalfStroke} style={{color: "#000000",}} />
                    </NavLink>


        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
)

}


export default CustomNavbar; 


// ----------------------------------------------