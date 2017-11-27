# Sharp Swiper

[live link](https://thrage1.github.io/sharpshooter/)

<div style="text-align: center">
  <img src="./assets/images/sharpshooter.gif" />
</div>

Sharp Swiper is a swiping game modeled after Fruit Ninja with a few tweaks.

## About
Sharp Swiper is a fun and interactive way to improve the speed and accuracy of a player with a mouse input. Rocks will fall at random intervals that decrease in time and increase in speed as the game continues. As the asteroids fall to the bottom of the screen swipe your cursor over the asteroids to destroy them. When 3 asteroids hit the ground, the game is over.

## Features
 - Highscores are stored via local storage
 - Smooth animations with both the position of the asteroids refreshing as well as the sprite rotation animation
 - Collision detection with mousePos function detects when a collision occurs and fires a sound via the saberon.mp3. Likewise if a collision isn't detected and move is detected the light saber hum sound fires (as long as a hum sound isn't already playing)
 - As game progresses the asteroids that fall past the bottom of the screen or as the asteroids are destroyed, the asteroids are recycled to the top of the screen allowing for improved efficiency
 - The speed of the falling asteroids increases by 0.5 % each time an asteroid is destroyed

## Wireframes

This will be a single screen game application, with links to my GitHub and LinkedIn pages.
Game controls will include a start a stop and a restart button.  

![wireframe](https://github.com/Thrage1/sharpshooter/blob/master/images/wireframe.png)

## Technologies

This project will implement
 - JavaScript
 - HTML5
 - CSS3
(More to be filled in)

## Implementation timeline

**Day 1**

 - Find and create all necessary sprites
 - Find and create all audio files
 - Find and implement the background and audio

**Day 2**

 - Begin implementing the logic of the asteroids
 - Create and link the buttons controlling the functionality of the game

**Day 3**

 - Implement the logic of the game
 - Add the cursor interaction with the asteroids

**Day 4**

 - fix and polish any code
