const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const dbConnection = mysql.createConnection({
    host: 'dbfc',
    user: 'root',
    password: 'root',
    database: 'nodedb'
});

app.get('/', async (req, res) => {
    await dbConnection.query(`INSERT INTO People (name) values ('Sara')`);
    await dbConnection.query(`SELECT * FROM People`, function (err, result, fields) {
    
    const names = `<ul>${result.map(r => `<li>${r.Name}</li>`).join('')}</ul>`;

    res.send('<h1>Full Cycle Rocks!</h1>' + names);

    });
});

app.listen(port);