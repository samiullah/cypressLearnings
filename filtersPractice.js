var creatures = [
    {name: "Shark", habitat: "Ocean"},
    {name: "Whale", habitat: "Ocean"},
    {name: "Lion", habitat: "Savanna"},
    {name: "Monkey", habitat: "Jungle"},
    {name: "Baboon", habitat: "Jungle"}
];


let seaCreatures = creatures.filter(function(creature) {
    return creature.habitat === "Ocean";
});

console.log(seaCreatures)

for (let i = 0; i < creatures.length; i++) {
  if (creatures[i].habitat === "Jungle"){
      console.log(creatures[i].name)
  }
}