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

export const getPokemonData = async (ids) => {

  try{
    const pokemon = await ids.map( async poke => {
      const data = await fetch(`http://localhost:3001/pokemon/${poke}`)
      const response = data.json()

      return response;
    })
  
    return Promise.all(pokemon);
  } catch (error) {
    throw Error;
  }
}