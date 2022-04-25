import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetContext from './context';
import { planetsFetch } from '../service/api';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filterName, getfilterByName] = useState('');
  const [columnFilter, setColumnFilter] = useState([]);
  const [columns, setColumns] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

  const requestPlanets = async () => {
    const planetsApi = await planetsFetch();
    setPlanets(planetsApi.results);
  };
  useEffect(() => {
    // console.log('estou fazendo requisição');
    requestPlanets();
  }, []);
  const state = {
    planets,
    filterName,
    getfilterByName,
    columnFilter,
    setColumnFilter,
    columns,
    setColumns,
  };

  // console.log(state);

  return (
    <planetContext.Provider value={ state }>
      { children }
    </planetContext.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.object,
}.isRequired;
export default Provider;
