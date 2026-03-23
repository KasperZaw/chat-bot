import './navbar.scss'
import iconHome from '../../assets/icons/nav-icons/icon-home.svg';
import iconBrowse from '../../assets/icons/nav-icons/icon-browse.svg';
import iconClock from '../../assets/icons/nav-icons/icon-clock.svg';
import logo from '../../assets/icons/logo.svg';
import plus from '../../assets/icons/plus.svg';
import avatar from '../../assets/img/profile-pic.png'

const Navbar = () => {
  return (
    <nav>
      <div className='nav-container'>
          <div className='logo-container'>
            <img src={logo} alt="logo" />
            <div>
                <img src={plus} alt="add" />
            </div>
          </div>
          <div className='icons-container'>
            <img src={iconHome} alt="icon home" />
            <img src={iconClock} alt="icon clock" />
            <img src={iconBrowse} alt="icon browse" />
          </div>
          <img src={avatar} alt="profile pic" />
      </div>
    </nav>
  )
}

export default Navbar
