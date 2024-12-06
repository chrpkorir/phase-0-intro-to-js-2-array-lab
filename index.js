// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph")
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop("Garfield")
}

function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
}

function appendCat(name){
    cats.pushconcat("Broom")
}
function prependCat(name){
    ["Arnold"].concat(cats)
}
function removeLastCat(){
    cats.slice(0, -1)
}
function removeFirstCat(){
    cats.slice(1)
}