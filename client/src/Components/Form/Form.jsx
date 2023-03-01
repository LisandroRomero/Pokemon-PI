import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { createPokemon, getTypes, empty } from "../../Redux/Actions/index";
import { useDispatch, useSelector } from "react-redux";
import validate from "./validate";


const CreatePokemon = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokeTypes);
  const pokemon = useSelector((state) => state.allPokemon);
  const history = useHistory();

  const [error, setError] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  const [input, setInput] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    image: "",
    types: [],
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(validate({ ...input, [e.target.name]: e.target.value }, pokemon));
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setInput({
        ...input,
        types: [...input.types, e.target.value],
      });
      setError(
        validate({ ...input, types: [...input.types, e.target.value] }, pokemon)
      );
    } else {
      setInput({
        ...input,
        types: input.types.filter(
          (c) => input.types.indexOf(c) !== input.types.indexOf(e.target.value)
        ),
      });
      setError(
        validate(
          {
            ...input,
            types: input.types.filter(
              (c) =>
                input.types.indexOf(c) !== input.types.indexOf(e.target.value)
            ),
          },
          pokemon
        )
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    console.log({
      name: input.name,
      hp: Number(input.hp),
      attack: Number(input.attack),
      defense: Number(input.defense),
      speed: Number(input.speed),
      height: Number(input.height),
      weight: Number(input.weight),
      image: input.image,
      types: input.types.map((type) => {
        for (let i = 0; i < types.length; i++) {
          if (types[i].name === type) return types[i].id
        }
      })
    });
    dispatch(createPokemon({
      name: input.name,
      hp: Number(input.hp),
      attack: Number(input.attack),
      defense: Number(input.defense),
      speed: Number(input.speed),
      height: Number(input.height),
      weight: Number(input.weight),
      image: input.image,
      types: input.types.map((type) => {
        for (let i = 0; i < types.length; i++) {
          if (types[i].name === type) return types[i].id
        }
      })
    }));
    alert("Pokemon registrado con exito");
    setInput({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      image: "",
      types: [],
    });
    dispatch(empty());
    history.push("/home");
  };

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  console.log(input.types);
  return (
    <div className="createPokemonContainer">
      <Link to={"/home"}>
        <button className="buttonBack">Go home</button>
      </Link>
      <div className="formContainer">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form" >
            <div>
              <label className="formLabel">Name:</label>
              <input
                type="text"
                value={input.name}
                name="name"
                placeholder="Name"
                required
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="formLabel">Hp:</label>
              <input
                type="number"
                value={input.hp}
                name="hp"
                placeholder="1-255"
                required
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="formLabel">Attack:</label>
              <input
                type="number"
                value={input.attack}
                name="attack"
                placeholder="1-190"
                required
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="formLabel">Defense:</label>
              <input
                type="number"
                value={input.defense}
                name="defense"
                placeholder="1-250"
                required
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="formLabel">Speed:</label>
              <input
                type="number"
                value={input.speed}
                name="speed"
                placeholder="1-200"
                required
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="formLabel">Altura(dm):</label>
              <input
                type="number"
                value={input.height}
                name="height"
                placeholder="1-200"
                required
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="formLabel">Peso(hg):</label>
              <input
                type="number"
                value={input.weight}
                name="weight"
                placeholder="1-1000"
                required
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="formLabel">Apariencia:</label>
              <input
                type="text"
                value={input.image}
                name="img"
                placeholder="URL de la imagen"
                onChange={handleChange}
              />
            </div>
          </div>
          <h3 className="typesTittle">Tipos:</h3>
          <div className="typesCreate">
            {types?.map((type) => (
              <div className="typeCreate" key={type.id}>
                <label >{type.name}</label>
                <input
                  type={"checkbox"}
                  value={type.name}
                  name={type.name}
                  onChange={(e) => handleCheck(e)}
                />
              </div>
            ))}
          </div>
          <div>
            {error.name && <p className="pStyled">{error.name}</p>}
            {error.hp && <p className="pStyled">{error.hp}</p>}
            {error.atk && <p className="pStyled">{error.attack}</p>}
            {error.def && <p className="pStyled">{error.defense}</p>}
            {error.speed && <p className="pStyled">{error.speed}</p>}
            {error.height && <p className="pStyled">{error.height}</p>}
            {error.weight && <p className="pStyled">{error.weight}</p>}
            {error.types && <p className="pStyled">{error.types}</p>}
          </div>
          <button
            className="submitButton"
            type="submit"
            disabled={
              error.name ||
              error.hp ||
              error.attack ||
              error.defense ||
              error.speed ||
              error.height ||
              error.weight ||
              error.types
            }
          >
            Create new Pokemon
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePokemon;