import { Link } from '@tanstack/react-router'

// Navbar is an "organism" — a bigger section made of multiple elements
// It appears on every page (used inside RootLayout)
function Navbar() {
  return (
    <nav className="navbar bg-base-100 shadow-md flex-wrap">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">
          Dilek's Travel Journal
        </Link>
      </div>
      <div className="navbar-end">
        <Link to="/" className="btn btn-ghost">Home</Link>
        <Link to="/destinations/" className="btn btn-ghost">Destinations</Link>
        <Link to="/about" className="btn btn-ghost">About Me</Link>
        <Link to="/impressum" className="btn btn-ghost">Impressum</Link>
      </div>
    </nav>
  )
}

export default Navbar