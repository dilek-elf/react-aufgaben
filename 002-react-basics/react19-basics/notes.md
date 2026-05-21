## Project Structure

- **src** is where I write all my React code. Every component and logic file goes in here.

- **public** is for static files like images. Vite does not touch these files.

- **index.html** is the only HTML file in the project. It has a div with the id "root" where React renders everything.

- React is bound to the _DOM_ in `main.jsx`. It finds the root div and puts the App component inside it.

- **main.jsx** starts the whole app and loads **App.jsx**. App is the first component that actually shows something on the screen.

## Entry Point Flow

- **index.html** is loaded first by the browser — it has the root div.
- **main.jsx** is loaded next — it connects React to that root div.
- **App.jsx** provides the visible interface — everything the user sees starts here.
