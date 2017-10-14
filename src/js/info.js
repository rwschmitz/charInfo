/* can use jquery get json */
const endpoint = 'https://us.api.battle.net/wow/guild/Mal\'Ganis/step%20dad?fields=members&locale=en_US&apikey=c6ksxd9aqueqjtt3m4kxfkgett9k44m2';
var btn = document.getElementById("btn");
var list = document.getElementById("updateContent");
let info = [];


fetch(endpoint).then(function(blob) {       // first promise that is returned from the .then method, the data has no idea what kind of data it is.
    blob.json().then(function(data) {        // second promise that is returned from the .then method, now i convert the data to json.

        info = data.members;
    });
});


function blah() {
    info.filter(function(char){
        if(char.character.class == 4) {
            console.log(char.character);
            list = textContent(char.character.class);
        }
    });
}

btn.addEventListener("click", blah, false);


/*
==========================================
MY CODE THAT I TESTED BELOW WORKS
==========================================

crayons = [
    {color: 'red', type: 'warm'},
    {color: 'blue', type: 'cool'},
    {color: 'orange', type: 'warm'},
    {color: 'yellow', type: 'warm'},
    {color: 'black', type: 'neutral'},
    {color: 'white', type: 'neutral'}
]

const coloring = crayons.map(function(fun){
    return fun.type;

})

const test = coloring.filter(function(eh) {
    if(eh == 'warm') {
        return true;
    }
});

*/
