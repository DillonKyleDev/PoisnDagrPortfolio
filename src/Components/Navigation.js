import React from 'react'
import { NavLink } from "react-router-dom";
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './css/navigation.css'
import BrandImage from './assets/brand/VillianCAtestBrand.png'

function Navigation(props) {
  const { loggedIn } = props;

  return (
    <div>
      <Navbar bg="dark" variant='dark' expand="md" className="fixed-top navigation-bar">
        <Container  className='d-flex justify-content-between'>
          <div className='brand-div'>
            <Navbar.Brand>
              <Link to='/' className='navbar-brand'>
                <img 
                src={BrandImage}
                alt="Brand"
                width="30px"
                height="30px"
                />{' '}
                PoisnDagr
              </Link>
            </Navbar.Brand>
            <div>

            </div>
          </div>

          { !loggedIn ? 
            <div className='align-right'>
              <Navbar.Toggle aria-controls="hamburger_menu" className="ml-auto"/>
              <Navbar.Collapse id="hamburger_menu">
                <NavLink to="/" className="violet-text text-end navPadR navPadL link" >
                  Main Gallery
                </NavLink>
                <NavLink to="/18plusgallery" className="violet-text text-end navPadR navPadL link">
                  18+ Gallery
                </NavLink>
                {/* <NavLink to="/contactcommission" className="violet-text text-end navPadR navPadL link">
                  Contact / Commission
                </NavLink> */}
              </Navbar.Collapse>
            </div>
          :
            <div className='align-right'>
                <NavLink to="/" className="btn dark-violet-button" id="fix-navlink-style">
                  Logout
                </NavLink>
            </div>
          }
        </Container>

      </Navbar>
    </div>
  )
}

export default Navigation
