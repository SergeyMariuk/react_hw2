const parsTime = (current) => {
    let hh = 0;
    let mm = 0;
    let ss = 0;
    let msms = 0;

    msms = current % 1000;
    if(current >= 1000) ss = (current - (current % 1000)) / 1000
    if (ss > 59) ss = ss % 60
    if(current >= 60000) mm = (current - (current % 60000)) / 60000
    if (mm > 59) mm = mm % 60
    if(current >= 3600000) hh = (current - (current % 3600000)) / 3600000
    
    return [hh, mm, ss, msms]
}

const timer = (current) => {
    current = 0
    const counter = setInterval(() => {
        console.log(parsTime(current));
        current += 100;
    },
    100
    );
    setTimeout(() => {
        clearInterval(counter);
    },
    10000
    );
}