import { Link, useNavigate } from 'react-router-dom'
import "../App.css";

function Nav() {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate()

  const logout=()=>{
    localStorage.clear();
    navigate('/signup')
  }
  
  return (
    <div>
        {auth ? <ul className='nav-ui'>
            <li><Link to="/">Hello</Link></li>
            <li> <Link to="/profile">Profile</Link></li>
            <li><Link to="/signup" onClick={logout}>Logout ({ JSON.parse(auth).name})</Link></li>
            </ul>:
        <ul className='nav-ui nav-right'>
          <li><Link to="/signup">Sign Up</Link></li>
           <li><Link to="/login">login</Link></li>
        </ul>
}
    </div>
  )
}

export default Nav