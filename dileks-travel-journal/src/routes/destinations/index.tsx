/* eslint-disable react-refresh/only-export-components */
import { createFileRoute, Link } from '@tanstack/react-router'
import { destinations } from '../../data/destinations'
import DestinationCard from '../../components/molecules/DestinationCard'

// This defines what search params this route can have
// '?continent=europe' will be validated and typed
type DestinationsSearch = {
  continent?: string
}

export const Route = createFileRoute('/destinations/')({
  // validateSearch checks and types the URL search params
  validateSearch: (search: Record<string, unknown>): DestinationsSearch => {
    return {
      continent: search.continent as string | undefined,
    }
  },
  component: DestinationsPage,
})

function DestinationsPage() {
  // Reads the current search params from the URL
  const { continent } = Route.useSearch()

  // If a continent is selected, filter the list — otherwise show all
  const filteredDestinations = continent
    ? destinations.filter((dest) => dest.continent === continent)
    : destinations

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Destinations</h1>

      {/* Filter buttons — these update the URL search params */}
      <div className="flex gap-2 mb-4">
        <Link to="/destinations/" search={{ continent: undefined }} className="btn btn-sm">
          All
        </Link>
        <Link to="/destinations/" search={{ continent: 'europe' }} className="btn btn-sm">
          Europe
        </Link>
        <Link to="/destinations/" search={{ continent: 'asia' }} className="btn btn-sm">
          Asia
        </Link>
        <Link to="/destinations/" search={{ continent: 'africa' }} className="btn btn-sm">
          Africa
        </Link>
      </div>

      {/* grid layout for destination cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* each card is now its own component — DestinationCard */}
        {filteredDestinations.map((dest) => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
      </div>
    </div>
  )
}