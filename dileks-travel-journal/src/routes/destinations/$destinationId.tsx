import { createFileRoute, Link } from '@tanstack/react-router'
import { destinations } from '../../data/destinations'
import DetailLayout from '../../layouts/DetailLayout'

// '$destinationId' is a dynamic part — it can be 'Rome', 'Bali', etc.
export const Route = createFileRoute('/destinations/$destinationId')({
  component: DestinationDetailPage,
})

function DestinationDetailPage() {
  // useParams gives me access to the dynamic part of the URL
  const { destinationId } = Route.useParams()

  // I find the destination that matches the id from the URL
  const destination = destinations.find((dest) => dest.id === destinationId)

  // if no destination matches, then show a message
  if (!destination) {
    return <p>Destination not found.</p>
  }

  return (
    <DetailLayout
      bestTimeToVisit={destination.bestTimeToVisit}
      bookingTip={destination.bookingTip}
    >
      <Link to="/destinations/" className="btn btn-ghost mb-4">
        ← Back to Destinations
      </Link>

      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />

      <h1 className="text-3xl font-bold mb-2">{destination.name}</h1>
      <p>{destination.description}</p>
    </DetailLayout>
  )
}