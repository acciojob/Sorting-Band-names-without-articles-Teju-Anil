//your code here
let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Aerosmith'];

// Define a function to remove articles and return the modified name
function removeArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort the band names without articles
bandNames.sort((a, b) => removeArticle(a).localeCompare(removeArticle(b)));

// Get the ul element with id 'band'
let ulElement = document.getElementById('band');

// Loop through the sorted band names and create li elements
bandNames.forEach(name => {
  let liElement = document.createElement('li');
  liElement.textContent = name;
  ulElement.appendChild(liElement);
});

