const {Pokemon,Type} = require("../db")


const dbInfoById = async (id) => {
    try {
      return await Pokemon.findByPk(id,{
        include: {
          model: Type,
        },
      });
    } catch (e) {
      console.log(e, "Error en llamada a db por id");
    }
  };

  module.exports = {dbInfoById}