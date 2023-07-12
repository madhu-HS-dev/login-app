// Write your code here
import {Component} from 'react'

import './index.css'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLoggedIn: false}

  changeStatus = () => {
    const {isLoggedIn} = this.state

    if (isLoggedIn === true) {
      this.setState({isLoggedIn: false})
    } else {
      this.setState({isLoggedIn: true})
    }
  }

  render() {
    const {isLoggedIn} = this.state

    let messageEl
    let btnElement

    if (isLoggedIn === true) {
      messageEl = <Message content="Welcome User" />
      btnElement = <Logout onClick={this.changeStatus} />
    } else {
      messageEl = <Message content="Please Login" />
      btnElement = <Login onClick={this.changeStatus} />
    }

    return (
      <div className="home-container">
        <div className="card-container">
          {messageEl}
          {btnElement}
        </div>
      </div>
    )
  }
}

export default Home
