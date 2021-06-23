export const Buttons = (props) => {

  const parsTime = (current) => {
    let hh = 0;
    let mm = 0;
    let ss = 0;
    let msms = 0;

    msms = String(current % 1000).substr(0, 2);
    if(current >= 1000) ss = (current - (current % 1000)) / 1000
    if (ss > 59) ss = ss % 60
    if (String(ss).length === 1 ) ss = '0' + ss
    if(current >= 60000) mm = (current - (current % 60000)) / 60000
    if (mm > 59) mm = mm % 60
    if (String(mm).length === 1 ) mm = '0' + mm
    if(current >= 3600000) hh = (current - (current % 3600000)) / 3600000
    if (String(hh).length === 1 ) hh = '0' + hh
    
    return [hh, mm, ss, msms, current]
}

const timer = (current) => {
  if(!props.isRunning){
    props.setIsRunning(!props.isRunning)
    current = props.tiemCondition
    const counter = setInterval(() => {
      props.setMsms(parsTime(current)[3])
      props.setSs(parsTime(current)[2])
      props.setMm(parsTime(current)[1])
      props.setHh(parsTime(current)[0])
      props.setTimeCondition(parsTime(current)[4])
      current += 10;
  },
  10
  );
  props.setTimerId(counter)
  }
}

const stopTimer = () => {
  if(props.isRunning){
    props.setIsRunning(!props.isRunning)
    if(props.isStartShown){
      props.setIsStartShown(!props.isStartShown)
      localStorage.setItem('start', 1);
    }
    
    setTimeout(() => {
      clearInterval(props.timerId);
    },
    0
    );
    fillResult()
    setCurrentToStorage(props.tiemCondition)
  }
}
      
const resetTimer = () => {
  if(!props.isRunning && !props.isStartShown){
    props.setIsStartShown(!props.isStartShown)
    props.setMsms('00')
    props.setSs('00')
    props.setMm('00')
    props.setHh('00')
    removeStorage()
    props.setTimeCondition(0)
    props.setLaps([])
  }
  
}

const fillResult = () => {
  let tmpArr = props.laps
  tmpArr.push(`${props.hh}:${props.mm}:${props.ss}:${props.msms}`)
  props.setLaps(tmpArr)
  localStorage.setItem('list', tmpArr);
}

const setCurrentToStorage = (value) => {
  localStorage.setItem('timer', value);
}

const removeStorage = () => {
  localStorage.clear();
}

    return (
      <div className="buttons">
        {props.isStartShown && <button className="start" onClick={timer}>Start</button>}
        {!props.isStartShown && <button className="continue" onClick={timer}>Continue</button>}
        <button className="stop" onClick={stopTimer}>Stop</button>
        <button className="reset" onClick={resetTimer}>Reset</button>
      </div>
    )
  }