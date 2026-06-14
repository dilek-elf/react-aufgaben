import { createFileRoute } from '@tanstack/react-router'

// '/impressum' means this page shows at localhost:5173/impressum
export const Route = createFileRoute('/impressum')({
  component: ImpressumPage,
})

function ImpressumPage() {
  return (
    <div>
      <h1>Impressum</h1>
      <p>Dilek's Travel Journal</p>
      <p>This website was created for educational purposes.</p>
    </div>
  )
}