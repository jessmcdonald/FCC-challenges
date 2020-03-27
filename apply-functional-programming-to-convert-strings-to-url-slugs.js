// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
    return title
        .split(/\W/)
        .filter(item => {
            return item !== ""
        })
        .join("-")
        .toLowerCase()
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing)