const validate = (value, pokemon) => {
    const errors = {};
    if (value.name) {
      const pokename = value.name.split("  ");
      if (!/^[ a-zA-Z ]+$/.test(value.name) || !value.name || pokename.length > 1)
        errors.name = "Only letters allowed";
      if (
        pokemon?.some(
          (el) => el.name.toLowerCase() === value.name.toLowerCase()
        )
      )
        errors.name = "this pokemon already exists";
      if (value.name.length > 20)
        errors.name = "El nombre no puede ser mayor a 20 caracteres";
    }
    if (value.hp) {
      if (
        value.hp < 1 ||
        value.hp > 255 ||
        !Number.isInteger(parseFloat(value.hp))
      )
        errors.hp = "From 1 to 255 allowed";
    }
    if (value.attack) {
      if (
        value.attack < 1 ||
        value.attack > 190 ||
        !Number.isInteger(parseFloat(value.attack))
      )
        errors.attack = "El ataque debe ser tener un valor entre 1-190";
    }
    if (value.defense) {
      if (
        value.defense < 1 ||
        value.defense > 250 ||
        !Number.isInteger(parseFloat(value.defense))
      )
        errors.defense = "La defensa debe tener un valor entre 1-250";
    }
    if (value.speed) {
      if (
        value.speed < 1 ||
        value.speed > 200 ||
        !Number.isInteger(parseFloat(value.speed))
      )
        errors.speed = "La velocidad debe tener un valor entre 1-200";
    }
    if (value.height) {
      if (
        value.height < 1 ||
        value.height > 200 ||
        !Number.isInteger(parseFloat(value.height))
      )
        errors.height = "La altura debe tener un valor entre 1-200";
    }
    if (value.weight) {
      if (value.weight < 1 || value.weight > 1000)
        errors.weight = "El peso debe tener un valor entre 1-1000";
    }
    if (value.types) {
      if (!value.types.length || value.types.length > 2)
        errors.types = "Se requiere al menos un tipo y maximo dos tipos";
      else {
        errors.types = false;
      }
    }
    return errors;
  };
  
  export default validate;