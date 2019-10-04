require("dotenv").config();
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: process.env.DB_PASSWORD,
    database: "greatbay_db"
  });
  

  connection.connect(function(err) {
    if (err) throw err;
    // console.log("Connected");
    connection.end();
  });

  inquirer.prompt([
    {
      type: "confirm",
      name: "postItem",
      message: "Would you like to post an item for auction?"
    },
    {
    type: "confirm",
    name: "bidItem",
    message: "Would you like to place a bid?"
    }
]).then(function(response){
    console.log(response)
    // post an item
    if(response === true){
        console.log("what ever the method runs");
    } else if(response === false){
        console.log("Fine... ");
    }

    // place a bid
    if("bidItem" === true){
        console.log("method");
    }else if("bidItem" === false){
        console.log("also fine..");
    }
});