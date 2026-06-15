import { Link } from '@tanstack/react-router'
import Badge from '../atoms/Badge'
import type { Destination } from '../../data/destinations'

// This is a "molecule" has been built from smaller atoms like (Badge, title) a bit bigger then atom :D
type DestinationCardProps = {
  destination: Destination
}

function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link
      to="/destinations/$destinationId"
      params={{ destinationId: destination.id }}
      className="card bg-base-100 shadow-md hover:shadow-xl transition"
    >
      <figure>
        <img
          src={destination.image}
          alt={destination.name}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{destination.name}</h2>
        <Badge text={destination.continent} />
        <p>{destination.description}</p>
      </div>
    </Link>
  )
}

export default DestinationCard