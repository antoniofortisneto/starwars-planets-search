import React, { useContext, useState } from 'react';
import planetContext from '../context/context';

function Filter() {
  const { filterName, getfilterByName } = useContext(planetContext);
  const { columnFilter, setColumnFilter } = useContext(planetContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const buildFilter = () => ({ column, comparison, value });
  const columnsArray = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const verifyColumn = (string) => {
    const result = !(columnFilter.some((filter) => filter.column === string));
    return result;
  };

  return (
    <div>
      <label htmlFor="filter">
        Filtro:
        <input
          id="filter"
          name="filterByName"
          data-testid="name-filter"
          value={ filterName }
          onChange={ (e) => getfilterByName(e.target.value) }
        />
      </label>
      <label htmlFor="filterByColumn">
        Filtrar por:
        <select
          id="filterByColumn"
          name="filterByColumn"
          data-testid="column-filter"
          value={ column }
          onChange={ (e) => setColumn(e.target.value) }
        >
          { columnsArray
            .filter((item) => verifyColumn(item))
            .map((element) => (
              <option key={ element } value={ element }>
                {element}
              </option>
            )) }

        </select>
      </label>
      <label htmlFor="comparison">
        Comparação:
        <select
          id="comparison"
          name="comparison"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </label>
      <label htmlFor="inputValue">
        Valor:
        <input
          id="inputValue"
          name="inputValue"
          data-testid="value-filter"
          type="number"
          value={ value }
          onChange={ (e) => setValue(e.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setColumnFilter([...columnFilter, buildFilter()]) }
      >
        Confirmar Filtro
      </button>
      { columnFilter.length > 0 && <p>Seus Filtros:</p> }
      { columnFilter.length > 0
 && columnFilter.map((filter) => (
   <div key={ filter.column }>
     <p>
       {`Comparando a coluna ${filter.column} sendo
          ${filter.comparison} o número ${filter.value}`}
     </p>
     <button
       type="button"
     >
       Deletar Filtro
     </button>
   </div>
 ))}
    </div>
  );
}
export default Filter;
