import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Navbar = props => {
  const onClickLogOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="nav-cont">
      <div className="logo-img-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="logo-img"
        />
      </div>

      <ul className="list-cont">
        <li>
          <Link to="/" className="link-text-home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/jobs" className="link-text-about">
            Jobs
          </Link>
        </li>
      </ul>
      <button className="logout-btn" type="button" onClick={onClickLogOut}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(Navbar)
