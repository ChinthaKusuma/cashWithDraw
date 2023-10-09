// Write your code here
import './index.css'

const DenominationItem = props => {
  const {item, onChange2} = props
  const {value} = item

  const onChange1 = () => {
    onChange2(value)
  }

  return (
    <li className="li1">
      <button className="btn1" type="button" onClick={onChange1}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
