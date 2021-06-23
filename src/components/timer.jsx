export const Timer = (props) => {
    return (
      <div className="timer">
        <span className="hh">{props.hh}</span>
        <span>:</span>
        <span className="mm">{props.mm}</span>
        <span>:</span>
        <span className="ss">{props.ss}</span>
        <span>:</span>
        <span className="msms">{props.msms}</span>
      </div>
    )
  }