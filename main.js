

   const bulbasaur = {
     name: "Bulbasaur",
     type: "grass",
     ability: {
       primary: "Overgrow",
       hidden: "Chlorophyll",
     },
     stats: {
       hp: 45,
       attack: 49,
       deffense: 59,
       speed: 45,
     },
     moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"],
     modifiers: {
       weakness: ["fire, ice", "flying", "psychic"],
       resistances: ["water", "grass", "electric", "fighter"],
     },
   };
   const charmander = {
     name: "Charmander",
     type: "fire",
     ability: {
       primary: "Blaze",
       hidden: "Solar Power",
     },
     stats: {
       hp: 39,
       attack: 52,
       deffense: 43,
       speed: 65,
     },
     moves: ["Growl", "Scratch", "Flamethrower", "Dragon Breath"],
     modifiers: {
       weakness: ["water", "ground", "rock"],
       resistances: ["fire", "ice", "grass", "steal"],
     },
   };
   const squirtle = {
     name: "Squirtle",
     type: "water",
     ability: {
       primary: "Torrent",
       hidden: "Rain Dish",
     },
     stats: {
       hp: 44,
       attack: 48,
       deffense: 50,
       speed: 43,
     },
     moves: ["Tackle", "Tail Whip", "Water Gun", "Hydro Pump"],
     modifiers: {
       weakness: ["electric", "grass"],
       resistances: ["water", "fire", "ice", "steel"],
     },
   };
   const pikachu = {
     name: "Pikachu",
     type: "electric",
     ability: {
       primary: "Static",
       hidden: "Lightning rod",
     },
     stats: {
       hp: 35,
       attack: 55,
       deffense: 40,
       speed: 90,
     },
     moves: ["Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"],
     modifiers: {
       weakness: ["ground"],
       resistances: ["electric", "flying", "water", "steel"],
     },
   };

let pokemon = [bulbasaur, charmander, squirtle, pikachu]; 
/*1-Escribir una función que recibar un array de pokemones y los ordene de acuerdo a su HP.
2-Escribir una función que recibe un array de pokemones si hay al menos un pokemon tipos ''fire'' y uno tipo ''water'' en la lista.
3-Escribir una función que recibe un pokemon y me devuelve su 'stat' mas alto y su 'stat' mas bajo */

console.log("Ejercicio 1");
let ordenarHp = (pokemon) => {
  let vida = [];

  for (let i = 0; i < pokemon.length; i++) {
    vida.push({hp:pokemon[i].stats.hp ,name:pokemon[i].name});
  }
  return vida.sort((a, b) => a.hp - b.hp);
};
console.log(ordenarHp(pokemon));

let encontrarElTipo=(pokemon,tipo)=>{
  let tipoEncontrado =[];
  for(let i=0; i< pokemon.length;i++){
    if(pokemon[i].type === "fire"|| pokemon[i].type==="water")
    tipoEncontrado.push({type:pokemon[i].type ,name:pokemon[i].name})
  }
  return tipoEncontrado

}
console.log(encontrarElTipo(pokemon))