import { useState } from 'react'

function FaqItem() {
  // repeats itself: useState(false) appears in all 3 components
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {/* repeats itself it: !isOpen toggle logic appears in all 3 components */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setIsOpen(!isOpen)}>
        Show Answer
      </button>
      {isOpen && <p className="mt-2">Here is the answer!</p>}
    </div>
  )
}

export default FaqItem