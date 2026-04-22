# 🎮 Vanilla JS Tic-Tac-Toe

A fully functional, dynamically sized 2-player Tic-Tac-Toe game built entirely with Vanilla JavaScript, SCSS, and HTML. This project was built with a strong focus on clean architecture, state management, and accessibility.

## ✨ Features

- **2-Player Gameplay:** Classic X and O turn-based gameplay.
- **Dynamic Win Detection:** Custom algorithm that calculates wins across rows, columns, and diagonals based on the grid size.
- **Full Keyboard Accessibility:** \* Use `Arrow Keys` (Up, Down, Left, Right) to navigate the grid.
  - Press `Enter` to place your mark.
  - Seamless "Pac-Man style" wrapping on row edges for better UX.
- **Draw Detection & Reset:** Automatically detects ties and includes a manual reset button to clear the board.
- **Modern Styling:** Built with SCSS, utilizing CSS Custom Properties for easy theming and state-based styling (e.g., different colors for X and O).

## 🛠️ Technologies Used

- **HTML5:** Semantic markup and accessibility attributes (`role`, `tabindex`).
- **SCSS/CSS3:** Modular styling architecture (Variables, Reset, Global, Style, Responsive).
- **Vanilla JavaScript (ES6+):** No frameworks. Uses ES Modules, event delegation, and 2D array matrix logic for game state tracking.

## 🚀 Getting Started

Since this project uses ES Modules (`<script type="module">`), you will need to serve it over a local web server (opening the file directly via `file://` in the browser will result in CORS errors).

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MostafaGamalBisher/XO-Tic-Tac-Toe
   ```
2. **Navigate to the project folder:**
   `cd <XO-Tic-Tac-Toe>`

3. **Run a local development server:**

`If you use VS Code, install the Live Server extension and click "Go Live".`

`Alternatively, if you have Node/npm installed, you can use a tool like Parcel (which was used to structure this project's SCSS) or npx serve.`

## 🧠 How to Play

1. **Player 1 starts as X.**

2. Click any empty cell (or use Arrow Keys + Enter) to place your mark.

3. The game automatically switches to Player 2 (O).

4. The first player to get 3 in a row (horizontally, vertically, or diagonally) wins!

5. If all cells are filled and no one has won, the game declares a Draw.

6. Click the Reset button to play again.
