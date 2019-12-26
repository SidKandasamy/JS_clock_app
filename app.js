setInterval(setClock, 1000) //this function is called every 1 second

function setClock() {
    const currentDate = new Date(); //this gives you the current date including time
    const seconds = currentDate.getSeconds() / 60 // get seconds from the current date, we / by 60 to know how far to rotate seconds hand
    const minutes = (seconds + currentDate.getMinutes()) / 60 //seconds is a % of the minute
    const hour = (minutes + currentDate.getHours()) / 12 // 12 hours on the clock not 60
}