export const planetsFetch = async () => {
  try {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

export default planetsFetch;
