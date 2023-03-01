const picture = document.getElementById('pic');
const name1 = document.getElementById('name');
const title1 = document.getElementById('title');
const family1 = document.getElementById('family');

const getUrl = new URLSearchParams(window.location.search);
var id = getUrl.get('id')

//redireccionar en el caso de que se introduzca un id inválido
if (id == "" || id <0){
   location.href ='character.html?id=0';
}

if (id >52){
   location.href ='character.html?id=52';
}

const url = 'https://thronesapi.com/api/v2/Characters'

fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
   .then(res => res.json())
   .then(data => {

      var image = document.createElement('img');
      image.src = data.imageUrl;
      picture.appendChild(image);  
      
      var fullName = document.createElement('p')
      fullName.innerHTML = data.fullName
      name1.appendChild(fullName);

      var title= document.createElement('p')
      title.innerHTML = data.title
      title1.appendChild(title);

      var family= document.createElement('p')
      family.innerHTML = data.family
      family1.appendChild(family);
  })
  .catch(err => console.log(err))
  .finally(()=>{
   document.body.style.backgroundImage = "url('../img/background.jpg')"
 })


//botones
  function prev(){
   id--
   location.href =`character.html?id=${id}`;
  }

  function next(){
   id++
   location.href =`character.html?id=${id}`;
  }