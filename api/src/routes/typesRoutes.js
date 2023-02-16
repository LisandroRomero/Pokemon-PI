const {Router} = require("express")
const {Type} = require ("../db.js")
const {allTypes} = require("../Controllers/pokemonsType")
const router = Router()



router.get("/", async (req,res)=>{
    try {
       await allTypes();
    
        const types = await Type.findAll();   
       
        res.status(200).json(types);
      } catch (e) {
        res.status(400).send(e.toString()), console.log(e, "Error en el controller getTypes");
      }
})
module.exports= router;
