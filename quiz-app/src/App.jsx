// App.jsx is the main entry point of our app
// React loads this component first

import { useState } from 'react'
import QuestionCard from './components/QuestionCard'

// myy quiz data is an array of question objects
// each object has a question text, an array of answers and the correct answer
// 10 quiz questions about everything I have learned in React so far
const questions = [
  {
    question: "What is React?",
    answers: ["A database", "A JavaScript library for building UIs", "A CSS framework", "A backend language"],
    correct: "A JavaScript library for building UIs"
  },
  {
    question: "What is a React component?",
    answers: ["A CSS class", "A database table", "A reusable UI building block", "An HTML file"],
    correct: "A reusable UI building block"
  },
  {
    question: "What does JSX stand for?",
    answers: ["JavaScript XML", "Java Syntax Extension", "JSON XML", "JavaScript Extra"],
    correct: "JavaScript XML"
  },
  {
    question: "What hook do you use to store state in a component?",
    answers: ["useEffect", "useRef", "useContext", "useState"],
    correct: "useState"
  },
  {
    question: "What does the key prop do in a list?",
    answers: ["Styles the element", "Helps React track each list item", "Makes the item clickable", "Sorts the list"],
    correct: "Helps React track each list item"
  },
  {
    question: "What is props in React?",
    answers: ["Internal component memory", "Data passed from parent to child", "A CSS variable", "A React hook"],
    correct: "Data passed from parent to child"
  },
  {
    question: "What is useEffect used for?",
    answers: ["Storing state", "Styling components", "Running side effects like API calls", "Creating components"],
    correct: "Running side effects like API calls"
  },
  {
    question: "What does useRef NOT do?",
    answers: ["Store a value across renders", "Trigger a re-render when changed", "Reference a DOM element", "Persist a value"],
    correct: "Trigger a re-render when changed"
  },
  {
    question: "What is a Custom Hook?",
    answers: ["A built-in React function", "A CSS trick", "Your own function that uses React hooks", "A component without JSX"],
    correct: "Your own function that uses React hooks"
  },
  {
    question: "What tool do we use to create a React project?",
    answers: ["Webpack", "Parcel", "Vite", "Gulp"],
    correct: "Vite"
  }
]

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // selectedAnswer stores what the user clicked - starts as null (nothing selected yet)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  // score counts how many correct answers the user gave - starts at 0
  const [score, setScore] = useState(0)

  // check if we have reached the end of the questions array
  const isFinished = currentIndex >= questions.length

  // this function runs when the user clicks an answer button
  function handleAnswer(answer) {
    setSelectedAnswer(answer)

    // check if the clicked answer matches the correct answer of the current question
    // if yes - increase score by 1
    if (answer === questions[currentIndex].correct) {
      setScore(score + 1)
    }
  }

  // this function runs when user clicks "Next Question"
  function handleNext() {
    // go to next question
    setCurrentIndex(currentIndex + 1)
    // reset selected answer to null for the new question
    setSelectedAnswer(null)
  }

  return (
    // min-h-screen - full page height
    // bg-gray-900 - dark background
    // text-white - white text
    // flex items-center justify-center - center everything on the page
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">

      {/* max-w-xl - limit width so it doesn't stretch too wide */}
      {/* w-full - full width on small screens */}
      {/* p-8 - padding inside the card */}
      {/* bg-gray-800 - slightly lighter card background */}
      {/* rounded-2xl - rounded corners */}
      <div className="max-w-xl w-full p-8 bg-gray-800 rounded-2xl">

        {/* text-3xl - large text, font-bold - bold, mb-6 - margin bottom, text-center - centered */}
        <h1 className="text-3xl font-bold mb-6 text-center">Quiz App</h1>

        {isFinished ? (
          // show final score when quiz is done
          <h2 className="text-2xl text-center">
            Quiz finished! Your score: {score} / {questions.length}
          </h2>
        ) : (
          <>
            <QuestionCard
              question={questions[currentIndex].question}
              answers={questions[currentIndex].answers}
              onAnswer={handleAnswer}
              selectedAnswer={selectedAnswer}
              correctAnswer={questions[currentIndex].correct}
              />

            {/* only show Next button after an answer was selected */}
            {selectedAnswer && (
              // mt-4 - margin top
              // w-full - full width button
              // bg-blue-600 hover:bg-blue-700 - blue button that darkens on hover
              // py-2 px-4 - padding top/bottom and left/right
              // rounded-lg - rounded corners
              <button
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg"
                onClick={handleNext}
              >
                Next Question
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}