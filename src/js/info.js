const endpoint = 'https://us.api.battle.net/wow/guild/Mal\'Ganis/step%20dad?fields=members&locale=en_US&apikey=c6ksxd9aqueqjtt3m4kxfkgett9k44m2';

var btnDeathknight = document.getElementById("btnDeathknight");
var btnDemonhunter = document.getElementById("btnDemonhunter");
var btnDruid = document.getElementById("btnDruid");
var btnHunter = document.getElementById("btnHunter");
var btnMage = document.getElementById("btnMage");
var btnMonk = document.getElementById("btnMonk");
var btnPaladin = document.getElementById("btnPaladin");
var btnPriest = document.getElementById("btnPriest");
var btnRogue = document.getElementById("btnRogue");
var btnShaman = document.getElementById("btnShaman");
var btnWarlock = document.getElementById("btnWarlock");
var btnWarrior = document.getElementById("btnWarrior");

var listDeathknight = document.getElementById("updateDeathknight");
var listDemonhunter = document.getElementById("updateDemonhunter");
var listDruid = document.getElementById("updateDruid");
var listHunter = document.getElementById("updateHunter");
var listMage = document.getElementById("updateMage");
var listMonk = document.getElementById("updateMonk");
var listPaladin = document.getElementById("updatePaladin");
var listPriest = document.getElementById("updatePriest");
var listRogue = document.getElementById("updateRogue");
var listShaman = document.getElementById("updateShaman");
var listWarlock = document.getElementById("updateWarlock");
var listWarrior = document.getElementById("updateWarrior");

var info = [];


fetch(endpoint).then(function(blob) {       // first promise that is returned from the .then method, the data has no idea what kind of data it is.
    blob.json().then(function(data) {        // second promise that is returned from the .then method, now i convert the data to json.

        info = data.members;
    });
});

var deathknights = [];
var demonhunters = [];
var druids = [];
var hunters = [];
var mages = [];
var monks = [];
var paladins = [];
var priests = [];
var rogues = [];
var shamans = [];
var warlocks = [];
var warriors = [];

/*

1. Check which class to filter.
2. If expected class && value is not already in array, push to array.
3. Else, throw the value away.
4. Continue looping.

*/


function deathknight () {
    info.filter(function(char) {
        if(char.character.class == 6 && !deathknights.includes(char.character.name)) { // deathknights
            deathknights.push(char.character.name);
        }
        deathknights.sort(function(a,b) {
            if(a > b) {
                return 1;
            } else {
                return -1;
            }
        });
        listDeathknight.innerHTML = deathknights.join(', ');
        listDeathknight.style.color = '#c41f3b';
    });
}


function demonhunter () {
    info.filter(function(char) {
        if(char.character.class == 12 && !demonhunters.includes(char.character.name)) { // demonhunters
            demonhunters.push(char.character.name);
        }
        demonhunters.sort(function(a,b) {
            if(a > b) {
                return 1;
            } else {
                return -1;
            }
        });
        listDemonhunter.innerHTML = demonhunters.join(', ');
        listDemonhunter.style.color = '#a330c9';
    });
}

function druid () {
    info.filter(function(char) {
        if(char.character.class == 11 && !druids.includes(char.character.name)) { // druids
            druids.push(char.character.name);
        }
        druids.sort(function(a,b) {
            if(a > b) {
                return 1;
            } else {
                return -1;
            }
        });
        listDruid.innerHTML = druids.join(', ');
        listDruid.style.color = '#ff7d0a';
    });
}

function hunter () {
    info.filter(function(char) {
        if(char.character.class == 3 && !hunters.includes(char.character.name)) { // hunters
            hunters.push(char.character.name);
        }
        hunters.sort(function(a,b) {
            if(a > b) {
                return 1;
            } else {
                return -1;
            }
        });
        listHunter.innerHTML = hunters.join(', ');
        listHunter.style.color = '#abd473';
    });
}

function mage () {
    info.filter(function(char) {
        if(char.character.class == 8 && !mages.includes(char.character.name)) { // mages
            mages.push(char.character.name);
        }
        mages.sort(function(a,b) {
            if(a > b) {
                return 1;
            } else {
                return -1;
            }
        });
        listMage.innerHTML = mages.join(', ');
        listMage.style.color = '#69ccf0';
    });
}

function monk () {
    info.filter(function(char) {
        if(char.character.class == 10 && !monks.includes(char.character.name)) { // monks
            monks.push(char.character.name);
        }
        monks.sort(function(a,b) {
            if(a > b) {
                return 1;
            } else {
                return -1;
            }
        });
        listMonk.innerHTML = monks.join(', ');
        listMonk.style.color = '#00ff96';
    });
}

function paladin () {
    info.filter(function(char) {
        if(char.character.class == 2 && !paladins.includes(char.character.name)) { // paladins
            paladins.push(char.character.name);
        }
        paladins.sort(function(a,b) {
            if(a > b) {
                return 1;
            } else {
                return -1;
            }
        });
        listPaladin.innerHTML = paladins.join(', ');
        listPaladin.style.color = '#f58cba';
    });
}

function priest () {
    info.filter(function(char) {
        if(char.character.class == 5 && !priests.includes(char.character.name)) { // priests
            priests.push(char.character.name);
        }
        priests.sort(function(a,b) {
            if(a > b) {
                return 1;
            } else {
                return -1;
            }
        });
        listPriest.innerHTML = priests.join(', ');
        listPriest.style.color = '#ffffff';
    });
}

function rogue () {
    info.filter(function(char) {
        if(char.character.class == 4 && !rogues.includes(char.character.name)) { // rogues
            rogues.push(char.character.name);
        }
        rogues.sort(function(a,b) {
            if(a > b) {
                return 1;
            } else {
                return -1;
            }
        });
        listRogue.innerHTML = rogues.join(', ');
        listRogue.style.color = '#fff569';
    });
}

function shaman () {
    info.filter(function(char) {
        if(char.character.class == 7 && !shamans.includes(char.character.name)) { // shamans
            shamans.push(char.character.name);
        }
        shamans.sort(function(a,b) {
            if(a > b) {
                return 1;
            } else {
                return -1;
            }
        });
        listShaman.innerHTML = shamans.join(', ');
        listShaman.style.color = '#0070d3';
    });
}

function warlock () {
    info.filter(function(char) {
        if(char.character.class == 9 && !warlocks.includes(char.character.name)) { // warlocks
            warlocks.push(char.character.name);
        }
        warlocks.sort(function(a,b) {
            if(a > b) {
                return 1;
            } else {
                return -1;
            }
        });
        listWarlock.innerHTML = warlocks.join(', ');
        listWarlock.style.color = '#9482c9';
    });
}



function warrior () {
    info.filter(function(char) {
        if(char.character.class == 1 && !warriors.includes(char.character.name)) { // warriors
            warriors.push(char.character.name);
        }
        warriors.sort(function(a,b) {
            if(a > b) {
                return 1;
            } else {
                return -1;
            }
        });
        listWarrior.innerHTML = warriors.join(', ');
        listWarrior.style.color = '#c79c63';
    });
}


btnDeathknight.addEventListener("click", deathknight, false);
btnDemonhunter.addEventListener("click", demonhunter, false);
btnDruid.addEventListener("click", druid, false);
btnHunter.addEventListener("click", hunter, false);
btnMage.addEventListener("click", mage, false);
btnMonk.addEventListener("click", monk, false);
btnPaladin.addEventListener("click", paladin, false);
btnPriest.addEventListener("click", priest, false);
btnRogue.addEventListener("click", rogue, false);
btnShaman.addEventListener("click", shaman, false);
btnWarlock.addEventListener("click", warlock, false);
btnWarrior.addEventListener("click", warrior, false);


