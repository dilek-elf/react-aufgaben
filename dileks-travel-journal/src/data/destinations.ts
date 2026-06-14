// This is my travel destination data

// I have imported my own photos from the assets folder
import baliImg from '../components/photos/bali.jpeg'
import tverstedImg from '../components/photos/tversted.jpeg'
import milanoImg from '../components/photos/milano.jpeg'
import amsterdamImg from '../components/photos/amsterdam.jpeg'
import romeImg from '../components/photos/rome.jpeg'
import zurichImg from '../components/photos/zurich.jpeg'
import hurghadaImg from '../components/photos/hurghada.jpeg'

// This defines the "shape" of my destination object and applies all.
export interface Destination {
  id: string
  name: string
  continent: string
  description: string
  image: string
  bestTimeToVisit: string
  bookingTip: string
}

// An array of destination objects, this is my "database"
export const destinations: Destination[] = [
  {
    id: 'bali',
    name: 'Bali',
    continent: 'Asia',
    description: 'Indonesia - Lush rice terraces, beach sunsets and a calm island vibe.',
    image: baliImg,
    bestTimeToVisit: 'April to October (dry season)',
    bookingTip: 'Book flights 3-4 months ahead for the best prices, not forget the accomendation',
  },
  {
    id: 'tversted',
    name: 'Tversted',
    continent: 'Europe',
    description: 'Denmark - A quiet coastal village with dunes and the North Sea.',
    image: tverstedImg,
    bestTimeToVisit: 'June to August (summer season)',
    bookingTip: 'Book holiday homes early, summer spots fill up fast, very popular',
  },
  {
    id: 'milano',
    name: 'Milano',
    continent: 'Europe',
    description: 'Italy - Fashion, design and tasteful Italian food.',
    image: milanoImg,
    bestTimeToVisit: 'April to June or September to October',
    bookingTip: 'Avoid Fashion Week dates unless thats your goal. Choose local places for the best price.',
  },
  {
    id: 'amsterdam',
    name: 'Amsterdam',
    continent: 'Europe',
    description: 'Holland - Canals, bikes and cozy cafés everywhere.',
    image: amsterdamImg,
    bestTimeToVisit: 'March to May (tulip season, if you are interested)',
    bookingTip: 'Book museum tickets online in advance to skip lines and safe the half day.',
  },
  {
    id: 'rome',
    name: 'Rome',
    continent: 'Europe',
    description: 'Italy - Ancient ruins, incredible pasta and timeless charm.',
    image: romeImg,
    bestTimeToVisit: 'April to June or September to October',
    bookingTip: 'Book the Colosseum and Vatican tickets online to skip long lines.',
  },
  {
    id: 'zurich',
    name: 'Zürich',
    continent: 'Europe',
    description: 'Switzerland - Clean lakes, mountains and Swiss chocolate.',
    image: zurichImg,
    bestTimeToVisit: 'June to September (warm hiking season)',
    bookingTip: 'Hotels are quit expensive but book early to find better rates.',
  },
  {
    id: 'hurghada',
    name: 'Hurghada',
    continent: 'Africa',
    description: 'Egypt - Red Sea diving, Sun and beach resorts.',
    image: hurghadaImg,
    bestTimeToVisit: 'October to April (cooler, dry season)',
    bookingTip: 'All-inclusive resorts often have better deals in low season months.',
  },
]