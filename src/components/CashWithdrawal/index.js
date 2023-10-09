// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {value1: 2000}

  onChange2 = value => {
    this.setState(prevState => ({
      value1: prevState.value1 - parseInt(value),
    }))
  }

  render() {
    const {denominationsList} = this.props

    const {value1} = this.state

    return (
      <div className="bgContainer">
        <div className="bgContainer1">
          <div className="one">
            <div className="profile">
              <h1 className="heading2">S</h1>
            </div>
            <h1 className="heading1">Sarah Williams</h1>
          </div>
          <div className="two">
            <p className="heading">Your Balance</p>
            <div className="two1">
              <p className="heading1">{value1}</p>
              <p className="heading">In Rupees</p>
            </div>
          </div>
          <div className="three">
            <p className="heading1">Withdraw</p>
            <p className="heading">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="four">
            {denominationsList.map(each => (
              <DenominationItem
                onChange2={this.onChange2}
                item={each}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
