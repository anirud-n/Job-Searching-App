import Cookies from 'js-cookie'
import {Component} from 'react'
import {withRouter} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorText: '',
  }

  verifyCredencials = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 2})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({
        errorText: data.error_msg,
      })
    }
  }

  updateUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  updatePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  render() {
    const {username, password, errorText} = this.state
    return (
      <div className="login-cont">
        <form className="form-cont" onSubmit={this.verifyCredencials}>
          <div className="image-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
              className="logo-img"
            />
          </div>
          <div>
            <label htmlFor="username" className="label-text">
              USERNAME
            </label>
            <br />
            <input
              type="text"
              id="username"
              className="test-input"
              placeholder="Username"
              value={username}
              onChange={this.updateUsername}
            />
          </div>
          <div>
            <label htmlFor="password" className="label-text">
              PASSWORD
            </label>
            <br />
            <input
              type="text"
              id="password"
              className="test-input"
              placeholder="Password"
              value={password}
              onChange={this.updatePassword}
            />
          </div>
          <div>
            <div>
              <button className="login-button" type="submit">
                Login
              </button>
            </div>
            <div>
              <p className="error-text">{errorText}</p>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(LoginForm)
