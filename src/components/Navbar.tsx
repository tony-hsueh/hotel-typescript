import Button from "./Button"
import menuIcon from '@assets/menu.svg'
import user from '@assets/profile.svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img className='logo' src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/logo.png?raw=true" alt="logo" />
      <div className='menu--mobile'>
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
    </nav>
  )
}

export default Navbar