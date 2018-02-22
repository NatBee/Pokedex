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