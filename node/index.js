const express = require('express');
const app = express();
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
};
const mysql = require('mysql2');
const connection = mysql.createConnection(config);

const Charlatan = require('charlatan');
Charlatan.setLocale('pt-BR');

app.get('/', (req, res) => {
  connection.query(
    `INSERT INTO people (name) VALUES ('${Charlatan.Name.name()}')`
  );

  connection.query(`SELECT name FROM people`, (error, results, fields) => {
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ul>
        ${
          results.length > 0
            ? results.map((el) => `<li>${el.name}</li>`).join('')
            : ''
        }
      </ul>
    `);
  });
});

app.listen(port, () => {
  console.log('Rodando na porta ' + port);
});
