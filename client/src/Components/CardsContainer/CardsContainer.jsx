import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import Cards from "../Cards/Card"
import { getPokemon } from '../../Redux/Actions';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Loading from '../Loading/Loading';
import Filter from '../Filter/filter';
import "./CardsContainer.css"

function CardsContainer() {
  const pokemons = useSelector(state => state.pokemons)
  const dispatch = useDispatch()
  useEffect(() => { dispatch(getPokemon()) }, [])
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
 


  return (
    <div>
      <div>
        {/* <div className='navBarContainer' ></div> */}
        <div className='navBar' >
        <Link to={"/create"}> <button className='createPokemon' >CREATE NEW POKEMON</button></Link>
        <Filter setCurrentPage={setCurrentPage} className= "filter" />
        <SearchBar setCurrentPage={setCurrentPage} />
        </div>
         
          {paginatedCards.length ?
        <div className='container'>
           
           { paginatedCards.map(pokemon => {
              return <div className='pokemonsCards' >
                <Link to={`/detail/${pokemon.id}`} className="link" >
                  <Cards className = "card"
                    name={pokemon.name}
                    key={pokemon.id}
                    id={pokemon.id}
                    image={pokemon.image}
                    types={pokemon.types}
                  />
                </Link>
              </div>
            })} </div>
            
            : <div className='loadingContainer'> <Loading className="loading" /> </div>}
            
      </div>
      <div className='handlePageContainer' >
        <button disabled={currentPage === 0} onClick={handlePrevClick} className="handlePageButton">
         {"<"}
        </button >
        {Array.from({ length: pageCount }).map((_, index) => (
          <button
            className="handlePageButton"
            key={index}
            disabled={currentPage === index}
            onClick={() => setCurrentPage(index)}
          >
            {index + 1}
          </button>
        ))}
        <button disabled={currentPage === pageCount - 1} onClick={handleNextClick} className="handlePageButton">
          {">"}
        </button>

      </div>
    </div>
  );
}

export default CardsContainer;