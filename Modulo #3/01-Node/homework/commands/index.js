var fs = require('fs');

function date(args, write) {write(Date() + '\n')};

function pwd(args, write) {write(process.cwd() + '\n')};

function ls(args, write) {
  fs.readdir('.', function(err, files) {
      if (err) throw err;
      let output = "";
      files.forEach(function(file) {
        output = output + file.toString() + "\n";
      })
      write(output);
    });
};

function echo(args, write) {write(args.join(" ") + '\n')};

function cat(args, write) {
  fs.readFile(args[0], "utf-8", (err, data) => {
    if (err) throw err
    write(data)
  })
};

function head(args, write) {
fs.readFile(args[0], "utf-8", (err, data) => {
      if (err) throw err
      const lines = data.split("\n")
      write(lines.slice(0, (args[1] ? parseInt(args[1]) : 10)).join("\n"));
    })
  };  

function tail(args, write) {
  fs.readFile(args[0], "utf-8", (err, data) => {
    if (err) throw err
    const lines = data.split("\n")
    write(lines.slice((args[1] ? parseInt(args[1]) : 10) * -1).join("\n"));
  })
};

function curl(args, write) {
  request(args[0], function(error, response, body) {
    if(error) throw error
    write(body)
  });
};

function clear(args, write) {write("\033c")};

module.exports = {
  date, // date: date
  pwd, //directorio actual
  ls, //listar archivos y directorios
  echo, //escribir en pantalla un texto
  cat, //mostrar archivo en pantalla
  head, //mostrar primeros n lineas de un archivo
  tail, //mostrar ultimas n lineas de un archivo
  curl, //mostrar archivo de internet
  clear, //limpiar pantalla
}