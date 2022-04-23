import React from 'react';
import Iconos from './iconos';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import urlSlug from 'url-slug';

const Card = styled.div`
  border: 1px solid #E1E1E1;
  img {
    max-width: 100%;
  }
`;

const Contenido = styled.div`
  padding: 2rem;

  h3 {
    font-family: 'Lato', sans-serif;
    margin: 0 0 2rem 0;
    font-size: 2.4rem;
  }

  .precio {
    font-size: 2rem;
    color: #75AB00
  }
`;

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #75AB00;
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
`;

const PropiedadPreview = ({propiedad}) => {

  const { nombre, imagen, wc, estacionamiento, habitaciones, precio } = propiedad;

  const image = getImage(imagen.localFile.childImageSharp.gatsbyImageData);

  return ( 

    <Card>

      <GatsbyImage 
        image={image}
        alt=""
      />

      <Contenido>
        <h3>{nombre}</h3>

        <p className='precio'>$ {precio}</p>

        <Iconos 
          wc={wc}
          estacionamiento={estacionamiento}
          habitaciones={habitaciones}
        />

        <Boton
          to={"/"+urlSlug(nombre)}
        >
          Visitar Propiedad
        </Boton>

      </Contenido>
    </Card>
   );
}
 
export default PropiedadPreview;