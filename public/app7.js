const express = require('express');
const mysql2 = require('mysql2');

const PORT = process.env.PORT || 3000;
const app = express();


//mysql connection
const con = mysql2.createConnection({
    host: "localhost",
    port: 3310,
    user: "Von Razo",
    password: "Xentians23",
    database: "CovidDb"
  })

//callback
con.connect((err) =>{
    if(!err){
        console.log("connected to MySQL server at port 3306...");
    }else{
        console.log("error not connected to MYSQL Server")
    }
});

//database
app.get("/create-database", (req, res) => {
    let sql = "CREATE DATABASE CovidDb";
    con.query(sql, (err,result) => {
        if(!err){
            res.send("Successfully created database");
        }else{
            res.send("failed to create database....")
        }
    })
})

//table 
app.get("/create-stat-table", (req, res) => {
    let sql = "CREATE TABLE stat(Locationid int AUTO_INCREMENT, acases int, recovered int, deaths int, PRIMARY KEY(Locationid))";
    con.query(sql, (err,result) => {
        if(!err){
            res.send(result);
        }else{
            res.send("failed to create student table....")
        }
    })
})

//port
app.listen(PORT, () => {
    console.log("Listening to PORT " + PORT + "....");
   });