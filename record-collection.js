// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
  if ((prop != "tracks") && (value != "")) {
    collection[id][prop] = value
  } else if ( value === "") {
    delete collection[id][prop]
  } else if ((prop === "tracks") && (collection[id][prop] != undefined)) {
    collection[id][prop].push(value)
  } else if ((prop === "tracks") && (collection[id][prop] === undefined)) {
    collection[id]["tracks"] = [];

  }
  return collection; 
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA"); 
updateRecords(5439, "tracks", "Take a Chance on Me");