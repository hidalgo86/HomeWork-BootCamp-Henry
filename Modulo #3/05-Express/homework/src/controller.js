const STATUS_USER_ERROR = 422;

let posts = [];

let prevId = 0;

function idGen() {
  let id = 1;
  return function () {
    id = id + 1;
    return id;
  };
}

const newId = idGen();

// ********************* FUNCIONES CONTROLADORAS *****************************

const crearPostal = (req, res) => {
  const { author, title, contents } = req.body;

  if (!author || !title || !contents) {
    return res.status(STATUS_USER_ERROR).json({
      error: "No se recibieron los parámetros necesarios para crear el Post",
    });
  }

  const newPostal = {
    id: ++prevId,
    author: author,
    title: title,
    contents: contents,
  };

  posts.push(newPostal);

  return res.status(200).json(newPostal);
};

const crearPostalPorAutor = (req, res) => {
  const { author } = req.params;

  const { title, contents } = req.body;

  if (!author || !title || !contents) {
    return res.status(STATUS_USER_ERROR).json({
      error: "No se recibieron los parámetros necesarios para crear el Post",
    });
  }

  const newPostal = {
    id: ++prevId,
    author: author,
    title: title,
    contents: contents,
  };

  posts.push(newPostal);

  return res.status(200).json(newPostal);
};

const llamarPostal = (req, res) => {
  if (req.query.term) {
    const result = posts.filter(
      (post) =>
        post.title.includes(req.query.term) ||
        post.contents.includes(req.query.term)
    );
    return res.json(result);
  }
  return res.json(posts);
};

const llamarPostalPorAutor = (req, res) => {
  const { author } = req.params;

  const result = posts.filter((post) => post.author.includes(author));

  if (result.length === 0) {
    return res.status(STATUS_USER_ERROR).json({
      error: "No existe ningun post del autor indicado",
    });
  }

  return res.json(result);
};

const llamarPostalPorTitulo = (req, res) => {
  const { author, title } = req.params;

  const result = posts.filter(
    (post) => post.author === author && post.title === title
  );

  if (result.length === 0) {
    return res.status(STATUS_USER_ERROR).json({
      error: "No existe ningun post con dicho titulo y autor indicado",
    });
  }

  return res.json(result);
};

const actualizarPostal = (req, res) => {
  const { id, title, contents } = req.body;

  if (!id || !title || !contents)
    return res.status(STATUS_USER_ERROR).json({
      error:
        "No se recibieron los parámetros necesarios para actualizar el Post",
    });

  const post = posts.find((post) => post.id === id);

  if (!post)
    return res.status(STATUS_USER_ERROR).json({
      error: "El id no corresponde con un Post existente",
    });

  post.title = title;
  post.contents = contents;

  return res.json(post);
};

const eliminarPostal = (req, res) => {
  const { id } = req.body;

  if (!id)
    return res.status(STATUS_USER_ERROR).json({
      error: "No se recibieron los parámetros necesarios para eliminar un Post",
    });

  const post = posts.find((post) => post.id === id);

  if (!post)
    return res.status(STATUS_USER_ERROR).json({
      error: "El id no corresponde con un Post existente",
    });

  posts = posts.filter((post) => post.id !== id);

  return res.send({ success: true });
};

const eliminarPostalPorAutor = (req, res) => {
  const { author } = req.body;

  if (!author)
    return res.status(STATUS_USER_ERROR).json({
      error: "No se recibieron los parámetros necesarios para eliminar un Post",
    });

  const post = posts.find((post) => post.author === author);

  if (!post)
    return res.status(STATUS_USER_ERROR).json({
      error: "No existe el autor indicado",
    });

  eliminados = posts.filter((post) => post.author === author);

  posts = posts.filter((post) => post.author !== author);

  return res.json(eliminados);
};

module.exports = {
  posts,
  crearPostal,
  crearPostalPorAutor,
  llamarPostal,
  llamarPostalPorAutor,
  llamarPostalPorTitulo,
  actualizarPostal,
  eliminarPostal,
  eliminarPostalPorAutor,
};
