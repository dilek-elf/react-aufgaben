import { createFileRoute } from '@tanstack/react-router'

// '/about' means this page shows at localhost:5173/about
export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hi, I'm Dilek! I love traveling and discovering local kitchens wherever
        I go. When I'm not exploring new places, you'll find me at home reading
        or baking.
      </p>
    </div>
  )
}