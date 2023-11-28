console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
    let newAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };
    collection.push(newAlbum);
    return newAlbum;
}

let absolution = addToCollection(myCollection, 'Muse', 'Absolution', 2003);
let blackHolesAndRevelations = addToCollection(myCollection, 'Muse', 'Black Holes & Revelations', 2006);
let souvlaki = addToCollection(myCollection, 'Slowdive', 'Souvlaki', 1994);
let saturdaysYouth = addToCollection(myCollection, 'M83', 'Saturdays = Youth', 2008);
let afterTheWar = addToCollection(myCollection, 'Stars', 'In Our Bedroom After The War', 2007);
let nighttiming = addToCollection(myCollection, 'Coconut Records', 'Nighttiming', 2007);
let strangestThings = addToCollection(myCollection, 'Longwave', 'Strangest Things', 2003);
let theBends = addToCollection(myCollection, 'Radiohead', 'The Bends', 1995);


console.log(absolution);
console.log(blackHolesAndRevelations);
console.log(souvlaki);
console.log(saturdaysYouth);
console.log(nighttiming);
console.log(strangestThings);
console.log(theBends);
console.log(myCollection);



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
