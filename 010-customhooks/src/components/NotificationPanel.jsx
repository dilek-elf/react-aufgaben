import { useState } from 'react'

function NotificationPanel() {
  // repets itself: useState(false) — same logic as in FaqItem
  const [showPanel, setShowPanel] = useState(false)

  return (
    <div>
      {/* repests itself: !showPanel toggle —  is the same logic as in FaqItem */}
      <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => setShowPanel(!showPanel)}>
        Notifications
      </button>
      {showPanel && <p className="mt-2">14 new messages</p>}
    </div>
  )
}

export default NotificationPanel