# Simon Says Game

This project is a web-based implementation of the classic "Simon Says" memory game. It was built as a learning exercise to practice using **jQuery** for DOM manipulation, event handling, and audio playback.

## URL

Hosted version of [SimonSays](https://guillaumeleberrebit.github.io/SimonSays/)

## Features

- Interactive Simon Says gameplay with four colored buttons
- Increasing difficulty as the sequence grows
- Sound effects for each button and game over
- Visual feedback for button presses and game over state
- Responsive design with custom styles

## How to Play

1. Open `index.html` in your web browser.
2. Press any key to start the game.
3. Watch the sequence of button flashes and sounds.
4. Repeat the sequence by clicking the colored buttons in the correct order.
5. The sequence gets longer with each level. If you make a mistake, the game ends and you can restart.

## Project Structure

```
.
├── game.js         # Main game logic (jQuery)
├── index.html      # HTML structure
├── styles.css      # Custom styles
└── sounds/         # Sound effects for each button and game over
    ├── blue.mp3
    ├── green.mp3
    ├── red.mp3
    ├── wrong.mp3
    └── yellow.mp3
```

## Technologies Used

- HTML5
- CSS3
- [jQuery](https://jquery.com/) (via CDN)

## What I Learned

- How to use jQuery for selecting elements, handling events, and manipulating the DOM
- Playing audio in the browser with JavaScript
- Implementing game logic and state management
- Creating responsive and interactive UI with CSS and jQuery

---

*This project was created as a learning exercise and is inspired by the classic Simon