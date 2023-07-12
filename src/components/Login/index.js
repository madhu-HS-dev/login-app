// Write your code here
import './index.css'

const Login = props => {
  const {onClick} = props
  return (
    <button className="login-button" type="button" onClick={onClick}>
      Login
    </button>
  )
}

export default Login
