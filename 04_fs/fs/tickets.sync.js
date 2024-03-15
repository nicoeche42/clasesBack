const fs = require("fs");

const path = "./04_fs/tickets.json";

if (!fs.existsSync(path)) {
  const array = JSON.stringify([]);
  fs.writeFileSync(path, array);
}

const movies = JSON.parse( fs.readFileSync(path, "utf-8"))

const movie1 = { title: "hp1", place: "hoyts" };
movies.push(movie1)
const moviesString = JSON.stringify(movies, null, 2);
fs.writeFileSync(path, moviesString);

//fs.unlinkSync(path)