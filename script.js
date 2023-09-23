document.addEventListener('DOMContentLoaded', function() {
    let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Nirvana', 'Pink Floyd'];

    // Function to remove articles from the beginning of band names
    function removeArticle(name) {
        return name.replace(/^(a |an |the )/i, '');
    }

    // Sorting the band names without articles
    bandNames.sort(function(a, b) {
        return removeArticle(a).localeCompare(removeArticle(b));
    });

    // Getting the ul element with id 'band'
    let bandList = document.getElementById('band');

    // Populating the ul element with sorted band names
    for (let i = 0; i < bandNames.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = bandNames[i];
        bandList.appendChild(listItem);
    }
});
