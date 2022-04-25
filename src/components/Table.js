import React, { useContext } from 'react';
import planetContext from '../context/context';

function Table() {
  const { planets, filterName, columnFilter } = useContext(planetContext);
  const filterByNumericValues = (planet) => {
    if (columnFilter.length === 0) {
      return true;
    }
    const resultsArray = [];
    columnFilter.forEach((filter) => {
      let result = true;
      const { column, comparison, value } = filter;
      if (comparison === 'maior que') {
        result = Number(planet[column]) > Number(value);
      }
      if (comparison === 'menor que') {
        result = Number(planet[column]) < Number(value);
      }
      if (comparison === 'igual a') {
        result = Number(planet[column]) === Number(value);
      }
      resultsArray.push(result);
    });
    return resultsArray.every((results) => results === true);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { planets
          .filter((planet) => filterByNumericValues(planet))
          .filter((planet) => planet.name.includes(filterName))
          .map((planet) => {
            const {
              name,
              rotation_period: rotationPeriod,
              orbital_period: orbitalPeriod,
              diameter,
              climate,
              gravity,
              terrain,
              surface_water: surfaceWater,
              population,
              films,
              created,
              edited,
              url,
            } = planet;
            return (
              <tr key={ name }>
                <td>{ name }</td>
                <td>{ rotationPeriod }</td>
                <td>{ orbitalPeriod }</td>
                <td>{ diameter }</td>
                <td>{ climate }</td>
                <td>{ gravity }</td>
                <td>{ terrain }</td>
                <td>{ surfaceWater }</td>
                <td>{ population }</td>
                <td>{ films }</td>
                <td>{ created }</td>
                <td>{ edited }</td>
                <td>{ url }</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
export default Table;
