require("dotenv").config();
var mysql = require("mysql");

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
    // call enquirer function
});

function end() {
    connection.end();
}

function createItem(item, category, inquirer) {
    // INSERT INTO greatbay(item, category)
    // VALUES ("record", "music"), ("elephant", "animals"), ("tent", "camping");
    var query = connection.query(
        "INSERT INTO greatbay SET ?",
        {
            item: item,
            category: category
        },
        function(err, result) {
            if (err) throw err;
            if (result) {
                console.log("Added", item);
            }
        }
    )


    // call inquirer function
    inquirer();
}

function getItems(inquirer) {
    // SELECT item FROM greatbay;
    connection.query("SELECT item FROM greatbay", function(err, result) {
        if (err) throw err;
        for (item in result) {
            console.log(result[item].item);
            // return the results to inquirer?
        }
    });
    // call inquirer function
    inquirer();
}

// function readProducts() {
//     console.log("Selecting all products...\n");
//     connection.query("SELECT * FROM products", function(err, res) {
//       if (err) throw err;
//       // Log all results of the SELECT statement
//       console.log(res);
//       connection.end();
//     });
//   }

function bidOnItem(item, bidAmount, makeBid, inquirer) {
    // SELECT bid FROM greatbay WHERE item = "record";
    var bid;
    connection.query("SELECT bid FROM greatbay WHERE item = ?", [item], function(err, res) {
      if (err) throw err;
      bid = res[0].bid;
      console.log(bid);
    })


    if (bidAmount > bid) {
        makeBid(item, bidAmount);
    } else {
        // Bid is too low
        console.log("Bid higher.")
        inquirer();
    
    }
   
}


/* 
function updateProduct() {
  console.log("Updating all Rocky Road quantities...\n");
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        quantity: 100
      },
      {
        flavor: "Rocky Road"
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " products updated!\n");
      // Call deleteProduct AFTER the UPDATE completes
      deleteProduct();
    }
  );
*/

function makeBid(item, bidAmount, inquirer) {
  connection.query("UPDATE greatbay SET bid = ? WHERE item = ?", [{bid:bidAmount},{item:item}], function(err, res){
    if (err) throw err;
    console.log(res);
  })

    // UPDATE greatbay 
    // SET bid = 5
    // WHERE item = "record";


    inquirer();
}

