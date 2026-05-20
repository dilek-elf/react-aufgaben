// A component is a reusable piece of UI
// ToolCard receives data from outside and displays it
function ToolCard(props) {
  return (
    <section>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>Used for: {props.usage}</p>
    </section>
  );
}

function App() {
  return (
    <div>
      <header>
        <h1>React 19 Overview</h1>
      </header>

      <main>
        <section>
          <h2>What is React?</h2>
          <p>React is a JavaScript library for building user interfaces.</p>
        </section>

        <section>
          <h2>What is React used for?</h2>
          <p>We use it to build interactive websites and single-page apps.</p>
        </section>

        <section>
          <h2>Role of React in modern frontend</h2>
          <ul>
            <li>Very popular in the industry</li>
            <li>Used by companies like Meta and Netflix</li>
            <li>Lots of tools and libraries built around it</li>
          </ul>
        </section>

        <section>
          <h2>React 19: Why this version?</h2>
          <p>
            It is the latest stable version. We start with it so we learn modern
            React from day one.
          </p>
        </section>

        <section>
          <h2>Tools of Modern Web Development</h2>

          {/* We reuse ToolCard three times with different data */}
          <ToolCard
            name="Node.js"
            description="Runs JavaScript outside the browser."
            usage="Required to run Vite and npm on your machine."
          />

          <ToolCard
            name="npm"
            description="The package manager for Node.js."
            usage="Installs React, Vite, and all other dependencies."
          />

          <ToolCard
            name="Vite"
            description="A fast build tool and dev server."
            usage="Starts the project locally and bundles it for production."
          />
        </section>
      </main>
    </div>
  );
}

export default App;
