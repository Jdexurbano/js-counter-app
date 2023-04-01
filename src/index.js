let countScreen = document.getElementById("count-screen")
let count = 0

function add(){
    count += 1
    countScreen.textContent = count
}

function minus(){
    if (count != 0) {
        count -= 1
        countScreen.textContent = count
    } else {
        
    }
}

function reset(){
    count = 0
    countScreen.textContent = count
}