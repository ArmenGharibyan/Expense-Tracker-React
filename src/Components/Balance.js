import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


const Balance = () => {
const {transactions} = useContext(GlobalContext)

const amounts = transactions.map(transaction => transaction.amount);

const total = amounts.reduce((acc,item)=>{
    console.log(acc,item);
    return acc+=item
}, 0).toFixed(2)
console.log(total);
// const total = amounts.

  return (
    <div>
        <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </div>
  )
}

export default Balance
