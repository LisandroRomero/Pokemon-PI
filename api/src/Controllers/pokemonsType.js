const {Type} = require ("../db.js")
const axios = require ("axios")


const allTypes = async () => {
  try {
    const getTypes = await axios.get("https://pokeapi.co/api/v2/type");
    const pokeType = getTypes.data.results.map((type) => {
      return {
        name: type.name,
      };
    });
    
    const dtbase = pokeType.forEach((el) => {
      Type.findOrCreate({
        where: {
          name: el.name,
        },
      });
    });
  return dtbase
  } catch (error) {
    console.log({error: "No types available on Data Base"});
  }
};



  
  module.exports = {allTypes};