//http://jsonblob.com/1333424652244148224


// RESULTADO FINAL
fetch('https://jsonblob.com/api/jsonBlob/1333424652244148224')
.then ((res) => res.json())
.then((cartinfo) => console.log(cartinfo));