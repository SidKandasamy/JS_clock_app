setInterval(setClock, 1000) //this function is called every 1 second

//targetting each hand using data attributes

const hourHand = document.querySelector('[data-hour-hand]');
const hourMinute = document.querySelector('[data-minute-hand]');
const hourSecond = document.querySelector('[data-second-hand]');



//https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll

function setClock() {
    const currentDate = new Date(); //this gives you the current date including time
    const seconds = currentDate.getSeconds() / 60 // get seconds from the current date, we / by 60 to know how far to rotate seconds hand
    const minutes = (seconds + currentDate.getMinutes()) / 60 //seconds is a % of the minute
    const hours = (minutes + currentDate.getHours()) / 12 // 12 hours on the clock not 60
    setRotation(hourSecond, seconds)
    setRotation(hourMinute, minutes)
    setRotation(hourHand, hours)
}
//creating a function which uses the targeting hands

function setRotation (element, rotationRatio){ //this sets the element we want to target and the ratio
    element.style.setProperty('--rotate', rotationRatio * 360) //finds element, sets property to the --rotate which is in our CSS
}