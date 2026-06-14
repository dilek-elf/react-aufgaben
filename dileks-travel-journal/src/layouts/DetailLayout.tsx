import type { ReactNode } from 'react'

// This layout shows main content on the left and a sidebar on the right
// It receives the page content (children) and the sidebar info as props
type DetailLayoutProps = {
  children: ReactNode
  bestTimeToVisit: string
  bookingTip: string
}

function DetailLayout({ children, bestTimeToVisit, bookingTip }: DetailLayoutProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Main content takes 2 columns */}
      <div className="md:col-span-2">{children}</div>

      {/* Sidebar takes 1 column */}
      <aside className="card bg-base-200 p-4 h-fit">
        <h3 className="font-bold mb-2">Quick Facts</h3>
        <p className="mb-2">
          <span className="font-semibold">Best time to visit:</span> {bestTimeToVisit}
        </p>
        <p>
          <span className="font-semibold">Booking tip:</span> {bookingTip}
        </p>
      </aside>
    </div>
  )
}

export default DetailLayout