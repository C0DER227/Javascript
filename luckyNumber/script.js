
const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    const randnumber = () => {
        let randnum = Math.floor(Math.random() * 999+1)
        return randnum
    }
    let a = randnumber()
    if (a > 777) {
        alert("Number Exceeds as ur greed!!", randnumber(a))
    } else if (a == 777 && a==999 && a==0) {
        console.log("Jackpot Hurray", randnumber(a))
    } else if (a < 777) {
        alert('Minimal Range!!!', randnumber(a))
    } else {
        alert('Try Again!!!!', randnumber(a))
    }
    document.getElementById('container1').innerText=`Number:${a}`
})
