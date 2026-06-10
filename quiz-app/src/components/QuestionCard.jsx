// QuestionCard.jsx - this component shows ONE question and its answer buttons
// it receives data from App.jsx via props - it doesn't know anything on its own
// we need to tell it what it needs to know via props

function QuestionCard({ question, answers, onAnswer, selectedAnswer }) {
  // this is a React component - just a regular JavaScript function
  // { question, answers, onAnswer, selectedAnswer } is called "destructuring"
  // instead of writing props.question and props.answers everywhere
  // we unpack them directly in the function parameter
  // so when App.jsx uses <QuestionCard question="..." answers={[...]} />
  // React passes those values in here automatically

  // question - the question text, example: "What is the capital of France?"
  // answers - an array of strings, example: ["Paris", "London", "Berlin", "Madrid"]
  // onAnswer - function from App.jsx, called when user clicks an answer
  // selectedAnswer - the answer the user already clicked (or null)

  return (
    // return tells React: this is the HTML-like structure to render on screen
    <div>
      {/* curly braces {} in JSX mean: run JavaScript here */}
      {/* so {question} just displays the value of the question variable */}
     <h2 className="text-xl font-semibold mb-6">{question}</h2>

    {/* flex flex-col - stack buttons vertically */}
    {/* gap-3 - space between buttons */}
    <div className="flex flex-col gap-3">
      {/* answers.map() loops through every item in the answers array */}
      {/* for each item it creates one <button> element */}
      {/* (answer) is the current item in each loop step */}
      {/* => means: for each answer, return this button */}
      {answers.map((answer) => (
        // key is required by React for every item in a list
        // React uses it internally to track which button is which
        // without key React shows a warning and can behave unexpectedly
        <button
          key={answer}
          onClick={() => onAnswer(answer)}
          disabled={selectedAnswer !== null}
          className="w-full py-3 px-4 bg-gray-700 hover:bg-gray-600 rounded-lg disabled:opacity-50 text-left"
        >
           {/* display the answer text inside the button */}
          {answer}
        </button>
      ))}
    </div>
  </div>
  )
}

export default QuestionCard;