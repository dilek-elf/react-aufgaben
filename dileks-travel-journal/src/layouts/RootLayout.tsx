import { Outlet } from '@tanstack/react-router'
import Navbar from '../components/organisms/NavBar'

// This is my main layout — Navbar + page content + Footer
// Every page will be wrapped inside this layout
function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar component — appears on every page */}
      <Navbar />

      {/* Outlet — this is where my current page content appears */}
      <main className="container mx-auto p-4 grow">
        <Outlet />
      </main>

      {/* Footer — appears on every page, should be */}
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <p>© 2026 Dilek's Travel Journal</p>
      </footer>
    </div>
  )
}

export default RootLayout