// Warrior = 0, Paladin = 1, Hunter = 2, Rogue = 3, Priest = 4, DeathKnight = 5, Shaman = 6, Mage = 7, Warlock = 8, Monk = 9, Druid = 10, Demon Hunter = 11

const endpoint = 'https://us.api.battle.net/wow/guild/Mal\'Ganis/step%20dad?fields=members&locale=en_US&apikey=c6ksxd9aqueqjtt3m4kxfkgett9k44m2';

var wowClasses = document.getElementsByClassName("wowClass");
var wowClassesRoster = document.getElementsByClassName("wowClassRoster");

var info = [];


fetch(endpoint).then(function(blob) {       // first promise that is returned from the .then method, the data has no idea what kind of data it is.
    blob.json().then(function(data) {        // second promise that is returned from the .then method, now i convert the data to json.

        info = data.members;
    });
});

var wowClassesArr = [
    [], // warriors
    [], // paladins
    [], // hunters
    [], // rogues
    [], // priests
    [], // deathknights
    [], // shamans
    [], // mages
    [], // warlocks
    [], // monks
    [], // druids
    [] // demonhunters
];

for ( var i = 0; i < wowClasses.length; i++) {
    wowClasses[i].addEventListener("click", assignClass, false);
}

function assignClass(e) {
    var target = e.target;

    for (var i = 0; i < 12; i++) {
        if(e.target === wowClasses[i]) {
            wowObj[i]();
        }
    }
}

var wowObj = [

    function () {
        info.filter(function(char) {
            if(char.character.class === 1 && !wowClassesArr[0].includes(char.character.name)) { 
                wowClassesArr[0].push(char.character.name);
            }
            wowClassesArr[0].sort(function(a,b) {
                if(a > b) {
                    return 1;
                } else {
                    return -1;
                }
            });
            wowClassesRoster[0].innerHTML = wowClassesArr[0].join(', ');
            wowClassesRoster[0].style.color = '#c79c63';
        });
    },

    function () {
        info.filter(function(char) {
            if(char.character.class === 2 && !wowClassesArr[1].includes(char.character.name)) { 
                wowClassesArr[1].push(char.character.name);
            }
            wowClassesArr[1].sort(function(a,b) {
                if(a > b) {
                    return 1;
                } else {
                    return -1;
                }
            });
            wowClassesRoster[1].innerHTML = wowClassesArr[1].join(', ');
            wowClassesRoster[1].style.color = '#f58cba';
        });
    },


     function() {
        info.filter(function(char) {
            if(char.character.class == 3 && !wowClassesArr[2].includes(char.character.name)) { 
                wowClassesArr[2].push(char.character.name);
            }
            wowClassesArr[2].sort(function(a,b) {
                if(a > b) {
                    return 1;
                } else {
                    return -1;
                }
            });
            wowClassesRoster[2].innerHTML = wowClassesArr[2].join(', ');
            wowClassesRoster[2].style.color = '#abd473';
        });
    },

 
    function() {
        info.filter(function(char) {
            if(char.character.class == 4 && !wowClassesArr[3].includes(char.character.name)) { 
                wowClassesArr[3].push(char.character.name);
            }
            wowClassesArr[3].sort(function(a,b) {
                if(a > b) {
                    return 1;
                } else {
                    return -1;
                }
            });
            wowClassesRoster[3].innerHTML = wowClassesArr[3].join(', ');
            wowClassesRoster[3].style.color = '#fff569';
        });
    },

    function() {
        info.filter(function(char) {
            if(char.character.class == 5 && !wowClassesArr[4].includes(char.character.name)) { 
                wowClassesArr[4].push(char.character.name);
            }
            wowClassesArr[4].sort(function(a,b) {
                if(a > b) {
                    return 1;
                } else {
                    return -1;
                }
            });
            wowClassesRoster[4].innerHTML = wowClassesArr[4].join(', ');
            wowClassesRoster[4].style.color = '#ffffff';
        });
    },

    function() {
        info.filter(function(char) {
            if(char.character.class == 6 && !wowClassesArr[5].includes(char.character.name)) { 
                wowClassesArr[5].push(char.character.name);
            }
            wowClassesArr[5].sort(function(a,b) {
                if(a > b) {
                    return 1;
                } else {
                    return -1;
                }
            });
            wowClassesRoster[5].innerHTML = wowClassesArr[5].join(', ');
            wowClassesRoster[5].style.color = '#c41f3b';
        });
    },

    function() {
        info.filter(function(char) {
            if(char.character.class == 7 && !wowClassesArr[6].includes(char.character.name)) { 
                wowClassesArr[6].push(char.character.name);
            }
            wowClassesArr[6].sort(function(a,b) {
                if(a > b) {
                    return 1;
                } else {
                    return -1;
                }
            });
            wowClassesRoster[6].innerHTML = wowClassesArr[6].join(', ');
            wowClassesRoster[6].style.color = '#0070d3';
        });
    },

    function() {
        info.filter(function(char) {
            if(char.character.class == 8 && !wowClassesArr[7].includes(char.character.name)) { 
                wowClassesArr[7].push(char.character.name);
            }
            wowClassesArr[7].sort(function(a,b) {
                if(a > b) {
                    return 1;
                } else {
                    return -1;
                }
            });
            wowClassesRoster[7].innerHTML = wowClassesArr[7].join(', ');
            wowClassesRoster[7].style.color = '#69ccf0';
        });
    },

    function() {
        info.filter(function(char) {
            if(char.character.class == 9 && !wowClassesArr[8].includes(char.character.name)) { 
                wowClassesArr[8].push(char.character.name);
            }
            wowClassesArr[8].sort(function(a,b) {
                if(a > b) {
                    return 1;
                } else {
                    return -1;
                }
            });
            wowClassesRoster[8].innerHTML = wowClassesArr[8].join(', ');
            wowClassesRoster[8].style.color = '#9482c9';
        });
    },

    function() {
        info.filter(function(char) {
            if(char.character.class == 10 && !wowClassesArr[9].includes(char.character.name)) { 
                wowClassesArr[9].push(char.character.name);
            }
            wowClassesArr[9].sort(function(a,b) {
                if(a > b) {
                    return 1;
                } else {
                    return -1;
                }
            });
            wowClassesRoster[9].innerHTML = wowClassesArr[9].join(', ');
            wowClassesRoster[9].style.color = '#00ff96';
        });
    },

    function() {
        info.filter(function(char) {
            if(char.character.class == 11 && !wowClassesArr[10].includes(char.character.name)) { 
                wowClassesArr[10].push(char.character.name);
            }
            wowClassesArr[10].sort(function(a,b) {
                if(a > b) {
                    return 1;
                } else {
                    return -1;
                }
            });
            wowClassesRoster[10].innerHTML = wowClassesArr[10].join(', ');
            wowClassesRoster[10].style.color = '#ff7d0a';
        });
    },

    function() {
        info.filter(function(char) {
            if(char.character.class == 12 && !wowClassesArr[11].includes(char.character.name)) { 
                wowClassesArr[11].push(char.character.name);
            }
            wowClassesArr[11].sort(function(a,b) {
                if(a > b) {
                    return 1;
                } else {
                    return -1;
                }
            });
            wowClassesRoster[11].innerHTML = wowClassesArr[11].join(', ');
            wowClassesRoster[11].style.color = '#a330c9';
        });
    }
];