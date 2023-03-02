import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, getPokemonDetail } from "../../Redux/Actions/index";
import { useEffect } from "react";
import Loading from "../Loading/Loading";
import "./Detail.css"

const Detail = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemonDetail(props.match.params.id));
  }, [dispatch,props.match.params.id]);

  const pokemon = useSelector((state) => state.pokeDetail);

  const handleClick = (e) => {
    dispatch(clearDetail());
  };
 console.log(pokemon);
  return (
    <div className="fondo">
      <Link to={"/home"}>
        <button className="button" onClick={(e) => handleClick(e)}>Go home</button>
      </Link>
      {pokemon.length ? (
        <div className="detail">
          <div >
          <h1  >Name: {pokemon[0].name.toUpperCase()}</h1>
          <img
            src={pokemon[0].image}
            alt="Image not found"
            width={"200px"}
            height={"250px"}
          />
         <h2>{
            pokemon[0].types.join(" - ").toUpperCase()
            }
            </h2>
          </div>
          <div className="stats" >
          <h3 >ID: {pokemon[0].id}</h3>
          <h2 >Hp: {pokemon[0].hp}</h2>
          <h2 >attack: {pokemon[0].attack}</h2>
          <h2 >defense: {pokemon[0].defense}</h2>
          <h2 >speed: {pokemon[0].speed}</h2>
          <h2 >height: {pokemon[0].height}</h2>
          <h2 >weight: {pokemon[0].weight}</h2>
          </div>
        </div>
      ) : (
        <Loading/>
      )}
    </div>
  );
};

export default Detail;