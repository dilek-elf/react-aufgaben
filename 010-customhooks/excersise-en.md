# Individual Learning Phase: Custom Hooks with `useToggle` in React 19

## Your Goal

You will build a small UI in React 19 with reusable toggle logic. You will extract repeatedly used hook logic from components and create your own custom hook named `useToggle`. In the end, you will use the hook in multiple components and have practically understood the difference between local hook logic within components and extracted custom hook logic.

## What you need

- A computer with Node.js and npm
- A React 19 project, e.g., with Vite
- An editor like VS Code
- A browser for testing
- Basic knowledge of `useState`, components, props, and events

## Schedule

- 10 min: Project preparation and setting up the target structure
- 20 min: Core Task 1
- 20 min: Core Task 2
- 25 min: Core Task 3
- 20 min: Core Task 4
- 15 min: Core Task 5
- 10 min: Optional extension tasks
- 10 min: Testing, cleanup, reflection

## Core Tasks

### Task 1:

Set up the starting project and basic UI structure
**Goal:** You will create a small React 19 project with several components that require a visible on/off state.

**Work Order:**
Create a new React project or use an existing empty project. Build a small page titled "Custom Hooks Playground". Create at least these three components:

- `FaqItem`
- `NotificationPanel`
- `ThemeSwitch`

Initially, place all three components directly in `App.jsx`.
In each component, a state should be toggleable:

- `FaqItem`: Show/hide answer
- `NotificationPanel`: Open/close panel
- `ThemeSwitch`: Toggle text between "Light" and "Dark"

Initially, use **your own local `useState` logic** in each component.

**Expected Result / Target State:**
You have a functional React 19 project with three visible components. Each component can independently toggle a Boolean state.

### Task 2:

Make duplicate hook logic visible
**Goal:** You will practically recognize why repetitive hook logic should be extracted.

**Work Order:**
Review your three components and mark the places where logic repeats. Pay special attention to:

- `useState(false)` or similar initial values
- Event handlers like `setOpen(!open)` or `setVisible(v => !v)`
- Similar button labels and status indicators

Note directly in the code as a comment at least three places where the same or very similar logic appears multiple times. Also, briefly state in a comment why extraction would be beneficial, e.g., better reusability, less duplicated code, clearer components.

**Expected Result / Target State:**
You have marked recognizable repetitions in several components and can understand in the code which logic is suitable for a custom hook.

### Task 3:

Create your first custom hook `useToggle`
**Goal:** You will extract the repeated toggle logic into your own hook.

**Work Order:**
Create a folder `src/hooks` and create a file `useToggle.js` or `useToggle.jsx` within it. Implement a custom hook with this structure:

- Name starts with `use`
- It internally manages a Boolean state
- It accepts an optional initial value
- It returns the current state and a function to toggle it

Use React hooks correctly within the hook and pay attention to clear naming. Do not use the hook everywhere immediately; first, test it in **one** component, e.g., in `FaqItem`.

**Expected Result / Target State:**
There is a dedicated `useToggle` hook that is technically correctly structured, encapsulates a Boolean state, and is successfully used in at least one component.

### Task 4:

Use `useToggle` in multiple components
**Goal:** You will use your custom hook in a reusable way in different components.

**Work Order:**
Replace the local toggle logic in all three components with your custom hook. Adjust the code so that the components continue to function independently. Use different initial values, e.g.:

- `FaqItem` starts closed
- `NotificationPanel` starts opened or closed
- `ThemeSwitch` starts in light or dark mode

Ensure that each component still has its own display and texts, but the toggle logic is no longer duplicated.

**Expected Result / Target State:**
All three components use `useToggle`. The components are shorter, more understandable, and no longer contain unnecessarily duplicated toggle logic.

### Task 5:

Extend the hook and round off the application
**Goal:** You will make your custom hook more practical for use in realistic React 19 components.

**Work Order:**
Extend `useToggle` so that, in addition to the state and the toggle function, the hook also provides specific functions to explicitly set the state, e.g.:

- turn on / open
- turn off / close

Use these additional capabilities meaningfully in at least two components. Examples:

- `NotificationPanel` gets buttons for "Open", "Close", and "Toggle"
- `FaqItem` shows and hides the answer via a single toggle button
- `ThemeSwitch` explicitly sets to Light or Dark

Afterward, clean up your code:

- descriptive variable names
- clean imports
- no unused states or functions
- brief comments only where they truly help

**Expected Result / Target State:**
Your hook is more flexible than at the beginning and is used meaningfully in several components. The components are clearly structured, and the code is clean.

## Extension Tasks

### Extension Task 1: Collaborative Demo Page with Realistic UI

**Goal:** You will use your hook in a small, cohesive interface.

**Work Order:**
Extend `App.jsx` into a small demo page, e.g., for a dashboard, a support center, or a settings page. Use `useToggle` in at least four UI elements, e.g.:

- FAQ answer
- Side menu
- Info box
- Theme switcher

Give each area a clear heading and a simple visual structure.

**Expected Result / Target State:**
You have a small, cohesive React 19 interface where `useToggle` is used multiple times in realistic UI situations.

### Extension Task 2: Make the hook more robust

**Goal:** You will improve the usability of your custom hook.

**Work Order:**
Review your hook for sensible usage and extend it so that it remains readable and easy to use. Possible improvements:

- clearer return structure
- consistent function names
- more understandable variable names
- optional start value cleanly documented

Then test your hook again in all existing components.

**Expected Result / Target State:**
Your hook is cleanly readable and can be used in different components without second thought.

### Extension Task 3: Design a second very small custom hook

**Goal:** You will practice the basic structure of another custom hook.

**Work Order:**
Additionally, create a very small custom hook of your choice that fits your demo page. Examples:

- `useDocumentTitle` for the page title
- `useInput` for a simple input field
- `useCounter` for a small counter area

Use this hook in exactly one suitable component. Keep the hook deliberately small and clear.

**Expected Result / Target State:**
You have created a second simple custom hook in addition to `useToggle` and used it in one component.

## Important Notes

- Always name your custom hook with the `use` prefix.
- Use React Hooks only within functional components or other hooks.
- Extract only logic that actually repeats or is reusable.
- Ensure that your hook encapsulates general logic and does not know too specific UI details.
- After each change, check in the browser if the behavior is still correct.
- If you finish quickly, invest the remaining time in clean naming and clear code.

## Reflection Questions

- Where exactly did hook logic repeat in your components?
- What became simpler in your code because of the custom hook?
- How do you recognize that `useToggle` is a meaningful name?
- Which parts belong in the hook and which remain in the component?
- In which other React 19 components could you directly reuse `useToggle`?
- When would you **not** extract logic into a custom hook?

---