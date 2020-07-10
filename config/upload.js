const multer = require('multer');
const path = require('path');

// Criar storage que deverá dizer onde e com qual nome deve ser salvo o arquivo.
const storage = multer.diskStorage({
  // definir onde será salvo o arquivo.
  destination: (req, file, cb) => {
    cb(null, path.join('public', 'images', 'upload'));
  },
  // definir que nome será salvo o arquivo.
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Informar ao multer que é para usar nosso storage.
const upload = multer({ storage: storage });

module.exports = upload;