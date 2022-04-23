import { graphql, useStaticQuery } from 'gatsby';

const usePropiedades = () => {
  const datos = useStaticQuery(graphql`
    query {
      allStrapiPropiedad {
        nodes {
          nombre
          descripcion {
            data {
              descripcion
            }
          }
          id
          wc
          precio
          estacionamiento
          habitaciones
          categoria {
            nombre
          }
          agente {
            nombre
            telefono
            email
          }
          imagen {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  height: 400
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `);

  return datos.allStrapiPropiedad.nodes.map( propiedad => ({
    nombre: propiedad.nombre,
    descripcion: propiedad.descripcion.data.descripcion,
    categoria: propiedad.categoria,
    imagen: propiedad.imagen,
    id: propiedad.id,
    wc: propiedad.wc,
    estacionamiento: propiedad.estacionamiento,
    habitaciones: propiedad.habitaciones,
    agentes: propiedad.agentes,
    precio: propiedad.precio,
  }));

}

export default usePropiedades;