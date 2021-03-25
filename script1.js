

// Game Class

class HangmanGame {

  // new game constructor
  constructor(words) {
    this.lives = 6;
    this.word = this.generate_word(words);
    this.visual = this.generate_visual(this.word);
  }

  // function to grab a random word from the words.json file
  generate_word(words){
    let rn = Math.floor(Math.random() * 78);
    return words[rn].word;
  }

  generate_visual(word){
    let size = word.length;
    let str = "";
    for(let i=0; i<size; i++){
      str+= "_ ";
    }
    return str;
  }

  // function to confirm whether a letter is in the word
  confirm(letter) {
    if (this.word.indexOf(letter) > -1){

      let index = 0;
      while (this.word.indexOf(letter, index) > -1){
        index = this.word.indexOf(letter, index);
        let temp = this.visual.substring(0, index*2) + letter + this.visual.substring(index*2+1, this.visual.length);
        this.visual = temp;
        index++;
      }

      if(this.visual.indexOf("_") < 0){
        this.end(true);
      }

    }else{
      this.lives--;

      switch (this.lives) {
        case 1:
          document.getElementById("2lives").hidden = true;
          document.getElementById("1lives").hidden = false;
          break;
        case 2:
          document.getElementById("3lives").hidden = true;
          document.getElementById("2lives").hidden = false;
          break;
        case 3:
          document.getElementById("4lives").hidden = true;
          document.getElementById("3lives").hidden = false;
          break;
        case 4:
          document.getElementById("5lives").hidden = true;
          document.getElementById("4lives").hidden = false;
          break;
        case 5:
          document.getElementById("6lives").hidden = true;
          document.getElementById("5lives").hidden = false;
          break;
        case 0:
          document.getElementById("1lives").hidden = true;
          document.getElementById("0lives").hidden = false;
          this.end(false);
          break;

      }
    }
  }

  // function to update when the game has ended for both win and lose conditions
  end(win){

    if(win==true){
      document.getElementById("endmessage").innerHTML = "You Won Congratulations"
    }else{
      document.getElementById("endmessage").innerHTML = "You didn't get it this time; try again?"
    }
    document.getElementById("endmessage").hidden = false;

    document.getElementById("start").hidden = true;
    document.getElementById("letter").hidden = true;
    document.getElementById("guess").hidden = true;
    document.getElementById("restart").hidden = false;
  }

}

// The guess function whent the guess button has been clicked
function guess() {

  // Grabbing Letter input
  let letter = document.getElementById("letter").value
  if(letter.length != 1){
    return;
  }
  letter = letter.toLowerCase();

  // Check to see if the letter is in the word + update game state
  newgame.confirm(letter);
  counter++;

  // Update Game UI
  let wordi = newgame.word
  document.getElementById("visual").innerHTML = newgame.visual;
  //document.getElementById("word").innerHTML = "Hangman word: " + wordi;
  document.getElementById("letter").value = ""

}

// The restart function when the game restart button has been clicked
function restart(){
  // Reloads the page
  location.reload();
}

// The stat game button
function start(){

  // UI updates to enter game state
  document.getElementById("start").hidden = true;
  document.getElementById("letter").hidden = false;
  document.getElementById("guess").hidden = false;
  document.getElementById("visual").innerHTML = newgame.visual;
  //document.getElementById("word").innerHTML = "Hangman word: " + newgame.word;
}

// Initialisation of counter and game
var counter = 0;

var words = [
{"word":"ants", "difficulty":"easy"},
{"word":"bowl", "difficulty":"easy"},
{"word":"caps", "difficulty":"easy"},
{"word":"dare", "difficulty":"easy"},
{"word":"eels", "difficulty":"easy"},
{"word":"fire", "difficulty":"easy"},
{"word":"goal", "difficulty":"easy"},
{"word":"hope", "difficulty":"easy"},
{"word":"inky", "difficulty":"easy"},
{"word":"joke", "difficulty":"easy"},
{"word":"kale", "difficulty":"easy"},
{"word":"lime", "difficulty":"easy"},
{"word":"moon", "difficulty":"easy"},
{"word":"nice", "difficulty":"easy"},
{"word":"open", "difficulty":"easy"},
{"word":"pool", "difficulty":"easy"},
{"word":"queen", "difficulty":"easy"},
{"word":"ripe", "difficulty":"easy"},
{"word":"seal", "difficulty":"easy"},
{"word":"time", "difficulty":"easy"},
{"word":"uncle", "difficulty":"easy"},
{"word":"very", "difficulty":"easy"},
{"word":"wild", "difficulty":"easy"},
{"word":"xeon", "difficulty":"easy"},
{"word":"your", "difficulty":"easy"},
{"word":"zebra", "difficulty":"easy"},
{"word":"animals", "difficulty":"medium"},
{"word":"bouncy", "difficulty":"medium"},
{"word":"carousel", "difficulty":"medium"},
{"word":"dinosaur", "difficulty":"medium"},
{"word":"elephant", "difficulty":"medium"},
{"word":"forgetful", "difficulty":"medium"},
{"word":"hippopotamus", "difficulty":"medium"},
{"word":"indexing", "difficulty":"medium"},
{"word":"justifying", "difficulty":"medium"},
{"word":"kangaroo", "difficulty":"medium"},
{"word":"librarian", "difficulty":"medium"},
{"word":"monetary", "difficulty":"medium"},
{"word":"notorious", "difficulty":"medium"},
{"word":"obviously", "difficulty":"medium"},
{"word":"photogenic", "difficulty":"medium"},
{"word":"quantify", "difficulty":"medium"},
{"word":"rotation", "difficulty":"medium"},
{"word":"symphony", "difficulty":"medium"},
{"word":"tribunal", "difficulty":"medium"},
{"word":"universal", "difficulty":"medium"},
{"word":"viscosity", "difficulty":"medium"},
{"word":"xylophone", "difficulty":"medium"},
{"word":"yellowish", "difficulty":"medium"},
{"word":"zealous", "difficulty":"medium"},
{"word":"artisananlly", "difficulty":"hard"},
{"word":"boisterously", "difficulty":"hard"},
{"word":"cartographer", "difficulty":"hard"},
{"word":"depreciation", "difficulty":"hard"},
{"word":"expectations", "difficulty":"hard"},
{"word":"fictitiously", "difficulty":"hard"},
{"word":"gratuitous", "difficulty":"hard"},
{"word":"happenstance", "difficulty":"hard"},
{"word":"indignation", "difficulty":"hard"},
{"word":"juxtaposition", "difficulty":"hard"},
{"word":"kinesthetic", "difficulty":"hard"},
{"word":"luminescence", "difficulty":"hard"},
{"word":"mesopotamia", "difficulty":"hard"},
{"word":"neuroscience", "difficulty":"hard"},
{"word":"overwhelming", "difficulty":"hard"},
{"word":"photographic", "difficulty":"hard"},
{"word":"quantiatively", "difficulty":"hard"},
{"word":"rhinoceros", "difficulty":"hard"},
{"word":"superimpose", "difficulty":"hard"},
{"word":"titration", "difficulty":"hard"},
{"word":"unilaterally", "difficulty":"hard"},
{"word":"verbatim", "difficulty":"hard"},
{"word":"wonderstruck", "difficulty":"hard"},
{"word":"xeriscape", "difficulty":"hard"},
{"word":"yesternight", "difficulty":"hard"},
{"word":"zoology", "difficulty":"hard"}
]

var newgame = new HangmanGame(words);
