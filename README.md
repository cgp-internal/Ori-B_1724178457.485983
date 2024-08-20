Pong Game README
===============

Introduction
------------

This is a simple Pong game implemented using the Canvas API and JavaScript. It utilizes the following dependencies:

* **canvasAPI.js**: Exposes `renderGame` and `handleInput` functions for game rendering and user input handling.
* **pong.js**: Exposes `gameLogic` and `userInputHandler` functions for game logic and user controls.

How to Run
----------

1. Open a terminal and navigate to the project directory.
2. Run the `run.sh` script to install Node, initialize the project, and open the game in your default browser.
3. The game will be available at http://localhost:8080.

Game Controls
-------------

* Move the left paddle up: W key
* Move the left paddle down: S key
* Move the right paddle up: Up arrow key
* Move the right paddle down: Down arrow key

Gameplay
--------

* The game starts with a score of 0-0.
* Hit the ball with your paddle to earn points.
* If the ball hits the edge of the screen, the opposite player scores.
* The game continues until one player reaches a score of 11.

Note
----

This game is a basic implementation of Pong and may not have all the features you would expect from a full game.