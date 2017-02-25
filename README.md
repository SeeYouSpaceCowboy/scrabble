# Scrabble
This app is an interactive javascript-based 2-person game that models the traditional Scrabble Game by Hasbro. 

In this game, players get randomly delt hands of letter tiles pulled from the 100-tile Scrabble pile and they create words on the well-known 15x15 Scrabble board. Words are checked with AJAX web requests to a third-party dictionary API. A player who makes a successful word submission is awarded points based on the value of the played and adjacent letters. In the future, the app will support 2x and 3x bonus squares on the board.  Unsuccessful word submissions are denied, tiles are returned to the player's hand and the player loses his/her turn. No tile may be shifted or replaced after it has been played and scored.

The game ends when all letters have been drawn and one player uses his or her last letter, or when all possible plays have been made.

This Scrabble app was created as a project for the full-stack web developer course at the [Flatiron School](https://flatironschool.com/). The project utilizes [JavaScript](https://en.wikipedia.org/wiki/JavaScript), [jQuery](http://jquery.com/) and [AJAX web requests](http://api.jquery.com/jquery.ajax/) to the third-party API [WordsAPI](https://www.wordsapi.com/). 


## Install
To launch the app:
```
npm install
npm start
```

## Team

* [Mohammed Chisti](https://github.com/SeeYouSpaceCowboy)

* [Valerie McCarthy](https://github.com/ValerieMcCarthy)



