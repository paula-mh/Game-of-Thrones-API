const characters1 = document.getElementById('characters');
const quote1 = document.getElementById('quote');
const author1 = document.getElementById('author');
const btn1 = document.getElementById('btn');


fetch('https://thronesapi.com/api/v2/Characters')
.then(res => res.json())
.then(data => {
  data.forEach(character => {

    var aCharacter = document.createElement('div');
    aCharacter.className = 'aCharacter';
    characters1.appendChild(aCharacter);

    var image = document.createElement('img');
    image.src = character.imageUrl;
    aCharacter.appendChild(image);

    var fullName = document.createElement('div');
    fullName.className = 'fullName';
    fullName.innerHTML = character.fullName;
    aCharacter.appendChild(fullName);

    var input = document.createElement('input');
    input.type = 'button';
    input.value = 'Ver Personaje';
    input.setAttribute('id', character.id);
    input.addEventListener('click', function(){
      window.location.href = `./html/character.html?id=${character.id}`
      //console.log(`id=${character.id}`)
    });
    aCharacter.appendChild(input);
  });
})
  .catch(err => console.log(err))
  .finally(()=>{
    document.body.style.backgroundImage = "url('img/background.jpg')"
  })


  fetch('https://api.gameofthronesquotes.xyz/v1/random')
  .then(res => res.json())
  .then(data => {

    var quote = document.createElement('p')
    quote.innerHTML = data.sentence
    quote1.appendChild(quote);

    var author = document.createElement('p')
    author.innerHTML = data.character.name
    author1.appendChild(author);

    var input = document.createElement('input');
    input.type = 'button';
    input.id = 'otraFrase'
    input.value = 'Generar otra frase';
    input.addEventListener('click', function(){
      
      fetch('https://api.gameofthronesquotes.xyz/v1/random')
      .then(res => res.json())
      .then(data => {
    
        var quote = document.createElement('p')
        quote.innerHTML = data.sentence
        quote1.innerHTML = "";
        quote1.appendChild(quote);
    
        var author = document.createElement('p')
        author.innerHTML = data.character.name
        author1.innerHTML = "";
        author1.appendChild(author);
      })
    });
    btn1.appendChild(input);

  })
  .catch(err => console.log(err))