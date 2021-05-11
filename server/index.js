const express = require("express");
const mysql = require("mysql");

const app = express();

const sql = mysql.createConnection(process.env.DATABASE_HOST);

console.log(process.env.DATABASE_HOST);

sql.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + sql.threadId);
});

app.get("/", async (req, res) => {
  await sql.query("select * from user", (err, results) => {
    if (!err) {
      res.json({
        msg: results,
      });
    }
  });
});

app.listen(3333, "0.0.0.0", () => {
  console.log("Server running");
});
