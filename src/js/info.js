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

var names = [];


function test () {
    info.filter(function(char) {
        if(char.character.class == 4) {
            names.push(char.character.name + "<br>");
            list.innerHTML = names.join('');
            list.style.color = "yellow";
        }
    });
}


btn.addEventListener("click", test, false);

