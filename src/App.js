import Header from "./Components/Header"

import './App.css'
import Balance from "./Components/Balance"
import IncomeExpenses from "./Components/IncomeExpenses"
import TransactionList from "./Components/TransactionList"
import AppTransaction from "./Components/AppTransaction"
import { GlobalProvider } from "./context/GlobalState"

const App = ()=>{

  return(
   
      <GlobalProvider>
      <Header/>
      <div className="container">
<Balance/>
<IncomeExpenses/>
<TransactionList/>
<AppTransaction/>
      </div>
      </GlobalProvider>
    
  )
}
export default App