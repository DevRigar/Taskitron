import {FaSignInAlt,FaSignOutAlt,FaUser} from 'react-icons/fa'
import {Link,useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {logout,reset} from '../features/auth/authSlice'
import logo from '../css/logo.svg';

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate ('/')
  }

  return (
    <header className='header'>
        <div className='logo'>
            <Link to = '/'>
              <img style={{width:100}} src={logo} alt="Taskitron" />
            </Link>
        </div>
        <ul>
          {user ? (
            <li>
              <button className='btn' onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </button>                 
            </li>
            ) : (<>
            <li>
              <Link style={{color:'black'}} to ='/login'>
                  <FaSignInAlt /> Login
              </Link>
          </li>
          <li>
              <Link style={{color:'black'}} to ='/register'>
                  <FaUser /> Register
              </Link>
          </li>
            </>)}
             
        </ul>
    </header>

  )
}

export default Header