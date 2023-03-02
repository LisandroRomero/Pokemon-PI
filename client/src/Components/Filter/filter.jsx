import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCreate, orderByAttack, orderByName, filterByType,clearHome } from '../../Redux/Actions';
import "./Filter.css"


function Filter({ setCurrentPage }) {
    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.pokemons)

    const clearFilters =()=>{
        dispatch(clearHome())
        setCurrentPage(0)
    }
    

    const handleType = (event) => {
        dispatch(filterByType(event.target.value))
    }
    const handleName = (event) => {
        dispatch(orderByName(event.target.value))
        setCurrentPage(0)
    }
    const handleAttack = (event) => {
        dispatch(orderByAttack(event.target.value))
        setCurrentPage(0)
    }
    const handleCreated = (event) => {
        dispatch(filterByCreate(event.target.value))
        setCurrentPage(0)
    }
   


    return (
        <div>
            <button onClick={clearFilters} className="filterButton" >Clear filters</button>
            <select onChange={handleAttack} className="filterButton">
                <option disabled selected>order pokemons</option>
                <option value="asc">ascendente</option>
                <option value="des">descendente</option>
            </select>
            <select onChange={handleName} className="filterButton">
                <option disabled selected>order by name</option>
                <option value="asc">A-Z</option>
                <option value="des">Z-A</option>
            </select>
            <select onChange={handleCreated}  className="filterButton" >
                <option value="all">All pokemons</option>
                <option value="api">Existing pokemons</option>
                <option value="created">Created pokemons</option>
            </select>
            <select  onChange={handleType} className="filterButton">
                <option value="all">Select one Poke-Type </option>
                <option value="fire">Fire</option>
                <option value="normal">Normal</option>
                <option value="ground">Ground</option>
                <option value="fairy">Fairy</option>
                <option value="electric">Electric</option>
                <option value="grass">Grass</option>
                <option value="poison">Poison</option>
                <option value="flying">Flying</option>
                <option value="water">Water</option>
                <option value="bug">Bug</option>
            </select>
        </div>

    );
}

export default Filter;