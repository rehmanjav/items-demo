"use strict";

/*
0 NoArticle             upc
7 Department            derive category
17 PrixVente            price
141 Description         name
*/

const fs = require("fs");
const { parse } = require("csv-parse");
const Database = require('better-sqlite3');

class Item {
    constructor(itemObject) {
        this.upc = itemObject.upc
        this.price = itemObject.price
        this.tax = itemObject.tax
        this.category = itemObject.category
        this.name = itemObject.name
        this.qty = 1;
    }
}

const category = {
    "Animal Food": "",
    "Books": "",
    "Candy": "",
    "Chips": "",
    "Chocolat": "",
    "Cigars": "",
    "Dairy": "",
    "Drink": "",
    "Energic Drink": "",
    "Film": "",
    "Frozen": "",
    "Grocery": "",
    "Grocery Tx": "",
    "Gum": "",
    "Ice Cream": "",
    "Laundry": "",
    "Lottery On Line": "",
    "Lottery On Prize": "",
    "Magazine": "",
    "Meat": "",
    "Nevada": "",
    "Nevada Prize": "",
    "News Paper": "",
    "Others": "",
    "Pharmacy": "",
    "Phone Cards": "",
    "Sandwich": "",
    "Scratch Prize": "",
    "Scratch Ticket": "",
    "Slush": "",
    "Stamps": "",
    "Tobacco": "",
    "Water Pipes": "",
};


function createDatabase() {
  let exists = fs.existsSync('./data/items.sqlite3');

  if (!exists) {
    console.log("Database doesn't exists, creating..");
    db = new Database('./data/items.sqlite3', { verbose: console.log });
    let stmt = db.prepare(`CREATE TABLE items (
        upc TEXT PRIMARY KEY,
        price INTEGER NOT NULL,
        tax INTEGER NOT NULL,
        category TEXT NOT NULL,
        name TEXT NOT NULL,
        qty INTEGER NOT NULL
      );`);
      stmt.run();
  } else {
    console.log("Database exists, opening..");
    db = new Database('./data/items.sqlite3', { verbose: console.log });
  }
  
}



// fs.createReadStream("./data/items.csv")
//   .pipe(parse({ delimiter: ",", from_line: 2 }))
//   .on("data", function (row) {
//     console.log(row[141]);
//   })
//   .on("end", function () {
//     console.log("finished");
//   })
//   .on("error", function (error) {
//     console.log(error.message);
//   });

let db;
createDatabase();

let row = ['name', 1600, 13, 'tobacco', '123456', 1];


let stmt = db.prepare('INSERT INTO items (name, price, tax, category, upc, qty) VALUES (?, ?, ?, ?, ?, ?)');
stmt.run(row[0], row[1], row[2], row[3], row[4], row[5]);
