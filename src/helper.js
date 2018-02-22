export const getTypes = async () => {
  try{
    const typeData = await fetch('http://localhost:3001/types', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const types = await typeData.json();
    return types;
  } catch (error) {
    throw Error;
  }
}

export const getPokemonData = async (id) => {

  try{
    const pokemonData = await fetch(`http://localhost:3001/pokemon/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const pokemonResults = await pokemonData.json();
    console.log(pokemonResults)
    return pokemonResults;
  } catch (error) {
    throw Error;
  }
}