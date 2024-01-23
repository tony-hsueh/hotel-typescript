import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from "./Button"
import menuIcon from '@assets/menu.svg'
import user from '@assets/profile.svg'
import closeBtn from '@assets/navbar-close.svg'
import './Navbar.css'

const Navbar = () => {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  return (
    <nav className='my-navbar'>
      <img className='logo' src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/logo.png?raw=true" alt="logo" />
      <div className='menu--mobile' onClick={handleShow}>
        <img src={menuIcon} alt="手機選單" />
      </div>
      <ul className='menu'>
        <li>客房旅宿</li>
        <li>
          <img src={user} alt='user-icon' style={{marginRight: '.5rem'}}/>Jessica
        </li>
        <Button 
          onClick={() =>{console.log(222)}}
        >
            立即訂房
        </Button>
      </ul>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Body className='navbar-mobile'>
          <div className='navbar-links--mobile'>
            <Link to='/rooms'>客房旅宿</Link>
            <Link to='/login'>會員登入</Link>
            <Link to='/login'>立即訂房</Link>
          </div>
          <div 
            style={{
              padding: '.5rem',
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
            }}
            onClick={() => { setShow(false) }}
          >
            <img 
              src={closeBtn} 
              alt='close-button' 
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </Modal.Body>
      </Modal>
    </nav>
  )
}

export default Navbar