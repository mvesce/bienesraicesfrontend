import React, {Fragment, useEffect, useState} from 'react';
import { css } from '@emotion/react';
import usePropiedades from '../hooks/usePropiedades';
import PropiedadPreview from './propiedadPreview';
import * as listadoPropiedadesCSS from '../css/listadoPropiedades.module.css';
import useFiltro from '../hooks/useFiltro';

const ListadoPropiedades = () => {

  const resultado = usePropiedades();
  const [ propiedades ] = useState(resultado);
  const [ filtradas, guardarFiltradas ] = useState([]);

  //Filtrar propiedades
  const { categoria, FiltroUI } = useFiltro();

  useEffect( () => {

    if(categoria) {
      const filtro = propiedades.filter( propiedad => propiedad.categoria.nombre === categoria);
      guardarFiltradas(filtro);
    } else {
      guardarFiltradas(propiedades);
    }

  }, [categoria, propiedades]);

  return ( 
    <Fragment>
      <h2 css={css`
        margin-top: 5rem;
      `}>
        Nuestras Propiedades
      </h2>

      { FiltroUI() }

      <ul className={listadoPropiedadesCSS.propiedades}>
          {filtradas.map(propiedad => (
            <PropiedadPreview 
              key={propiedad.id}
              propiedad={propiedad}
            />
          ))}
        </ul>

    </Fragment>

   );
}
 
export default ListadoPropiedades;