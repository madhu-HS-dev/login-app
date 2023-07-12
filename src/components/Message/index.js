// Write your code here
import './index.css'

const Message = props => {
  const {content} = props
  return (
    <div>
      <h1 className="heading">{content}</h1>
    </div>
  )
}

export default Message
