**Node.js** runs JavaScript outside the browser — it's needed to start Vite and other build tools.
**npm** is Node's package manager — you use it to install libraries like React into a project.

## Vite: it converts JSX and modern JS into

something the browser can run, and gives us a live dev server with
instant reload on save. It does not need cpnfiguration just one command to start and project works.

**package.json** lists dependencies, scripts, and project metadata.
**index.html** is the main HTML file that serves as the entry point for the web application.
**src/main.jsx** connects React to the HTML by mounting the App component into the root div.
**src/App.jsx** the main App component; this is where the visible UI starts.

**"react": "^19.2.6"** means that I am using the version 19.2.6 of React.

## Build and npm Scripts

**npm run dev** starts a dev server just for you on your computer.It is fast but not optimized — only use it while coding.
**npm run build** creates a `dist` folder with the final version of your app, ready to put online.

**npm scripts** are shortcuts. Instead of typing a long command, I just type `npm run dev` and npm knows what to do,because the full command is saved in `package.json`.
