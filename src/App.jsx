import './App.css';
import {Timer} from './components/timer';
import {Buttons} from './components/buttons';
import {ResultList} from './components/resultList';
import { useEffect, useState } from 'react';


function App() {

  const getListFromStorage = () => {
    if(localStorage.getItem('list')) return localStorage.getItem('list').split(',')
    else return []
  }

  const getLastFromList = () => {
    if (getListFromStorage() && getListFromStorage().length > 0){
      let h =''
      let m =''
      let s =''
      let ms =''
      const index = (getListFromStorage().length) - 1
      let lastValue =  getListFromStorage()[index]
      lastValue = lastValue.split(':')
      h = lastValue[0]
      if(h.length === 1) h = '0' + h
      m = lastValue[1]
      if(m.length === 1) m = '0' + m
      s = lastValue[2]
      if(s.length === 1) s = '0' + s
      ms = lastValue[3]
      if(ms.length === 1) ms = '0' + ms
      return [h, m , s, ms]
    } else return ['00', '00', '00', '00']
  }

  const isShownStartButton = () => {
    if(localStorage.getItem('start')) setIsStartShown(false)
  }

  useEffect(()=>{isShownStartButton()}, [])

  const [timerId, setTimerId] = useState(0)
  const [msms, setMsms] = useState(getLastFromList()[3])
  const [ss, setSs] = useState(getLastFromList()[2])
  const [mm, setMm] = useState(getLastFromList()[1])
  const [hh, setHh] = useState(getLastFromList()[0])
  const [isStartShown, setIsStartShown] = useState(true)
  const [isRunning, setIsRunning] = useState(false)
  const [laps, setLaps] = useState(getListFromStorage())
  const [tiemCondition, setTimeCondition] = useState(Number(localStorage.getItem('timer')))
  return (
    <div className="App" id="root">
      <Timer msms={msms} ss={ss} mm={mm} hh={hh}/>
      <Buttons timerId={timerId} setTimerId={setTimerId} setMsms={setMsms} setSs={setSs} setMm={setMm} setHh={setHh} isStartShown={isStartShown} setIsStartShown={setIsStartShown} isRunning={isRunning} setIsRunning={setIsRunning} laps={laps} setLaps={setLaps} msms={msms} ss={ss} mm={mm} hh={hh} tiemCondition={tiemCondition} setTimeCondition={setTimeCondition}/>
      <ResultList laps={laps} hh={hh} mm={mm} ss={ss} msms={msms}/>
    </div>
  );
}

export default App;
