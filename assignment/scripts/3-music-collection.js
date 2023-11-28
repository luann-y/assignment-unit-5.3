console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) { //collection is where album pushed
    let newAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };
    collection.push(newAlbum);
    return newAlbum;
}

let absolution = addToCollection(myCollection, 'Absolution', 'Muse', 2003);
let blackHolesAndRevelations = addToCollection(myCollection, 'Black Holes & Revelations', 'Muse', 2006);
let souvlaki = addToCollection(myCollection, 'Souvlaki', 'Slowdive', 1994);
let saturdaysYouth = addToCollection(myCollection, 'Saturdays = Youth', 'M83', 2008);
let afterTheWar = addToCollection(myCollection, 'In Our Bedroom After The War', 'Stars', 2007);
let nighttiming = addToCollection(myCollection, 'Nighttiming', 'Coconut Records', 2007);
let strangestThings = addToCollection(myCollection, 'Strangest Things', 'Longwave', 2003);
let theBends = addToCollection(myCollection, 'The Bends', 'Radiohead', 1995);


console.log(absolution);
console.log(blackHolesAndRevelations);
console.log(souvlaki);
console.log(saturdaysYouth);
console.log(nighttiming);
console.log(strangestThings);
console.log(theBends);
console.log(myCollection);


function showCollection(collection) {
  for (let album of collection) {
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}.`);
  }
}

showCollection(myCollection);



function findByArtist(collection, artist) {
  let matchingResults = [];
  for (let album of collection) {
    if (album.artist === artist) {
      matchingResults.push(album);
    }
  }
  return matchingResults;
}

console.log(`'Find 'Muse'`);
let museAlbums = findByArtist(myCollection, 'Muse');
showCollection(museAlbums);



// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
