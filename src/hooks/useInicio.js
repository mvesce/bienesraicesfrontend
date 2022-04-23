import { graphql, useStaticQuery } from 'gatsby';

const useInicio = () => {

  const resultado = useStaticQuery(
    graphql`
    query {
      allStrapiPagina(filter: {nombre: {eq: "Inicio"}}) {
        nodes {
          id
          nombre
          contenido
          imagen {
            localFile {
              sharp: childImageSharp {
                fluid(maxWidth: 1800 duotone: {
                  highlight: "#222222", shadow: "#192550", opacity: 30
                }) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    `
  );


  return resultado.allStrapiPagina.nodes.map( inicio => ({
    nombre: inicio.nombre,
    contenido: inicio.contenido,
    imagen: inicio.imagen
  }));

}
 
export default useInicio;