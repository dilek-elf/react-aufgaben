import { createRootRoute,} from '@tanstack/react-router'
import RootLayout from '../layouts/RootLayout'

// createRootRoute — this is my base of all my routes
// instead of a plain div, we now use our RootLayout
export const Route = createRootRoute({
  component: RootLayout,
})