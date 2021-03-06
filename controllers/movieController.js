const { Movies } = require("../models");

const movieController = {
  index: async (req, res) => {
    const movies = await Movies.findAll();
    
    return res.render("index", { movies });
  },

  store: async (req, res) => {
    const { title, description, watched } = req.body;
    // Receber info do arquivo passada pelo multer.
    const [poster] = req.files;
    // Cadastrando o filme no banco por meio do metodo create e passando as infos do formulario.
    const newMovie = await Movies.create({
      title,
      poster: poster.filename,
      description,
      watched: watched ? 1 : 0
    });
    // Validando se teve algum problema ao criar o filme
    if (!newMovie) {
      return res.render("index", { msg: "Falha ao cadastrar o filme!" });
    }
    // Se deu tudo certo até aqui, o usuario será redirecionado a pagina inicial
    return res.redirect("/");
  },
  
  checkWatched: async (req, res) => {
    // Recebendo o id do filme que queremos marcar como assitido.
    const { id } = req.params;
    // Atualizando no banco que ja assitiu o filme.
    const movie = await Movies.update(
      {
        watched: 1
      },
      {
        where: {
          id
        },
      }
    );

    // Validando se teve algum problema ao alterar o filme
    if (!movie) {
      return res.render("index", { msg: "Falha ao alterar o filme!" });
    }
    // Se deu tudo certo até aqui, o usuario será redirecionado a pagina inicial
    return res.redirect("/");
  },
};

module.exports = movieController;