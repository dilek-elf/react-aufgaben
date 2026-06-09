import FaqItem from './components/FaqItem'
import NotificationPanel from './components/NotificationPanel'
import ThemeSwitch from './components/ThemeSwitch'

function App() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Custom Hooks Playground</h1>
      <FaqItem />
      <NotificationPanel />
      <ThemeSwitch />
    </div>
  )
}

export default App