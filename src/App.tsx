import logo from './logo.svg'
import './App.css'
import TimeTeller from './TimeTeller/TimeTeller'
import { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'


const App = () => {

  const [dateState, setDateState] = useState(new Date());
  const [pausedState, setPausedState] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pausedState) {
        setDateState(new Date())
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  const toggleTimer = () => {
    setPausedState(prevState => !prevState);
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
