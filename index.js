/*
fetch('https://rickandmortyapi.com/api/character/')
  .then(response => response.json())
  .then(characters => showCharacters(characters.results));

showCharacters = characters => {
  const charactersDiv = document.querySelector('#brands');
  characters.forEach(character => {
    const characterElement = document.createElement('p');
    characterElement.innerText = `Character Name: ${character.gender}`;
    charactersDiv.append(characterElement);
  });
}
fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log('error: ' + err);
  });
function appendData(data) {
  var mainContainer = document.getElementById("brands");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("p");
    div.innerHTML = data[i].name + ' ';
    mainContainer.appendChild(div);
  }
}
*/
