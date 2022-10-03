const dogImageDiv =
  document.getElementById('dogImage')
const dogButton = document.getElementById('Dogbutton')

const GetnewDog =() =>{
fetch('https://dog.ceo/api/breeds/image/random')
  .then(Response => Response.json())
  .then(json => {
    console.log(json.message)
    dogImageDiv.innerHTML = `<img
    src ='${json.message}' height=400 width =400/>`
  })
}
dogButton.onclick = () => GetnewDog()