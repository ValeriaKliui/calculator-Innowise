# Task

[Link to Task Document](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8)

# Getting Started

## Prerequisites

Ensure the following are installed on your system:

- Node.js (v16 or later recommended)
- npm (comes with Node.js)

### 1. Clone the Repository

Clone the project repository and navigate into the directory:

```git clone <https://github.com/ValeriaKliui/calculator-Innowise>
cd calculator
```

### 2. Install Dependencies

Install the required npm packages:

```
npm install
```

### 3. Run the App

Start the development server:

```
npm run dev
```

The app will be served at http://localhost:3000.

### 4. Build the App

Generate a production-ready build:

```
npm run build
```

The build will be output to the dist directory.

### 5. Lint and Format Code

Run ESLint to check for and fix code issues:

```
npm run lint
```

### 6. Deploy to GitHub Pages

Deploy the app to GitHub Pages:

```
npm run deploy
```

# Project Structure

### Structure of `public/`:

```plaintext
public/
├── index.html                         # HTML file that serves as the entry point to the app.
└── favicon.ico                        # The favicon that appears in the browser tab.
```

### Structure of `src/`:

```plaintext
src/
├── constants/                         # Reusable constants for the application.
│   ├── calculator.js                  # Calculator related constants.
│   └── regex.js                       # Regular expressions used across the project.
├── features/                          # JavaScript files for specific features
│   ├── createOperatorActions.js       # Mapping calculator operators to corresponding handlers.
│   ├── onChangeValue.js               # Handles changes in calculator input values.
│   ├── onClickCalculateValue.js       # Logic to perform calculations upon clicking calculator buttons.
│   ├── onKeyboardInput.js             # Handles keyboard input.
│   ├── setInitTheme.js                # Sets the initial theme of the application.
│   └── toggleTheme.js                 # Toggles between different themes.
├── handlers/                          # Action handlers (handling math operations).
├── styles/                            # SCSS files for styling the application.
├── utils/                             # Utility functions organized into categories.
│   ├── math/                          # Mathematical utility functions.
│   ├── string/                        # String manipulation functions.
│   └── ui/                            # Utility functions for UI interactions.
└── index.js                           # The main JavaScript file that runs the app.
```
