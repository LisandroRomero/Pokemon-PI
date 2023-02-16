const { Pokemon, Type } = require("../db");

const newPokemon = async (params) => {
  const createdPokemon = await Pokemon.create({
    name: params.name,
    hp: params.hp,
    attack: params.attack,
    defense: params.defense,
    speed: params.speed,
    height: params.height,
    weight: params.weight,
    img: params.img ? params.img : "https://images3.alphacoders.com/677/677583.png",
  });

  const typesDb = await Type.findAll({
    where: {name: params.types}
  })

  createdPokemon.addType(typesDb);
};

module.exports = { newPokemon };