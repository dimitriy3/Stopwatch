const doc = document

let x
let startstop = 0

function startStop() {
  startstop = startstop + 1

  if (startstop === 1) {
    start()
    doc.getElementById("start").innerHTML = 'pause'
  } else if (startstop === 2) {
    doc.getElementById("start").innerHTML = 'play_arrow'
    startstop = 0
    stop()
  }
}

function start() {
  x = setInterval(timer, 10)
} /* Start */

function stop() {
  clearInterval(x)
} /* Stop */

let milisec = 0
let sec = 0
let min = 0
let hour = 0

let miliSecOut = 0
let secOut = 0
let minOut = 0
let hourOut = 0

function timer() {
  miliSecOut = checkTime(milisec)
  secOut = checkTime(sec)
  minOut = checkTime(min)
  hourOut = checkTime(hour)

  milisec = ++milisec

  if (milisec === 100) {
    milisec = 0
    sec = ++sec
  }

  if (sec == 60) {
    min = ++min
    sec = 0
  }

  doc.getElementById("milisec").innerHTML = miliSecOut
  doc.getElementById("sec").innerHTML = secOut
  doc.getElementById("min").innerHTML = minOut
}

function checkTime(i) {
  if (i < 10) {
    i = '0' + i
  }

  return i
}

function reset() {
  milisec = 0
  sec = 0
  min = 0

  doc.getElementById('milisec').innerHTML = '0'
  doc.getElementById('sec').innerHTML = '0'
  doc.getElementById('min').innerHTML = '0'
}

function switchTheme() {
  doc.body.classList.toggle('dark')
}