const {Pokemon ,Type}= require ("../db.js")



const dataBasePokemons = async () => {
    try { 
     const pokesOnDB = await Pokemon.findAll({
       include : Type,
    })  
       
     return pokesOnDB.map((pokemon)=>{
      return{
         id:pokemon.id,
         name:pokemon.name,
         image:pokemon.image,
         types:pokemon.types.map((type)=>type.name)

      }
     })

    } catch (error) {
     console.log({error : "no pokemons availables on data base"})
    }
     
 }
 module.exports ={dataBasePokemons}