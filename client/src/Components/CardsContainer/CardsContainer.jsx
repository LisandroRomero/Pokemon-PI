import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux"
import Cards from "../Cards/Card"
import { getPokemon,clearHome } from '../../Redux/Actions';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Loading from '../Loading/Loading';
import Filter from '../Filter/filter';

function CardsContainer() {
   const pokemons = useSelector(state=>state.pokemons)
   const dispatch = useDispatch()
   useEffect (()=>{ dispatch(getPokemon())},[])
   const [currentPage, setCurrentPage] = useState(0);
   const cardsPerPage = 12;
   
   
   const pageCount = Math.ceil(pokemons?.length / cardsPerPage);
   
   const paginatedCards = pokemons?.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );
  const handleNextClick = () => {
    if (currentPage < pageCount - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleHome= ()=>{
    dispatch(clearHome)
  }


    return (
      <div>
         <div>
          <SearchBar />
          <Filter setCurrentPage={setCurrentPage}/>
          
             {paginatedCards.length?

             paginatedCards.map(pokemon=>{
                 return <div>
                <Link to={`/detail/${pokemon.id}`}  >
                 <Cards 
                name = {pokemon.name}
                key = {pokemon.id}
                id ={pokemon.id}
                image={pokemon.image}
                types = {pokemon.types}
                />
                </Link>
                </div>
             }): <Loading/>}          
         </div>
         <div >
        <button disabled={currentPage === 0} onClick={handlePrevClick}>
          Prev
        </button>
        {Array.from({ length: pageCount }).map((_, index) => (
          <button
            key={index}
            disabled={currentPage === index}
            onClick={() => setCurrentPage(index)}
          >
            {index + 1}
          </button>
        ))}
        <button disabled={currentPage === pageCount - 1} onClick={handleNextClick}>
          Next
        </button>
        
      </div>
      </div>
    );
}

export default CardsContainer;