const {Pokemon ,Type}= require ("../db.js")



const dataBasePokemons = async () => {
    try { 
     const pokesOnDB = await Pokemon.findAll({
       include : Type,
    })  
       
     return pokesOnDB

    } catch (error) {
     console.log({error : "no pokemons availables on data base"})
    }
     
 }
 module.exports ={dataBasePokemons}