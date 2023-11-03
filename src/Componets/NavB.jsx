import React, { useState } from 'react'
import './NavB.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Men from './Men/Men';
import Women from './Women/Women';
import Kids from './Kids/Kids';
import HomeLiving from './HomeLiving/HomeLiving';
import Beauty from './Beauty/Beauty'

import Login from './Login/Login';

import { Routes,Route ,NavLink} from 'react-router-dom'

import logo from './logo.png'
import './NavHover.css'
import Studio from './Studio/Studio';
import StudioMain from './Studio/StudioMain';

import WishList from './WishList/WishList'

import Bag from './Bag/Bag';

import NavHover from './NavHover'

import StudioNav from './Studio/StudioNav'



const NavB = () => {
 
 

  // ---MEN 11111------------MEN 11111----------------MEN 11111------------------

  const[men,setmen]=useState('')

  const menEnter=()=>{
      
      setmen('block')
      // setwomen('none')
  }

  const menLeave =()=>{
    setmen('block')
  }


  //---WOMEN222222222--------------WOMEN222222222---------WOMEN222222222-----------------

  // const[women,setwomen]=useState('')

  // const womenEnter=()=>{
      
  //     setmen('none')
  //     setwomen('block')
  // }


  const navLeave = ()=>{
    setmen('none')
  }



  return (
   
    <div>




       <Navbar   expand="lg" className="navBorder" style={{width:'100%',}}>
      <Container fluid>
        <Navbar.Brand href="#"><img className='imglogo' src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0  "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
          <div className='dropdown Men1' >
          <NavLink  className="Men dropbtna" to='/'>MEN</NavLink>
          <div className="dropdown-content">
          <NavHover color=' rgb(254, 5, 5)' margi='-1%' ></NavHover>
          </div>
          </div>

          <div className='dropdown Men1' >
          <NavLink className='Women' to='Women'  >WOMEN</NavLink>
          <div className="dropdown-content">
          <NavHover color='rgb(255, 11, 93)'  margi='-3%'></NavHover>
          </div>
          </div>

          <div className='dropdown Men1' >
          <NavLink className='Kids' to='Kids'>KIDS</NavLink>
          <div className="dropdown-content">
          <NavHover color='rgb(211, 139, 5)' margi='-9%' ></NavHover>
          </div>
          </div>

          <div className='dropdown Men1' >
          <NavLink className='Home' to='HomeLiving'>HOME&LIVING</NavLink>
          <div className="dropdown-content">
          <NavHover color='rgb(99, 159, 3)' margi='-13%' ></NavHover>
          </div>
          </div>

          <div className='dropdown Men1' >
          <NavLink className='Beauty' to='Beauty'>BEAUTY</NavLink>
          <div className="dropdown-content">
          <NavHover color='rgb(0, 179, 255)' margi='-22%' ></NavHover>
          </div>
          </div>

          <div className='dropdown studio1' >
          <NavLink className='Studio' to="StudioMain">STUDIO</NavLink>
          <div className="dropdown-content">
          <StudioNav></StudioNav>
          </div>
          </div>
          
          
           
            
            
            
           
            
        
            
            
            
            
            <Form className="d-flex sreach">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <div className='poLoBg'>

          <NavLink href="#action2" >
            <svg className='prlobg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
            </svg>
          </NavLink>
          <NavLink to='WishList'>
            <svg className='prlobg' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
          </NavLink>
            <NavLink to='Bag'>
            <svg className='prlobg' xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="black" class="bi bi-handbag" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"/>
            </svg>
            </NavLink>
            
          </div>

          </Nav>
          
         
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
    <div style={{}}></div>



   
   
    {/* <NavHover change={women} changeColor={'green'}  red={'green'} itemName1={itemName1} itemName2={itemName2} itemName3={itemName3} itemName4={itemName4} itemName5={itemName5} ></NavHover> */}
   


    <Routes>
    <Route  path='Login' element={<Login/>} />
  <Route  path='/' element={<Men/>} />
  <Route path='Women' element={<Women/>} />
  <Route path='Kids' element={<Kids/>} />
  <Route path='HomeLiving' element={<HomeLiving/>} />
  <Route path='Beauty' element={<Beauty/>} />
  <Route path='StudioMain' element={<StudioMain/>} />
  <Route path='WishList' element={<WishList/>} />
  <Route path='Bag' element={<Bag/>} />
  
    </Routes>

    
  
    </div>
  )
}

export default NavB;

