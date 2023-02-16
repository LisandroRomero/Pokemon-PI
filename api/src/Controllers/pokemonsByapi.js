const axios = require("axios")


const pokeapi = async ()=>{

  try {
    const pokemones =  await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=40");
    const pokeUrlName = pokemones.data.results
    const pokeComplete = await axios.all(
        pokeUrlName.map(async (pokeInd) => {
          let infoPush = await axios.get(pokeInd.url);
          return {
            id: infoPush.data.id,
            name: infoPush.data.name,
            hp: infoPush.data.stats[0].base_stat,
            attack: infoPush.data.stats[1].base_stat,
            defense: infoPush.data.stats[2].base_stat,
            speed: infoPush.data.stats[5].base_stat, 
            height: infoPush.data.height,
            weight: infoPush.data.weight,
            image: infoPush.data.sprites.other.dream_world.front_default,
            types: infoPush.data.types.map((type) => type.type.name), 
          }
        })
      )
      return pokeComplete
}    catch (error) {
    console.log({error:"Error al traer los pokemones desde los controllers"});
}

}


// const prueba = async ()=>{
//     let pokemon = await pokeapi()
//     console.log(pokemon);
// }
// prueba()
module.exports={pokeapi};