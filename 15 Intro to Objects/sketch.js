// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myBook1;
let myBook2;
let myBook3;
let myBook4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook1 =  new Book("Windows XP Pro - The Missing Manual", "John Moe", "softcover", 420, 861937382, width*0.3);
  myBook2 = new Book("How to be an American", "Timothy Sneider", "hardcover", 330, 98641278, width*0.2 + 174);
}

function draw() {
  background(220);
  myBook1.display();
  myBook2.display();
}

class Book{
  //1. constructor
  constructor(title, author, coverType, pages, isbn, x){
    this.title = title;
    this.author = author;
    this.coverType = coverType;
    this.pages = pages;
    this.isbn = isbn;
    this.x = x; 
  }
  //2. class
  printSummary(){
    print(this.title + ", by " + this.author);
    print("length: " + this.pages + " pages.");
    print("Cover type: " + this.coverType);
    print("ISBN: " + this.isbn);
  }
  display(){
    //visualize the book based on its properties
    //width depends on pages
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    switch(this.coverType){
    case "softcover":
      fill(250,200,200);
      break;
    case "hardcover":
      fill(150,100,15);
      break;  
    case "leatherbound":
      fill(90,120,100);
      break;
    }
    rect(this.x, height/2, this.pages/10, 150);
    textSize(20);
    fill(255);
    text(this.title[0], this.x, height/2 - 50);
  }
}
