import CashWithdrawal from './components/CashWithdrawal'

import './App.css'

const denominationsList = [
  {
    id: 1,
    value: 10,
  },
  {
    id: 2,
    value: 20,
  },
  {
    id: 3,
    value: 50,
  },
  {
    id: 4,
    value: 100,
  },
  {
    id: 5,
    value: 200,
  },
  {
    id: 6,
    value: 500,
  },
  {
    id: 7,
    value: 2000,
  },
]

const App = () => <CashWithdrawal denominationsList={denominationsList} />

export default App