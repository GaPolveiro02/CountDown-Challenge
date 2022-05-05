let days = 2
let time = days * 86400
console.log(time)

updateCountdown = () => {
    let day = Math.floor((time / 3600) / 24)

    let hr = Math.floor(time / 3600)  
    
    let min =  Math.floor((time / 60) % 60)
    
    let sec = time % 60
    console.log(`DIAS:${days} HR:${hr} MIN:${min} SEC:${sec}`)
    
    time--

    showCount(day,hr,min,sec)
}

showCount = (day,hr,min,sec) => {
    let count = document.querySelector("#counter")

    count.innerHTML = `${day} : ${hr} : ${min} : ${sec}`
}

setInterval(updateCountdown, 1000)