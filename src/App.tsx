import logo from './logo.svg'
import './App.css'
import TimeTeller from './TimeTeller/TimeTeller'
import { useState } from 'react'
import { Button } from '@material-ui/core'


const App = () => {

  const [dateState, setDateState] = useState(new Date());
  const [pausedState, setPausedState] = useState(false);

  setInterval(() => {
    if (!pausedState) {
      setDateState(new Date())
    }
  }, 1000)


  const toggleTimer = () => {
    setPausedState(!pausedState);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${pausedState ? '' : 'rotating'}`} alt="logo" />
        <TimeTeller date={dateState} />
        <Button variant="contained" onClick={() => toggleTimer()}>{pausedState ? 'Start' : 'Pause'} timer</Button>
      </header>
    </div>
  )

}

export default App
