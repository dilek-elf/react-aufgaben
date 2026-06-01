# Individual Learning Phase: Interactive Product List with Props and Event Handling

## Your Goal

You will build a small React-19 application where you display products, pass them as props to child components, and process user interactions with event handlers. By the end, you will have an interactive product list with a search field, selection functionality, and an evaluation in the parent component.

## What you need

- A runnable React-19 project, e.g., created with Vite
- A code editor
- A browser
- Basic structure with `App.jsx` and a `components` folder
- Optional: a simple CSS file for better readability

## Time Planning

- 10 minutes: Start project and create structure
- 20 minutes: Basic Task 1
- 20 minutes: Basic Task 2
- 20 minutes: Basic Task 3
- 25 minutes: Basic Task 4
- 15 minutes: Basic Task 5
- 10 minutes: Extension tasks or refinement

## Basic Tasks

### Task 1:

Prepare product data and use initial Props  
**Goal:** You pass static and dynamic props from a parent component to a child component.  
**Instructions:** In `App.jsx`, create a small product list as an array of objects, e.g., with `id`, `name`, `price`, and `inStock`. Additionally, create a child component `ProductCard`. First, pass individual static props to `ProductCard`, e.g., a fixed title. Then, pass dynamic props from your product object. Display at least the name, price, and availability status on the card.  
**Expected Result / Target State:** You see at least one product card in the browser that receives data via props and displays it correctly. You have used both static and dynamic props.

### Task 2:

Render multiple child components with Props  
**Goal:** You read props in components and use them for multiple data sets.  
**Instructions:** Now, render not just one product, but all products from your array. Use `map()` in `App.jsx` for this and pass the necessary props to each `ProductCard`. Enhance `ProductCard` with a readable display, e.g., price with a Euro sign and text like "In Stock" or "Not available".  
**Expected Result / Target State:** Multiple products are displayed as a list or card view. Each card correctly reads its props and displays individual content.

### Task 3:

Trigger a click event in a child component  
**Goal:** You use simple event handlers for user interactions with `onClick`.  
**Instructions:** Add a "Select" button to `ProductCard`. In `App.jsx`, create a state that stores which product was last selected. Pass a function as a prop to `ProductCard` that is called when the button is clicked. The child component should trigger the event, but the processing should take place in `App.jsx`. Display the name of the last selected product above the product list.  
**Expected Result / Target State:** When "Select" is clicked on a product card, the current state in the parent component is updated. The name of the last selected product is visibly displayed.

### Task 4:

Implement a search field with onChange  
**Goal:** You process inputs with `onChange` and control the display with them.  
**Instructions:** Create a `SearchBar` component with an input field. Pass the current search text and a change function as props. Manage the state for the search text in `App.jsx`. Filter the product list so that only products whose name contains the entered text are displayed. Ensure that the filtering reacts directly to every input.  
**Expected Result / Target State:** You can enter text into a search field, and the product list is filtered live. The input is processed via `onChange`, and the function for it comes from the parent component.

### Task 5:

Display an evaluation as a separate component with Props  
**Goal:** You use props to pass calculated information to another component.  
**Instructions:** Create a `ProductSummary` component. Pass it at least the following information via props: total number of all products, number of currently visible products after filtering, and the name of the last selected product. Display this data clearly. If no product has been selected yet, a meaningful hint text should appear.  
**Expected Result / Target State:** Above or below the product list, a summary is displayed that is supplied exclusively via props and visibly updates with search or click actions.

## Extension Tasks

### Extension Task 1: Selection counter per product

**Goal:** You process repeated events and update data in the parent component.  
**Instructions:** In `App.jsx`, add logic to count how often each product has been selected. Display the current number of selections in each `ProductCard`. The counting should be managed in the parent component and passed back to the child components via props.  
**Expected Result / Target State:** Each click on "Select" increments the counter for the corresponding product. The display per product is updated correctly.

### Extension Task 2: Handle unavailable products differently

**Goal:** You link props with event behavior and display.  
**Instructions:** Ensure that products with `inStock: false` are clearly recognizable, e.g., by a hint text or a different visual representation. Additionally, disable the "Select" button for these products.  
**Expected Result / Target State:** Unavailable products are visually distinguishable and cannot be selected.

### Extension Task 3: Reset filter

**Goal:** You combine multiple event handlers in a small user interface.  
**Instructions:** Add a "Reset Filter" button. When clicked, the search field should be cleared, and the complete product list should reappear.  
**Expected Result / Target State:** After clicking, the input field is empty, and all products are displayed again.

## Important Notes

- Work step-by-step and test each task directly in the browser.
- Use clear prop names for each component, e.g., `name`, `price`, `onSelect`, `searchTerm`.
- Ensure that the state resides where the data should be managed.
- Pass functions to child components as props and call them there on events.
- Keep your components small and clear.
- If something doesn't work, first check the prop names, event handlers, and the browser console.

## Reflection Questions

- Where did you use static props, and where dynamic ones?
- Which data did you use directly in a component, and which did you receive via props?
- Why is it useful to manage the selected product name in `App.jsx`?
- How does an event travel from a child component to the parent component?
- What changed in your application when you integrated `onChange` for the search field?
- Which component had which responsibility in your solution?
