console.log("JS file is connected HTML")

 var cardOne = "queen"
 var cardTwo = "queen"
 var cardThree = "king"
 var cardFour = "king"

 if (cardOne === cardTwo) {
	alert('You found a match!');	
	} else {
	alert('Sorry, try again.');
 }

 if (cardThree === cardFour) {
	alert('You found a match!');	
	} else {
	alert('Sorry, try again.');
 }

var board = document.getElementById('game-board');

var cards = ["queen", "queen", "king", "king",];

var cardsInPlay = []

function createBoard() {

	for (var i = 0; i< cards.length; i++) {
		var cardOne = document.createElement('div');
		cardOne.className = 'card';
		board.appendChild(cardOne);
		return this;
	}

	for (var i = 0; i < cards.length; i++) {
		var cardTwo = document.createElement('div');
		cardTwo.className = 'card';
		board.appendChild(cardTwo);
		return this;
	}

	for (var i = 0; i < cards.length; i++) {
		var cardThree = document.createElement('div');
		cardThree.className = 'card';
		board.appendChild(cardThree);
		return this;
	}

	for (var i = 0; i < cards.length; i++) {
		var cardFour = document.createElement('div');
		cardFour.className = 'card';
		board.appendChild(cardFour);
		return this;
	}

}



