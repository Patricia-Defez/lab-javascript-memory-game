var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  this.cards.sort(function() {
    return Math.random() - 0.5;
  })

};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
 this.pairsClicked++;
 if(firstCard == secondCard){
   this.pairsGuessed += 1;
   return true;
 }else{
   this.pairsGuessed === this.pairsGuessed;
   return false;
 }


}

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed == 0){
    return false;
  }else if(this.pairsGuessed < 8){
    return false;
  }else if(this.pairsGuessed == 8){
    return true;
  }
};