"use strict";

/*
0 NoArticle             upc
7 Department            derive category
17 PrixVente            price
141 Description         name
*/

const fs = require("fs");
const { parse } = require("csv-parse");

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

fs.createReadStream("./data/items.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    console.log(row[141]);
  })
  .on("end", function () {
    console.log("finished");
  })
  .on("error", function (error) {
    console.log(error.message);
  });