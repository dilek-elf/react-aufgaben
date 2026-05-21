function LearningStatus() {
  return (
    <section>
      <h2>Learning Status</h2>
      <p>
        Day 2 of React. Getting familiar with components and project structure.
      </p>
    </section>
  );
}

function App() {
  return (
    <div>
      <section>
        <h1>React 19 Basics</h1>
        <p>My personal learning project for React 19 with Vite.</p>
      </section>

      <section>
        <h2>Environment Status</h2>
        <ul>
          <li>Node.js installed</li>
          <li>npm installed</li>
          <li>Vite project running</li>
          <li>React 19 active</li>
        </ul>
      </section>

      <section>
        <h2>Next Steps</h2>
        <ul>
          <li>Understand components</li>
          <li>Learn how props work</li>
          <li>Learn how state works</li>
        </ul>
      </section>

      <LearningStatus />
    </div>
  );
}

export default App;
