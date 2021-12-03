import React,{useState} from "react";
import { API_URL } from './../MOCK_API';

export function GetDataForFilter() {
    const [getAllData, setGetAllData] = useState([]);
    async function AllWareHouseData() {
        const data = await fetch(`${API_URL}`);
 
        setGetAllData(await data.json());
        console.log(await data.json())
      }
      AllWareHouseData();



//   const pokemonList = pokemons;
//   return pokemonList;
}

// export function filterPokemon(pokeType) {
//   let filtredPokemon = getPokemon().filter(type => type.tipo === pokeType);
//   return filtredPokemon;
// }


export function Filter() {

  return (
    <div className="nav-bar--filter">
      <select name="categories" id="categories">
        <option value="">All</option>
        <option value="city">City</option>
        <option value="cluster">Cluster</option>
        {/* <option value="opel">
          <input
            type="range"
            name="price"
            id="price"
            min="50000"
            max="500000"
            step="100"
            value="250000"
          >
            Space
          </input>
        </option> */}
      </select>
    </div>
  );
}
