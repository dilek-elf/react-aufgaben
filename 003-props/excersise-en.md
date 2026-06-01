# Individual Learning Phase: Safely Applying First React Components and JSX

## Your Goal

You will create a small landing page in a React 19 project using several of your own components. In doing so, you will practice building functional components, organizing them into files, and confidently using JSX and dynamic content.

## What You Need

- A running React 19 project
- An editor, e.g., VS Code
- Node.js and npm
- A browser for testing
- Optional: Browser DevTools

## Time Plan

- 10 minutes: Review project and understand initial state
- 20 minutes: Create first custom component directly in `App.jsx`
- 20 minutes: Extract component into its own file and import it
- 25 minutes: Build a second component with dynamic JSX content
- 25 minutes: Assemble multiple components into a small page
- 20 minutes: Extend, review, refactor, and reflect

## Basic Tasks

### Task 1:

Project overview and initial orientation
**Goal:** You understand where components are located in your React 19 project and how `App.jsx` functions as the entry point.

**Work Instruction:**
Open your React project and start the application. Examine the `App.jsx` file closely. Find out:

- where the main component is defined
- what the component returns
- where JSX is used
- which parts look like HTML but are JSX

Afterward, briefly note in a comment line in `App.jsx` what purpose this file serves in your application. Remove unnecessary demo content so you can start with a simple, clean base.

**Expected Result / Desired State:**
The application runs, `App.jsx` is cleaned up, and you clearly recognize the structure of a functional component with `return` and JSX.

### Task 2:

Your first custom component
**Goal:** You create a simple functional component and integrate it into `App.jsx`.

**Work Instruction:**
Create a new component named `WelcomeBox` in `App.jsx`. The component should display a small welcome area, for example, with:

- a heading
- a short welcome text
- a note that the page was created with React

Integrate `WelcomeBox` below a main heading in `App.jsx`. Make sure you use valid JSX.

**Expected Result / Desired State:**
Your application correctly renders a custom component. You are using at least two components: `App` and `WelcomeBox`.

### Task 3:

Organizing components into files
**Goal:** You extract a component into its own file and import it correctly.

**Work Instruction:**
Create a `components` folder if it doesn't already exist. Move `WelcomeBox` into its own file, e.g., `components/WelcomeBox.jsx`. Then, import the component back into `App.jsx`.

Slightly extend `WelcomeBox`, for example, by:

- an additional paragraph
- a small list with 2–3 items
- a button without functionality

Pay special attention to typical JSX rules:

- only one common root element
- `className` instead of `class`
- correctly closed tags

**Expected Result / Desired State:**
`WelcomeBox` is in its own file and is cleanly integrated into `App.jsx`. The application runs without errors.

### Task 4:

Dynamic content with JSX
**Goal:** You use curly braces to dynamically display values in JSX.

**Work Instruction:**
Create a second component in its own file, e.g., `components/ProfileCard.jsx`. Display a small profile card within it. Use variables or constants within the component for content such as:

- Name
- Role
- City
- Number of completed exercises
- Current year

Output these values using curly braces in JSX. Additionally, add at least one simple calculated output, e.g., text like "X exercises left until daily goal," where `X` is calculated from two numbers.

**Expected Result / Desired State:**
The profile card displays multiple dynamic contents. You use JSX expressions correctly and place curly braces in appropriate places.

### Task 5:

Building a small landing page from multiple components
**Goal:** You assemble multiple components into a realistic mini-page.

**Work Instruction:**
Build a small landing page for a learning dashboard or developer profile in `App.jsx`. Use at least these sections:

- Page heading in `App`
- `WelcomeBox`
- `ProfileCard`

Additionally, add a third small component, e.g., `TodayFocus`, `NextSteps`, or `InfoBox`. This component should also be in its own file and contain at least the following JSX elements:

- a heading
- a short text
- a list or section with 2–3 entries

Design the page so that the content logically fits together.

**Expected Result / Desired State:**
Your application consists of multiple functional components organized in separate files and assembled in `App.jsx`. The page looks like a simple but complete React interface.

## Extension Tasks

### Extension Task 1: Deliberately find and fix JSX errors

**Goal:** You recognize common beginner errors in JSX more quickly.

**Work Instruction:**
Consciously go through your components and check them for typical sources of error. Pay attention to, among other things:

- unclosed tags
- incorrect attribute names like `class` instead of `className`
- multiple adjacent JSX elements without a common root element
- incorrectly placed curly braces
- comments in JSX

Improve all parts that seem problematic or inconsistent.

**Expected Result / Desired State:**
Your code is consistent, JSX-compliant, and easy to read. You can specifically name typical error locations.

### Extension Task 2: Incorporate small content variations

**Goal:** You deepen your understanding of handling dynamic values in JSX.

**Work Instruction:**
Extend one of your components so that content visibly changes depending on variables. Examples:

- a greeting text for morning or afternoon
- a status like "Active today" or "Not yet started"
- a hint text if fewer than 2 exercises are open

Use simple variables and expressions directly in JSX for this.

**Expected Result / Desired State:**
At least one component displays content based on a condition or calculation.

### Extension Task 3: Improve structure and file naming

**Goal:** You ensure a clean project structure.

**Work Instruction:**
Check your filenames, import paths, and component names. Standardize them according to a clear pattern, e.g.:

- Component name in PascalCase
- one component per file
- meaningfully named `components` folder

Add short, descriptive content to each component so that its purpose is evident just by reading the file.

**Expected Result / Desired State:**
Your project is clearly structured. Components, filenames, and imports fit cleanly together.

## Important Notes

- Always write component names with a capital initial letter.
- In JSX, ensure exactly one common root element per component.
- Use `className` instead of `class`.
- Use curly braces only for JavaScript expressions within JSX.
- Close all tags cleanly.
- Work incrementally: first create component, then display, then extend.
- After each change, immediately check the browser and console for errors.

## Reflection Questions

- How do you recognize that something is JSX and not regular HTML?
- What differences between HTML and JSX did you notice while working?
- What improved when you extracted components into their own files?
- In which places were curly braces useful in JSX?
- Which JSX errors did you have to correct?
- Which of your components would you develop further next?