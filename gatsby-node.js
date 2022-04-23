const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
  /*const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })*/

  const resultado = await graphql(`
    query {
      allStrapiPagina {
        nodes {
          nombre
          id
        }
      }
      allStrapiPropiedad {
        nodes {
          nombre
          id
        }
      }
    }
  `);

  //Si no hay resultados
  if(resultado.errors) {
    reporter.panic('No hubo resultados', resultado.errors);
  }

  //Si hay resultados generar archivos estáticos
  const paginas = resultado.data.allStrapiPagina.nodes;
  const propiedades = resultado.data.allStrapiPropiedad.nodes;
  
  //Crear templates de paginas
  const { createPage } = actions;
  paginas.forEach(pagina => {
    createPage({
      path: urlSlug(pagina.nombre),
      component: require.resolve("./src/components/paginas.js"),
      context: {
        id: pagina.id
      },
    });
  });  

  //Crear templates de propiedades
  propiedades.forEach(propiedad => {
    createPage({
      path: urlSlug(propiedad.nombre),
      component: require.resolve("./src/components/propiedades.js"),
      context: {
        id: propiedad.id
      },
    });
  });

}
