import { useState } from 'react'

function ThemeSwitch() {
  // repeats itself: useState(false) — third time the same logic
  // FIX: a custom hook would define this once and reuse it everywhere! Yes
  const [isDark, setIsDark] = useState(false)

  return (
    <div>
      {/* repeats itself: !isDark toggle — third time */}
      <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setIsDark(!isDark)}>
        {isDark ? 'Dark' : 'Light'}
      </button>
    </div>
  )
}

export default ThemeSwitch