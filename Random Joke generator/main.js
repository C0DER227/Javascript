jokeDiv=document.getElementById('joke')
btnDiv=document.getElementById('btn')

const fetchJoke=()=>{
    const url='https://official-joke-api.appspot.com/random_joke'
    fetch(url)
    .then((res)=>res.json())
    .then((json)=> document.getElementById('joke').innerText=`Setup:${json.setup},
    Punchline:${json.punchline}`)                                                                      
}

btnDiv.onclick=()=> fetchJoke()