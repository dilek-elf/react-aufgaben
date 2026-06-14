import { createFileRoute } from '@tanstack/react-router'

// this createFileRoute shows TanStack this file is a route
// this '/' means this is my homepage
export const Route = createFileRoute('/')({
  component: HomePage,
})

// This is the actual page where my component that gets displayed
function HomePage() {
  return (
    <div>
      <h1>Welcome to Dilek's Travel Journal</h1>
    </div>
  )
}