const sqlite3 = require("sqlite3"); // serve para se comunicar e atua como driver
const sqlite = require("sqlite"); // serve para se conectar
// path module provides utilities for working with file and directory paths
const path = require("path");

// função para criar arquivo do banco de dados caso ele não exista
async function sqliteConnection() {
  const database = await sqlite.open({
    filename: path.resolve(__dirname, "..", "database.db"),
    driver: sqlite3.Database
  });
  return database;
}

module.exports = sqliteConnection;